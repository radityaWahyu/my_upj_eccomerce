<?php

namespace App\Http\Controllers\BackOffice;

use Carbon\Carbon;
use App\Models\Jurnal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
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

        return inertia('BackOffice/Jurnal/Index', [
            'jurnals' => fn() => JurnalResource::collection($response['jurnals']),
            'total_income' => fn() => $response['total_income'],
            'total_expense' => fn() => $response['total_expense'],
            'params' => (object)$response['params'],
        ]);
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
            ->select('shops.*', DB::raw('coalesce(sum(jurnals.income),0) as total_income'), DB::raw('coalesce(sum(jurnals.expense),0) as total_expense'))
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

        $jurnals = Jurnal::query()
            ->with(['shop'])
            ->when($request->has('sortName'), function ($query) use ($request) {
                return $query->orderBy($request->sortName, $request->sortType);
            })
            ->when($request->user('web')->hasRole('operator'), function ($query) use ($request) {
                return $query->where('shop_id', $request->user('web')->employee->shop_id);
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
            'total_expense' => $total_expense
        ];
    }
}
