<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\User;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Requests\BackOffice\UserRequest;
use App\Http\Resources\UserEditResource;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $response = $this->getUsers($request);
        $users = $response['users'];
        $params = $response['params'];


        return inertia(
            'BackOffice/User/Index',
            [
                'users' => fn() => UserResource::collection($users),
                'params' => (object)$params,
            ],
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $employees = Employee::query()
            ->whereDoesntHave('user')
            ->get();

        return inertia('BackOffice/User/UserCreate', [
            'employees' => fn() => $employees->map(fn($employee) => [
                'id' => $employee->id,
                'name' => $employee->name,
                'shop' => $employee->shop->name,
            ]),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        // dd($request->validated());
        try {
            $employee = Employee::find($request->employee);
            $form_data = $request->only('username', 'password');
            $form_data += ['is_verified' => true];

            $user = $employee->user()->create($form_data);
            $user->assignRole('operator');

            return to_route('backoffice.user.index')->with('success', 'Data User berhasil disimpan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        try {
            return inertia(
                'BackOffice/User/UserEdit',
                [
                    'user' => fn() => new UserEditResource($user),
                ],
            );
        } catch (ModelNotFoundException $Exception) {
            return redirect()->back()->with('error', 'Data yang anda cari tidak ditemukan di sistem.');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, User $user)
    {
        try {

            $form_data = ['username' => $request->username];
            if ($request->filled('password')) {
                $form_data += ['password' => $request->password];
            }

            $user->update($form_data);

            return to_route('backoffice.user.index')->with('success', 'Data User berhasil disimpan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        try {
            $user->delete();
            return redirect()->back()->with('success', 'Data User berhasil dihapus.');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }
    public function getUsers(Request $request)
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




        $user = Employee::query()->whereHas('user');
        $user = $user->when($request->has('search'), function ($query) use ($request) {
            return $query->where('name', 'like', '%' . $request->search . '%');
        });

        $user = $user->employees()->latest()->paginate($perPage);

        return ['users' => $user, 'params' => $params];
    }
}
