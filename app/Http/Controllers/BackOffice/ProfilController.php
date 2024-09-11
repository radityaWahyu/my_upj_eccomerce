<?php

namespace App\Http\Controllers\BackOffice;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProfilResource;
use App\Http\Requests\BackOffice\ProfilRequest;

class ProfilController extends Controller
{
    public function index(Request $request)
    {

        $user = $request->user('web');

        return inertia('BackOffice/Profil/Index', [
            'profil' => fn() => new ProfilResource($user),
        ]);
    }

    public function update(ProfilRequest $request, Employee $profil)
    {
        try {
            DB::transaction(function () use ($profil, $request) {

                $fields = $request->except('password', 'username');

                $userFields = ['username' => $request->username];
                if (!empty($request->password)) $userFields += ['password' => $request->password];

                $profil->update($fields);
                $profil->user->update($userFields);

                return redirect()->back()->with('success', 'Data profil berhasil di simpan.');
            });
        } catch (\Illuminate\Database\QueryException $exception) {
            return redirect()->back()->with('error', $exception->errorInfo);
        }
    }
}
