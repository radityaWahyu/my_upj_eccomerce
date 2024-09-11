<?php

namespace App\Http\Controllers\BackOffice;

use Carbon\Carbon;
use App\Models\Shop;
use App\Models\Jurnal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\BackOffice\JurnalRequest;
use App\Http\Resources\JurnalResource;
use App\Http\Resources\JurnalUnitResource;

class JurnalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $response = $this->getTransactions($request);
        $shops = Shop::get();

        return inertia('BackOffice/Jurnal/Index', [
            'jurnals' => fn() => JurnalResource::collection($response['jurnals']),
            'shops' => fn() => $shops->map(fn($shop) => ['id' => $shop->id, 'name' => $shop->name]),
            'total_income' => fn() => (int)$response['total_income'],
            'total_expense' => fn() => (int)$response['total_expense'],
            'params' => (object)$response['params'],
        ]);
    }

    public function create(Request $request)
    {
        return inertia('BackOffice/Jurnal/JurnalCreate');
    }

    public function store(JurnalRequest $request)
    {
        try {

            $jurnal_count = Jurnal::whereDate('transaction_date', Carbon::today())->count();
            $jurnal_code = 'JR' . Carbon::today()->format('dmY') . '' . str_pad($jurnal_count + 1, 3, '0', STR_PAD_LEFT);

            $field = [
                'jurnal_code' => $jurnal_code,
                'description' => $request->description,
                'transaction_date' => $request->transaction_date,
                'user_id' => $request->user('web')->id,
                'shop_id' => $request->user('web')->employee->shop_id,
            ];

            if ($request->type == 'income') {
                $field += ['income' => $request->total];
            } else {
                $field += ['expense' => $request->total];
            }

            Jurnal::create($field);

            return to_route('backoffice.jurnal.index')->with('success', 'Jurnal berhasil di masukkan.');
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }

    public function getByUnit(Request $request)
    {
        $params = [];

        if ($request->has('sortName') && $request->has('sortType')) {
            $params += ['sortName' => $request->sortName, 'sortType' => $request->sortType];
        } else {
            $params += ['sortName' => null, 'sortType' => null];
        }

        if ($request->has('start_date') && $request->has('end_date')) {
            $params += ['start_date' => $request->start_date, 'end_date' => $request->end_date];
        } else {
            $params += ['start_date' => null, 'end_date' => null];
        }

        $shops = DB::table('shops')
            ->select('shops.id', 'shops.name', DB::raw('coalesce(sum(jurnals.income),0) as total_income'), DB::raw('coalesce(sum(jurnals.expense),0) as total_expense'), DB::raw('coalesce(sum(jurnals.income),0) - coalesce(sum(jurnals.expense),0) as total_saldo'))
            ->leftJoin('jurnals', function ($query) use ($request) {
                $query->on('jurnals.shop_id', '=', 'shops.id')
                    ->when($request->has('start_date') && $request->has('end_date'), function ($query) use ($request) {
                        return $query->whereDate('jurnals.transaction_date', '>=', $request->start_date)
                            ->whereDate('jurnals.transaction_date', '<=', $request->end_date);
                    })
                    ->when($request->missing('start_date') && $request->missing('end_date'), function ($query) use ($request) {
                        return $query->whereMonth('jurnals.transaction_date', Carbon::today()->format('m'));
                    });
            })
            ->groupBy('shops.id')
            ->groupBy('shops.name')
            ->get();


        return inertia('BackOffice/Jurnal/JurnalUnit', [
            'shops' => fn() => JurnalUnitResource::collection($shops),
            'params' => (object)$params,
        ]);
    }

    public function getTransactions($request)
    {

        $params = [];

        if ($request->has('sortName') && $request->has('sortType')) {
            $params += ['sortName' => $request->sortName, 'sortType' => $request->sortType];
        } else {
            $params += ['sortName' => null, 'sortType' => null];
        }

        if ($request->has('start_date') && $request->has('end_date')) {
            $params += ['start_date' => $request->start_date, 'end_date' => $request->end_date];
        } else {
            $params += ['start_date' => null, 'end_date' => null];
        }

        if ($request->has('filter_by_shop')) {
            $params += ['filter_by_shop' => $request->filter_by_shop];
        } else {
            $params += ['filter_by_shop' => ''];
        }

        $jurnals = Jurnal::query()
            ->with(['shop'])
            ->when($request->has('sortName'), function ($query) use ($request) {
                return $query->orderBy($request->sortName, $request->sortType);
            })
            ->when($request->user('web')->hasRole('operator'), function ($query) use ($request) {
                return $query->where('shop_id', $request->user('web')->employee->shop_id);
            })
            ->when($request->has('filter_by_shop'), function ($query) use ($request) {
                return $query->where('shop_id', $request->filter_by_shop);
            })
            ->when($request->has('start_date') && $request->has('end_date'), function ($query) use ($request) {
                return $query->whereDate('transaction_date', '>=', $request->start_date)
                    ->whereDate('transaction_date', '<=', $request->end_date);
            })
            ->when($request->missing('start_date') && $request->missing('end_date'), function ($query) use ($request) {
                return $query->whereMonth('transaction_date', Carbon::today()->format('m'));
            })
            ->orderBy('transaction_date', 'desc');

        $total_income = $jurnals->sum('income');
        $total_expense = $jurnals->sum('expense');





        $jurnals = $jurnals->get();

        return [
            'jurnals' => $jurnals,
            'params' => $params,
            'total_income' => $total_income,
            'total_expense' => $total_expense,
        ];
    }
}
