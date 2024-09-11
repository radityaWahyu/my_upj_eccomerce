<?php

namespace App\Http\Controllers\BackOffice;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Requests\BackOffice\CategoryRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use PhpParser\Node\Stmt\TryCatch;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $response = $this->getCategories($request);
        $categories = $response['categories'];
        $params = $response['params'];


        return Inertia::render(
            'BackOffice/Category/Index',
            [
                'categories' => fn () => CategoryResource::collection($categories),
                'params' => (object)$params,
            ],
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        try {
            Category::create($request->validated());

            return redirect()->back()->with('success', 'Data Kategori berhasil disimpan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Category $category)
    {
        $response = $this->getCategories($request);

        try {
            return Inertia::render(
                'BackOffice/Category/Index',
                [
                    'categories' => fn () => CategoryResource::collection($response['categories']),
                    'category' => fn () => new CategoryResource($category),
                ],
            );
        } catch (ModelNotFoundException $Exception) {
            return redirect()->back()->with('error', 'Data yang anda cari tidak ditemukan di sistem.');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryRequest $request, Category $category)
    {
        try {
            $category->update($request->validated());

            return redirect()->route('backoffice.category.index')->with('success', 'Data Kategori berhasil disimpan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        try {
            $category->delete();
            return redirect()->back()->with('success', 'Data Kategori berhasil dihapus.');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function deleteAll(Request $request)
    {

        Category::destroy($request->ids);
        return redirect()->route('backoffice.category.index')->with('success', 'Data Kategori berhasil dihapus.');
    }

    public function getCategories(Request $request)
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




        $categories = Category::query();
        $categories = $categories->when($request->has('sortName'), function ($query) use ($request) {
            return $query->orderBy($request->sortName, $request->sortType);
        });
        $categories = $categories->when($request->has('search'), function ($query) use ($request) {
            return $query->where('name', 'like', '%' . $request->search . '%');
        });

        $categories = $categories->latest()->paginate($perPage);

        return ['categories' => $categories, 'params' => $params];
    }
}
