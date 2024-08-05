<?php

namespace App\Http\Controllers\BackOffice;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Requests\BackOffice\StoreCategoryRequest;
use App\Http\Requests\BackOffice\UpdateCategoryRequest;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = 2;
        $params = ['perPage' => 2];
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




        $categories = Category::query();
        $categories = $categories->when($request->has('sortName'), function ($query) use ($request) {
            return $query->orderBy($request->sortName, $request->sortType);
        });
        $categories = $categories->when($request->has('search'), function ($query) use ($request) {
            return $query->where('name', 'like', '%' . $request->search . '%');
        });

        $categories = $categories->paginate($perPage);


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
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
