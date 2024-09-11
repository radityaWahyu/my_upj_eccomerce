<?php

namespace App\Http\Controllers\BackOffice;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\BackOffice\LoginRequest;


class AuthController extends Controller
{


    public function index()
    {
        return inertia(
            'BackOffice/Login',
        );
    }

    public function store(LoginRequest $request)
    {

        $credentials = $request->only('username', 'password') + ['is_enabled' => true];
        //dd($credentials);

        if (!Auth::guard('web')->attempt($credentials)) {
            return redirect()->back()->with('error', 'Username dan password salah, silahkan mengecek kembali penulisan username dan password');
        }

        // $request->session()->regenerate();

        return to_route('backoffice.dashboard')->with('success', 'Selamat datang ' . $request->username);
    }

    public function destroy(Request $request)
    {
        Auth::logout();

        // $request->session()->invalidate();

        // $request->session()->regenerateToken();

        return to_route('backoffice.auth.login')->with('success', 'Anda berhasil keluar dari sistem');
    }
}
