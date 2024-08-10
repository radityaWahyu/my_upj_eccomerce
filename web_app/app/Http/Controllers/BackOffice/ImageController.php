<?php

namespace App\Http\Controllers\BackOffice;

use Illuminate\View\View;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Intervention\Image\ImageManagerStatic;

class ImageController extends Controller
{
    public function index(): View
    {
        return view('image-upload');
    }
    public function store(Request $request): RedirectResponse
    {
        $this->validate($request, ['image' => ['required', 'image', 'mimes:jpg,png,jpeg,gif,svg', 'max:2048'],]);
        $input = $request->all();
        $image = ImageManagerStatic::make($request->file('image'))->encode('webp');
        $imageName = Str::random() . '.webp';
        $image->save(public_path('images/' . $imageName));
        $input['image_name'] = $imageName;
        return back()->with('success', 'Image converted and saved successfully!')->with('imageName', $imageName);
    }
}
