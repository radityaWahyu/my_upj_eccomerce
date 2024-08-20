<?php

namespace App\Http\Controllers\BackOffice;

use App\Traits\Image;
use App\Models\Banner;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BannerResource;
use App\Http\Requests\BackOffice\BannerRequest;

class BannerController extends Controller
{
    use Image;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = 10;

        if ($request->has('perPage')) {
            $perPage = $request->perPage;
        }
        $banners = Banner::query()->paginate($perPage);

        return inertia('BackOffice/Banner/Index', [
            'banners' => fn() => BannerResource::collection($banners),
        ]);
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
    public function store(BannerRequest $request)
    {
        try {


            $bannerImage = $request->file('image');
            $filename = Str::random(10) . '.' . $bannerImage->getClientOriginalExtension();
            $fullImagePath = 'images/banners/' . $filename;

            $request->image->storeAs('images/banners/', $filename);

            Banner::create([
                'title' => $request->title,
                'image' => $fullImagePath,
                'is_active' => true,
            ]);

            return redirect()->back()->with('success', 'Banner berhasil ditambahkan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Banner $banner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Banner $banner)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BannerRequest $request, Banner $banner)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Banner $banner)
    {
        try {
            $banner->delete();

            return redirect()->back()->with('success', 'Banner berhasil dihapus.');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function setActive(Request $request, Banner $banner)
    {
        try {
            $banner->update([
                'is_active' => $request->active,
            ]);
            return redirect()->back()->with('success', 'Banner berhasil dirubah');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }
}
