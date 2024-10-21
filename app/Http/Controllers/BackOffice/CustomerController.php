<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CustomerProfilResource;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $response = $this->getCustomer($request);

        return inertia('BackOffice/Customer/Index', [
            'customers' => fn() => CustomerProfilResource::collection($response['customers']),
            'params' => fn() => (object)$response['params'],
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        try {
            $customer->update(['is_enabled' => $request->status]);

            return redirect()->route('backoffice.customer.index')->with('success', 'Status Pelanggan berhasil diubah');
        } catch (ModelNotFoundException $ex) {

            return redirect()->route('backoffice.category.index')->with('error', 'Data Pelanggah tidak ditemukan.');
        } catch (\Illuminate\Database\QueryException $exception) {

            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
    }

    public function getCustomer(Request $request) {}
}
