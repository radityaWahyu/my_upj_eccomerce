<?php

namespace App\Http\Controllers\BackOffice;

use Carbon\Carbon;
use App\Models\Shop;
use App\Models\Jurnal;
use App\Models\Product;
use App\Models\Customer;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\TransactionResource;
use App\Http\Resources\CustomerProfilResource;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {

        $jurnal = Jurnal::whereMonth('transaction_date', Carbon::today()->format('m'))
            ->when($request->user('web')->hasRole('operator'), function ($query) use ($request) {
                return $query->where('shop_id', $request->user('web')->employee->shop_id);
            });

        $income = $jurnal->sum('income');
        $expense = $jurnal->sum('expense');

        $products = Product::query()
            ->when($request->user()->hasRole('operator'), function ($query) use ($request) {
                return $query->where('shop_id', $request->user()->employee->shop_id);
            })->get();

        $transactions = Transaction::query()
            ->withCount(['details'])
            ->when($request->user()->hasRole('operator'), function ($query) use ($request) {
                return $query->where('shop_id', $request->user()->employee->shop_id);
            });

        $transactions_count = Transaction::where('status', 'pesan')->count();
        $transactions_finished_count = Transaction::where('status', 'dibayar')->count();

        $transactions = $transactions->latest()
            ->take(6)
            ->get();

        $jasa_count = $products->where('type', 'jasa')->count();
        $product_count = $products->where('type', 'produk')->count();

        if ($request->user()->hasRole('operator')) {
            $customers = null;
            $shop_count = null;
            $customer_count = null;
        } else {
            $customers = Customer::query();
            $customer_count = $customers->count();
            $customers = $customers->latest()->take(6)->get();

            $shop_count = Shop::query()->count();
        }


        return inertia('BackOffice/Dashboard/Index', [
            'income' => $income,
            'expense' => $expense,
            'jasa_count' => fn() => $jasa_count,
            'produk_count' => fn() => $product_count,
            'shop_count' => fn() => $shop_count,
            'customer_count' => fn() => $customer_count,
            'transaction_count' => fn() => $transactions_count,
            'transaction_finished_count' => fn() => $transactions_finished_count,
            'customers' => fn() => $customers !== null ? CustomerProfilResource::collection($customers) : null,
            'transactions' => fn() => TransactionResource::collection($transactions),
        ]);
    }
}
