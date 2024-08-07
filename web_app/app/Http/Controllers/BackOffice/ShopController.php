<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\Shop;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ShopResource;
use App\Http\Requests\BackOffice\ShopRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $response = $this->getShops($request);
        $shops = $response['shops'];
        $params = $response['params'];


        return Inertia::render(
            'BackOffice/Shop/Index',
            [
                'shops' => fn () => ShopResource::collection($shops),
                'params' => (object)$params,
            ],
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    /**
     * Store a newly created resource in storage.
     */
    public function store(ShopRequest $request)
    {
        try {
            Shop::create($request->validated());

            return redirect()->back()->with('success', 'Unit Layanan berhasil disimpan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Shop $shop)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Shop $shop)
    {
        $response = $this->getShops($request);

        try {
            return Inertia::render(
                'BackOffice/Shop/Index',
                [
                    'shops' => fn () => ShopResource::collection($response['shops']),
                    'shop' => fn () => new ShopResource($shop),
                ],
            );
        } catch (ModelNotFoundException $Exception) {
            return redirect()->back()->with('error', 'Data yang anda cari tidak ditemukan di sistem.');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ShopRequest $request, Shop $shop)
    {
        try {
            $shop->update($request->validated());

            return redirect()->route('backoffice.shop.index')->with('success', 'Unit Layanan berhasil disimpan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shop $shop)
    {
        try {
            $shop->delete();
            return redirect()->back()->with('success', 'Unit Layanan berhasil dihapus.');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function deleteAll(Request $request)
    {

        Shop::destroy($request->ids);
        return redirect()->route('backoffice.category.index')->with('success', 'Unit Layanan berhasil dihapus.');
    }

    public function getShops(Request $request)
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




        $shops = Shop::query();
        $shops = $shops->when($request->has('sortName'), function ($query) use ($request) {
            return $query->orderBy($request->sortName, $request->sortType);
        });
        $shops = $shops->when($request->has('search'), function ($query) use ($request) {
            return $query->where('name', 'like', '%' . $request->search . '%');
        });

        $shops = $shops->latest()->paginate($perPage);

        return ['shops' => $shops, 'params' => $params];
    }
}
