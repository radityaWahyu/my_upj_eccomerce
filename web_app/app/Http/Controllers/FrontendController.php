<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function products()
    {
        return Inertia::render('Products');
    }

    public function productDetails()
    {
        return Inertia::render('ProductDetails');
    }

    public function register()
    {
        return Inertia::render('Register');
    }

    public function login()
    {
        return Inertia::render('Login');
    }

    public function shop()
    {
        return Inertia::render('Shop');
    }
}
