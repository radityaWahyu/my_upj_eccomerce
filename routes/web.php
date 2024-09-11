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
        Route::post('/login', 'loginStore')->name('frontend.login.store');
        Route::post('/logout', 'logout')->name('frontend.logout')->middleware('auth.customer');
        Route::get('/profil', 'getProfil')->name('frontend.profil.index')->middleware('auth.customer');
        Route::put('/profil', 'updateProfil')->name('frontend.profil.update')->middleware('auth.customer');
        Route::get('/register', 'register')->name('frontend.register');
        Route::post('/register', 'registerStore')->name('frontend.register.store');
        Route::get('/products', 'products')->name('frontend.products');
        Route::get('/products/{product:slug}', 'productDetails')->name('frontend.product.details');
        Route::get('/unit-layanan', 'shops')->name('frontend.shops');
        Route::get('/unit-layanan/{shop:slug}', 'shopsDetail')->name('frontend.shops.detail');
        Route::get('/search', 'search')->name('frontend.search');
        Route::get('/carts', 'getCart')->name('frontend.cart.index')->middleware('auth.customer');
        Route::post('/carts/send', 'createTransaction')->name('frontend.cart.send')->middleware('auth.customer');
        Route::post('/carts/{product}', 'addToCart')->name('frontend.cart.store')->middleware('auth.customer');
        Route::put('/carts/{cart}', 'updateProductCartQty')->name('frontend.cart.update')->middleware('auth.customer');
        Route::delete('/carts/empty', 'emptyProductCart')->name('frontend.cart.empty')->middleware('auth.customer');
        Route::delete('/carts/{cart}', 'deleteProductCart')->name('frontend.cart.delete')->middleware('auth.customer');
        Route::get('/transactions', 'getTransactions')->name('frontend.transaction.index')->middleware('auth.customer');
        Route::put('/transactions/cancel/{transaction}', 'cancelTransaction')->name('frontend.transaction.cancel')->middleware('auth.customer');
        Route::get('/transactions/{transaction}', 'transactionDetails')->name('frontend.transaction.detail')->middleware('auth.customer');
        Route::get('/contact-us', 'contactUs')->name('frontend.contact');
    }
);

// --------------------route for bacckoffice-----------------------------------
require __DIR__ . '/backoffice.php';
