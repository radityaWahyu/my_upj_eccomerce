<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontendController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// ---------------------route for frontend-------------------------------------
Route::controller(FrontendController::class)->group(
    function () {
        Route::get('/', 'index')->name('frontend.index');
        Route::get('/login', 'login')->name('frontend.login');
        Route::get('/register', 'register')->name('frontend.register');
        Route::post('/register', 'registerStore')->name('frontend.register.store');
        Route::get('/products', 'products')->name('frontend.products');
        Route::get('/products/{product:slug}', 'productDetails')->name('frontend.product.details');
        Route::get('/unit-layanan', 'shops')->name('frontend.shops');
        Route::get('/unit-layanan/{shop:slug}', 'shopsDetail')->name('frontend.shops.detail');
        Route::get('/search', 'search')->name('frontend.search');
        // Route::get('/success-registration', 'success');
    }
);

// --------------------route for bacckoffice-----------------------------------
require __DIR__ . '/backoffice.php';
