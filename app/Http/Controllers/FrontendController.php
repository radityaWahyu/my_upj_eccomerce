<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Cart;
use App\Models\Shop;
use App\Models\Banner;
use App\Models\Product;
use App\Models\Category;
use App\Models\Customer;
use App\Models\Transaction;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\CartResource;
use App\Http\Resources\ShopResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\BannerResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\EmployeeResource;
use App\Http\Requests\LoginFrontendRequest;
use App\Http\Resources\ProductDetailResource;
use App\Http\Requests\BackOffice\CustomerRequest;
use App\Http\Requests\BackOffice\EditProfilCustomerRequest;
use App\Http\Resources\CustomerProfilResource;
use App\Http\Resources\TransactionDetailResource;
use App\Http\Resources\TransactionResource;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class FrontendController extends Controller
{
    public function index()
    {
        $banners = Banner::where('is_active', true)->get();
        $products = Product::query();
        $product_count = $products->count();
        $products = $products->inRandomOrder()->limit(6)->get();
        $shops = Shop::query();
        $shop_count = $shops->count();
        $shops = $shops->inRandomOrder()->limit(6)->get();

        return inertia('Home', [
            'banners' => fn() => BannerResource::collection($banners),
            'products' => fn() => ProductResource::collection($products),
            'shops' => fn() => ShopResource::collection($shops),
            'product_count' => fn() => $product_count,
            'shop_count' => fn() => $shop_count,
            'event' => fn() => [
                'author' => 'SMKN 1 Purwosari Kab Pasuruan',
                'title' => 'My UPJ SMKN 1 Purwosari',
                'description' => 'Aplikasi Eccomerce untuk setiap Unit Layanan Jasa yang terdapat di SMKN 1 Purwosari Kab. Pasuruan',
            ]
        ]);
    }

    public function products(Request $request)
    {
        $per_page = 10;
        $params = [];

        if ($request->has('per_page')) $per_page = $request->per_page;
        if ($request->has('category')) $params += ['category' => $request->category];
        if ($request->has('page')) $params += ['page' => $request->page];


        $categories = Category::get();

        $products = Product::query()->with(['category', 'shop'])
            ->whereHas('category', function ($query) use ($request) {
                if ($request->category !== 'all' && $request->has('category'))
                    return $query->where('slug', $request->category);
            })
            ->latest()
            ->paginate($per_page);

        return inertia('Products', [
            'categories' => fn() => CategoryResource::collection($categories),
            'products' => fn() => ProductResource::collection($products),
            'params' => fn() => empty($params) ? null : $params,
            'active' => fn() => ($request->has('category')) ? $request->category : 'all',
            'event' => fn() => [
                'author' => 'SMKN 1 Purwosari Kab Pasuruan',
                'title' => 'Daftar Produk dan Jasa',
                'description' => 'Daftar Produk dan jasa yang terdapat pada setiap unit layanan di SMKN 1 Purwosari Kab. Pasuruan',
            ]
        ]);
    }

    public function productDetails(Product $product)
    {

        try {
            $products = Product::with(['images', 'shop' => ['employees'], 'category:id,name', 'images'])
                ->whereNotIn('id', [$product->id])->limit(5)->get();

            $description = strip_tags($product->description);

            if (!empty($description)) {
                $description = Str::substr($description, 0, 100);
            } else {
                $description = 'Detail produk yang ditawarkan pada unit layanan SMKN 1 Purwosari';
            }


            return inertia('ProductDetails', [
                'product' => fn() => new ProductDetailResource($product->load(['images', 'shop' => ['employees'], 'category:id,name', 'images'])),
                'products' => fn() => ProductResource::collection($products),
                'event' => fn() => [
                    'author' => 'SMKN 1 Purwosari Kab Pasuruan',
                    'title' => $product->name,
                    'description' => $description,
                ],
            ]);
        } catch (ModelNotFoundException $exception) {
            abort(404, 'Data Produk tidak ditemukan');
        }
    }

    public function register()
    {
        return inertia('Register', [
            'event' => fn() => [
                'author' => 'SMKN 1 Purwosari Kab Pasuruan',
                'title' => 'Form Pendaftaraan Pelanggan',
                'description' => 'Form yang dipergunakan untuk mendaftarkan pelanggan baru yang akan menggunakan aplikasi MY UPJ di SMKN 1 Purwosari',
            ],
        ]);
    }

    public function registerStore(CustomerRequest $request)
    {
        try {
            $customerField = $request->validated() + ['is_verified' => true, 'is_enabled' => true];
            $customer = Customer::create($customerField);

            return inertia('SuccessRegistration');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function login()
    {
        return inertia('Login');
    }

    public function loginStore(LoginFrontendRequest $request)
    {
        $credentials = $request->only('username', 'password');
        $credentials += ['is_enabled' => true];
        //dd($credentials);
        if (!Auth::guard('customer')->attempt($credentials))
            return redirect()
                ->back()
                ->with('error', 'Username dan password salah, silahkan mengecek kembali penulisan username dan password');


        $request->session()->regenerate();

        return to_route('frontend.index')->with('success', 'Selamat datang ' . $request->username);
    }

    public function logout(Request $request)
    {
        Auth::guard('customer')->logout();

        return redirect()->back()->with('success', 'Anda berhasil keluar dari sistem');
    }

    public function shops(Request $request)
    {
        $per_page = 10;
        $params = [];

        if ($request->has('page')) $params += ['page' => $request->page];

        $shops = Shop::query()
            ->latest()
            ->paginate($per_page);

        return inertia('Shops', [
            'shops' => fn() => ShopResource::collection($shops),
            'event' => fn() => [
                'author' => 'SMKN 1 Purwosari Kab Pasuruan',
                'title' => 'Daftar Unit Layanan',
                'description' => 'Daftar unit layanan yang terdapat di setiap konsentrasi keahlian untuk memberikan pelayanan produk jadi dan jasa kepada umum',
            ]
        ]);
    }

    public function shopsDetail(Request $request, Shop $shop)
    {

        try {
            $per_page = 10;
            $params = [];

            if ($request->has('per_page')) $per_page = $request->per_page;
            if ($request->has('page')) $params += ['page' => $request->page];

            $shop->load(['employees', 'products'])
                ->loadCount('products');

            $products = $shop->products()->paginate($per_page);

            return inertia('ShopsDetail', [
                'shop' => fn() => new ShopResource($shop),
                'products' => fn() => ProductResource::collection($products),
                'employees' => fn() => EmployeeResource::collection($shop->employees),
                'params' => fn() => $params,
                'event' => fn() => [
                    'author' => 'SMKN 1 Purwosari Kab Pasuruan',
                    'title' => $shop->name,
                    'description' => $shop->name,
                ],
            ]);
        } catch (ModelNotFoundException $exception) {
            abort(404, 'Unit Layanan tidak ditemukan');
        }
    }

    public function search(Request $request)
    {
        if ($request->missing('key')) return abort(404, 'Produk & jasa yang anda cari tidak ditemukan');

        $per_page = 10;
        $params = ['key' => $request->key];

        if ($request->has('per_page')) $per_page = $request->per_page;
        if ($request->has('category')) $params += ['category' => $request->category];
        if ($request->has('page')) $params += ['page' => $request->page];

        $categories = Category::get();

        $products = Product::query()->with(['category', 'shop'])
            ->whereHas('category', function ($query) use ($request) {
                if ($request->category !== 'all' && $request->has('category')) return $query->where('slug', $request->category);
            })
            ->where('name', 'like', '%' . $request->key . '%')
            ->latest()
            ->paginate($per_page);

        return inertia('Search', [
            'categories' => fn() => CategoryResource::collection($categories),
            'products' => fn() => ProductResource::collection($products),
            'params' => fn() => empty($params) ? null : $params,
            'active' => fn() => ($request->has('category')) ? $request->category : null,
            'event' => fn() => [
                'author' => 'SMKN 1 Purwosari Kab Pasuruan',
                'title' => 'Daftar Produk dan Jasa',
                'description' => 'Daftar Produk dan jasa yang terdapat pada setiap unit layanan di SMKN 1 Purwosari Kab. Pasuruan',
            ]
        ]);
    }

    public function myProfile(Request $request)
    {
        dd($request->user()->isCustomer());
    }

    public function addToCart(Request $request, Product $product)
    {
        try {

            $cart = $request->user('customer')->carts()->where('product_id', $product->id)->first();

            if (!empty($cart)) {
                $newQuantity = $cart->quantity + $request->qty;
                $cart->quantity = $newQuantity;
                $cart->total = $newQuantity * $cart->price;
                $cart->save();
            } else {
                $request->user('customer')
                    ->carts()->create([
                        'quantity' => $request->qty,
                        'price' => $product->price,
                        'total' => $request->qty * $product->price,
                        'product_id' => $product->id,
                    ]);
            }



            return redirect()->back()->with('success', 'Item ditambahkan ke keranjang');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function getCart(Request $request)
    {
        if (Auth::guard('customer')->check()) {

            $carts = $request->user('customer')->carts()->with(['product' => ['shop']])
                ->get();


            return inertia('Carts', [
                'carts' => fn() => CartResource::collection($carts),
                'event' => fn() => [
                    'author' => 'SMKN 1 Purwosari Kab Pasuruan',
                    'title' => 'Keranjang Belanja',
                    'description' => 'Daftar produk yang masuk dalam keranjang belanja',
                ]
            ]);
        }

        return inertia('Carts', [
            'carts' => fn() => null,
            'event' => fn() => [
                'author' => 'SMKN 1 Purwosari Kab Pasuruan',
                'title' => 'Keranjang Belanja',
                'description' => 'Daftar produk yang masuk dalam keranjang belanja',
            ]
        ]);
    }

    public function updateProductCartQty(Request $request, Cart $cart)
    {
        try {
            $total = $cart->price * $request->qty;
            $cart->quantity = $request->qty;
            $cart->total = $total;
            $cart->save();

            return redirect()->back();
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function deleteProductCart(Cart $cart)
    {
        try {
            $cart->delete();

            return redirect()->back()->with('success', 'Item dihapus dari keranjang');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function emptyProductCart(Request $request)
    {
        try {

            Cart::where('customer_id', $request->user('customer')->id)->delete();

            return redirect()->back()->with('success', 'Item dihapus semua');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function createTransaction(Request $request)
    {
        if (!Auth::guard('customer')->check()) return abort('403', 'Silahkan Login terlebih dahulu');

        $shops = Cart::select('products.shop_id as id')
            ->join('products', 'carts.product_id', '=', 'products.id')
            ->orderBy('products.shop_id', 'asc')
            ->groupBy('products.shop_id')
            ->get()->toArray();

        $carts = Cart::select('carts.*', 'products.shop_id')
            ->join('products', 'carts.product_id', '=', 'products.id')
            ->orderBy('products.shop_id', 'asc')
            ->where('carts.customer_id', $request->user('customer')->id)
            ->get()->toArray();



        foreach ($shops as $shop) {
            $transaction_count = Transaction::whereDate('created_at', Carbon::today())->count();
            $transaction_code = 'TR' . Carbon::today()->format('dmY') . '' . str_pad($transaction_count + 1, 3, '0', STR_PAD_LEFT);

            $transaction = Transaction::create([
                'customer_id' => $request->user('customer')->id,
                'transaction_code' => $transaction_code,
                'shop_id' => $shop['id'],
                'total' => 0,
            ]);

            $total = 0;
            foreach ($carts as $cart) {
                if ($cart['shop_id'] == $shop['id']) {
                    $total += $cart['total'];
                    $transaction->details()->create([
                        'product_id' => $cart['product_id'],
                        'quantity' => $cart['quantity'],
                        'price' => $cart['price'],
                        'total' => $cart['total'],
                        'notes' => $cart['notes'],
                    ]);
                    Cart::find($cart['id'])->delete();
                } else {
                    continue;
                }
            }

            Transaction::where('id', $transaction->id)
                ->update(['total' => $total]);
        }

        return inertia('CartsSuccessSend');
    }

    public function getTransactions(Request $request)
    {
        if (!Auth::guard('customer')->check())
            return inertia('Transactions', [
                'transactions' => fn() => null,
                'params' => fn() => null,
            ]);


        $per_page = 10;
        $params = [];

        if ($request->has('per_page')) $per_page = $request->per_page;
        if ($request->has('page')) $params += ['page' => $request->page];

        $transactions = $request->user('customer')
            ->transactions()
            ->with(['shop', 'details'])
            ->withCount('details');

        $transactions = $transactions->paginate($per_page);

        // dd($transactions);

        return inertia('Transactions', [
            'transactions' => fn() => TransactionResource::collection($transactions),
            'params' => fn() => empty($params) ? null : $params,
        ]);
    }

    public function transactionDetails(Request $request, Transaction $transaction)
    {
        try {
            if (!Auth::guard('customer')->check()) return abort('403', 'Anda harus login terlebih dahulu agar melihat detail transaksi anda.');

            $transaction = $transaction->load(['shop', 'details'])->loadCount('details');

            return inertia('TransactionsDetail', [
                'transaction' => fn() => new TransactionDetailResource($transaction),
            ]);
        } catch (ModelNotFoundException $th) {
            abort('404', 'Halaman tidak ditemukan');
        }
    }

    public function cancelTransaction(Transaction $transaction)
    {
        try {
            // $transaction->status = 'batal';
            // $transaction->save();
            $transaction->delete();

            return redirect()->back()->with('success', 'Transaksi dibatalkan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function getProfil(Request $request)
    {
        if (!Auth::guard('customer')->check()) return abort('404', 'Profil anda tidak ditemukan dalam sistem');

        $customer = $request->user('customer');

        return inertia('ProfilEditForm', [
            'customer' => fn() => new CustomerProfilResource($customer),
        ]);
    }

    public function updateProfil(EditProfilCustomerRequest $request)
    {
        try {
            $customer = $request->user()->customer;
            $customer->update($request->validated());

            return redirect()->back()->with('success', 'Profil pelanggan berhasil diupdate');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function contactUs()
    {
        return inertia('ContactUs');
    }
}
