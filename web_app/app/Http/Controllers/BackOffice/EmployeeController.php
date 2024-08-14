<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\Shop;
use Inertia\Inertia;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ShopResource;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\EmployeeFormResource;
use App\Http\Requests\BackOffice\EmployeeRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $response = $this->getEmployees($request);
        $employees = $response['employees'];
        $params = $response['params'];


        return Inertia::render(
            'BackOffice/Employee/Index',
            [
                'employees' => fn() => EmployeeResource::collection($employees),
                'params' => (object)$params,
            ],
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $shops = Shop::get();

        return Inertia::render('BackOffice/Employee/EmployeeForm', [
            'shops' => fn() => $shops->map(fn($shop) => [
                'id' =>  $shop->id,
                'name' => $shop->name,
            ]),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeRequest $request)
    {

        // dd($request->validated());
        try {
            $request = $request->safe()->merge(['shop_id' => $request->shop, 'address' => $request->address]);

            Employee::create($request->except(['shop']));

            return to_route('backoffice.employee.index')->with('success', 'Data Pegawai berhasil disimpan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        $shops = Shop::get();
        try {
            return Inertia::render(
                'BackOffice/Employee/EmployeeForm',
                [
                    'employee' => fn() => new EmployeeFormResource($employee),
                    'shops' => fn() => $shops->map(fn($shop) => [
                        'id' =>  $shop->id,
                        'name' => $shop->name,
                    ]),
                ],
            );
        } catch (ModelNotFoundException $Exception) {
            return redirect()->back()->with('error', 'Data yang anda cari tidak ditemukan di sistem.');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EmployeeRequest $request, Employee $employee)
    {
        try {
            $request = $request->safe()->merge(['shop_id' => $request->shop, 'address' => $request->address]);
            $employee->update($request->except(['shop']));

            return to_route('backoffice.employee.index')->with('success', 'Data Pegawai berhasil disimpan');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        try {
            $employee->delete();
            return redirect()->back()->with('success', 'Data Pegawai berhasil dihapus.');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function deleteAll(Request $request)
    {
        if (count($request->ids) > 0) {

            Employee::destroy($request->ids);

            return redirect()->back()->with('success', 'Data Pegawai berhasil dihapus.');
        } else {
            return redirect()->back()->with('error', 'Data yang dikirimkan salah format.');
        }
    }

    public function getEmployees(Request $request)
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




        $employees = Employee::query();
        $employees = $employees->when($request->has('sortName'), function ($query) use ($request) {
            return $query->orderBy($request->sortName, $request->sortType);
        });
        $employees = $employees->when($request->has('search'), function ($query) use ($request) {
            return $query->where('name', 'like', '%' . $request->search . '%')
                ->orWhere('phone', 'like', '%' . $request->search . '%')
                ->orWhere('whatsapp', 'like', '%' . $request->search . '%');
        });

        $employees = $employees->employees()->latest()->paginate($perPage);

        return ['employees' => $employees, 'params' => $params];
    }
}
