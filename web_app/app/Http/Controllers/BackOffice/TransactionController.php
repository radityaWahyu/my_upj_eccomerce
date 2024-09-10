<?php

namespace App\Http\Controllers\BackOffice;

use Carbon\Carbon;
use App\Models\Jurnal;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\TransactionInvoiceResource;
use App\Http\Resources\TransactionResource;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $status)
    {

        $response = $this->getTransactions($request, $status);

        if ($status == 'pesan') {
            $title = 'Transaksi Pemesanan';
        } else {
            $title = 'Transaksi Selesai';
        }

        $params = $response['params'] + ['title' => $title];

        return inertia('BackOffice/Transaction/Index', [
            'transactions' => fn() => TransactionResource::collection($response['transactions']),
            'params' => fn() => (object)$params,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        return inertia('BackOffice/Transaction/TransactionDetails', [
            'transaction' => fn() => new TransactionInvoiceResource($transaction)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function invoice(Transaction $transaction)
    {
        return inertia('BackOffice/Prints/Invoices', [
            'transaction' => fn() => new TransactionInvoiceResource($transaction)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        try {

            DB::transaction(function () use ($request, $transaction) {
                $transaction->update(['status' => $request->status]);

                if ($request->status == 'dibayar') {

                    $finsihedTransactionDate = Carbon::today();
                    $jurnal_count = Jurnal::whereDate('transaction_date', Carbon::today())->count();
                    $jurnal_code = 'JR' . Carbon::today()->format('dmY') . '' . str_pad($jurnal_count + 1, 3, '0', STR_PAD_LEFT);

                    Jurnal::create([
                        'jurnal_code' => $jurnal_code,
                        'income' => $transaction->total,
                        'description' => 'Transaksi ' . $transaction->transaction_code . ' telah dibayar pada tanggal ' . $finsihedTransactionDate->format('d/m/Y') . '.',
                        'transaction_id' => $transaction->id,
                        'user_id' => $request->user('web')->id,
                        'shop_id' => $transaction->shop_id,
                        'transaction_date' => $finsihedTransactionDate,
                    ]);

                    $transaction->update(['finished_at' => $finsihedTransactionDate]);
                }
            });

            return redirect()->back()->with('success', 'Status berhasil di rubah');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }

    public function getTransactions(Request $request, $status)
    {
        $perPage = 10;
        $params = [];

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

        if ($request->has('perPage')) $perPage = $request->perPage;

        $transactions = Transaction::query()
            ->with(['shop', 'customer'])
            ->withCount('details')
            ->when($request->has('sortName'), function ($query) use ($request) {
                return $query->orderBy($request->sortName, $request->sortType);
            })
            ->when($request->has('search'), function ($query) use ($request) {
                return $query->where('transaction_code', $request->search);
            })
            ->when($request->user('web')->hasRole('operator'), function ($query) use ($request) {
                return $query->where('shop_id', $request->user('web')->employee->shop_id);
            });

        if ($status == 'pesan') $transactinos = $transactions->whereNotIn('status', ['dibayar']);

        $transactions = $transactions->latest()->paginate($perPage);

        return ['transactions' => $transactions, 'params' => $params];
    }
}
