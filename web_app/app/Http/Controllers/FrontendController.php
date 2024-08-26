<?php

namespace App\Http\Controllers;

use App\Http\Requests\BackOffice\CustomerRequest;
use App\Models\Shop;
use App\Models\Banner;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\ShopResource;
use App\Http\Resources\BannerResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\ProductDetailResource;
use App\Models\Customer;
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
        $products = Product::query()->with(['category', 'shop']);
        $products = $products->whereHas('category', function ($query) use ($request) {
            if ($request->category !== 'all' && $request->has('category')) return $query->where('slug', $request->category);
        });
        $products = $products->latest()
            ->paginate($per_page);

        return inertia('Products', [
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
            $customer = Customer::create($request->except('username', 'password'));
            $customer->user()->create([
                'username' => $request->username,
                'password' => $request->password,
                'is_enabled' => true,
                'is_verified' => true,
            ]);
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function login()
    {
        return inertia('Login');
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
                ->withCount('products');

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
        if ($request->has('key')) {
            $per_page = 10;
            $params = ['key' => $request->key];

            if ($request->has('per_page')) $per_page = $request->per_page;
            if ($request->has('category')) $params += ['category' => $request->category];
            if ($request->has('page')) $params += ['page' => $request->page];


            $categories = Category::get();
            $products = Product::query()->with(['category', 'shop']);
            $products = $products->whereHas('category', function ($query) use ($request) {
                if ($request->category !== 'all' && $request->has('category')) return $query->where('slug', $request->category);
            });
            $products = $products->where('name', 'like', '%' . $request->key . '%');
            $products = $products->latest()
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

        return abort(404, 'Produk & jasa yang anda cari tidak ditemukan');
    }
}
