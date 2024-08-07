<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\BackOffice\ShopController;
use App\Http\Controllers\BackOffice\CategoryController;


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

Route::controller(FrontendController::class)->group(
    function () {
        Route::get('/', 'index')->name('frontend.index');
        Route::get('/login', 'login')->name('frontend.login');
        Route::get('/register', 'register')->name('frontend.register');
        Route::get('/products', 'products')->name('frontend.products');
        Route::get('/shop', 'shop')->name('frontend.shop');
        Route::get('/product-details', 'productDetails')->name('frontend.product.details');
    }
);

Route::prefix('backoffice')->group(function () {
    Route::prefix('category')->controller(CategoryController::class)->group(function () {
        Route::get('/', 'index')->name('backoffice.category.index');
        Route::get('/{category}', 'edit')->name('backoffice.category.edit');
        Route::post('/', 'store')->name('backoffice.category.store');
        Route::post('/delete_all', 'deleteAll')->name('backoffice.category.delete-all');
        Route::delete('/{category}', 'destroy')->name('backoffice.category.delete');
        Route::put('/{category}', 'update')->name('backoffice.category.update');
    });

    Route::prefix('unit_layanan')->controller(ShopController::class)->group(function () {
        Route::get('/', 'index')->name('backoffice.shop.index');
        Route::get('/{category}', 'edit')->name('backoffice.shop.edit');
        Route::post('/', 'store')->name('backoffice.shop.store');
        Route::post('/delete_all', 'deleteAll')->name('backoffice.shop.delete-all');
        Route::delete('/{category}', 'destroy')->name('backoffice.shop.delete');
        Route::put('/{category}', 'update')->name('backoffice.shop.update');
    });
});


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
