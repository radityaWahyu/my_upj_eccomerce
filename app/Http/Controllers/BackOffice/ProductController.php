<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\Shop;
use Inertia\Inertia;
use App\Traits\Image;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductEditResource;
use App\Http\Resources\ProductImageResource;
use App\Http\Requests\BackOffice\ProductRequest;
use App\Http\Requests\BackOffice\ProductImageRequest;

class ProductController extends Controller
{
    use Image;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $response = $this->getProducts($request);
        $products = $response['products'];
        $params = $response['params'];
        $shops = Shop::latest()->get();

        return inertia(
            'BackOffice/Product/Index',
            [
                'products' => fn() => ProductResource::collection($products),
                'params' => (object)$params,
                'shop' => fn() => $request->user()->username !== 'administrator' ? null : $shops->map(fn($values) => ['id' => $values->id, 'name' => $values->name]),
            ],
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $shops = Shop::query()->get();
        $categories = Category::query()->get();

        return inertia('BackOffice/Product/ProductCreate', [
            'categories' => fn() => $categories->map(fn($category) => ['id' => $category->id, 'name' => $category->name]),
            'shops' => fn() => $request->user()->username == 'administrator' ? $shops->map(fn($employee) => [
                'id' => $employee->id,
                'name' => $employee->name,
            ]) : null,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {

        // dd($request->validated());

        try {
            $form_data = [
                'name' => $request->name,
                'type' => $request->type,
                'category_id' => $request->category,
                'price' => $request->price,
                'description' => $request->description,
            ];
            if ($request->user()->hasRole('administrator')) {
                $form_data += ['shop_id' => $request->shop];
            } else {
                $form_data += ['shop_id' => $request->user()->employee->shop->id];
            }

            $request->user()->product()->create($form_data);

            return to_route('backoffice.product.index')->with('success', 'Data Produk berhasil disimpan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Product $product)
    {
        $shops = Shop::query()->get();
        $categories = Category::query()->get();

        return inertia('BackOffice/Product/ProductEdit', [
            'product' => fn() => new ProductEditResource($product),
            'categories' => fn() => $categories->map(fn($category) => ['id' => $category->id, 'name' => $category->name]),
            'shops' => fn() => $request->user()->hasRole('administrator') ? $shops->map(fn($employee) => [
                'id' => $employee->id,
                'name' => $employee->name,
            ]) : null,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, Product $product)
    {
        try {
            $form_data = [
                'name' => $request->name,
                'type' => $request->type,
                'category_id' => $request->category,
                'price' => $request->price,
                'user_id' => $request->user()->id,
                'description' => $request->description,
            ];
            if ($request->user()->hasRole('administrator')) {
                $form_data += ['shop_id' => $request->shop];
            } else {
                $form_data += ['shop_id' => $request->user()->userable->shop->id];
            }

            $product->update($form_data);

            return to_route('backoffice.product.index')->with('success', 'Data Produk berhasil disimpan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        try {
            $product->delete();
            return redirect()->back()->with('success', 'Data Produk berhasil dihapus.');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function deleteAll(Request $request)
    {
        if (count($request->ids) > 0) {

            Product::destroy($request->ids);

            return redirect()->back()->with('success', 'Data Produk berhasil dihapus.');
        } else {
            return redirect()->back()->with('error', 'Data yang dikirimkan salah format.');
        }
    }

    public function images(Product $product)
    {

        return inertia('BackOffice/Product/ProductImages', [
            'product' => fn() => new ProductResource($product),
            'images' => fn() => ProductImageResource::collection($product->images),
        ]);
    }

    public function imagesStore(ProductImageRequest $request, Product $product)
    {
        try {


            $productImage = $request->file('image');
            $filename = Str::random(10) . '.' . $productImage->getClientOriginalExtension();
            $fullImagePath = 'images/products/' . $filename;

            $request->image->storeAs('images/products/', $filename);

            $product->images()->create([
                'title' => $request->title,
                'image_url' => $fullImagePath,
            ]);

            return redirect()->back()->with('success', 'Gambar berhasil ditambahkan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function deleteImage(ProductImage $image)
    {
        try {
            $image->delete();

            return redirect()->back()->with('success', 'Gambar berhasil dihapus.');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function getProducts(Request $request)
    {
        $perPage = 10;
        $params = ['perPage' => $perPage];
        if ($request->has('sortName') && $request->has('sortType')) {
            $params += ['sortName' => $request->sortName, 'sortType' => $request->sortType];
        } else {
            $params += ['sortName' => null, 'sortType' => null];
        }

        if ($request->has('search')) {
            $params += ['search' => $request->search];
        } else {
            $params += ['search' => null];
        }

        if ($request->has('perPage')) {
            $params += ['perPage' => $request->perPage];
            $perPage = $request->perPage;
        }

        if ($request->has('page')) $params += ['page' => $request->page];


        $products = Product::query()->with(
            [
                'shop' => function ($query) use ($request) {
                    if ($request->has('sortName') && $request->sortName == 'shop')
                        return $query->orderBy('shops.name', $request->sortType);
                },
                'category',
                'image'
            ]
        )
            ->when($request->has('sortName'), function ($query) use ($request) {
                if ($request->sortName !== 'shop') return $query->orderBy($request->sortName, $request->sortType);
            })
            ->when($request->has('search'), function ($query) use ($request) {
                return $query->where('name', 'like', '%' . $request->search . '%');
            })
            ->when($request->user('web')->hasRole('operator'), function ($query) use ($request) {
                return $query->where('shop_id', $request->user('web')->employee->shop_id);
            })
            ->latest()->paginate($perPage);

        return ['products' => $products, 'params' => $params];
    }
}
