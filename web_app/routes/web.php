<?php

use App\Models\Employee;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\BackOffice\AuthController;
use App\Http\Controllers\BackOffice\ShopController;
use App\Http\Controllers\BackOffice\UserController;
use App\Http\Controllers\BackOffice\CategoryController;
use App\Http\Controllers\BackOffice\EmployeeController;

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
    Route::get('/', [AuthController::class, 'index'])->name('backoffice.auth.login');
    Route::post('/login', [AuthController::class, 'store'])->name('backoffice.auth.store');

    Route::middleware('auth.backoffice')->group(function () {
        Route::post('/logout', [AuthController::class, 'destroy'])->name('backoffice.auth.logout');

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
            Route::get('/{shop}', 'edit')->name('backoffice.shop.edit');
            Route::post('/', 'store')->name('backoffice.shop.store');
            Route::post('/delete_all', 'deleteAll')->name('backoffice.shop.delete-all');
            Route::delete('/{shop}', 'destroy')->name('backoffice.shop.delete');
            Route::put('/{shop}', 'update')->name('backoffice.shop.update');
        });

        Route::prefix('pegawai')->controller(EmployeeController::class)->group(function () {
            Route::get('/', 'index')->name('backoffice.employee.index');
            Route::get('/create', 'create')->name('backoffice.employee.create');
            Route::get('/{employee}', 'edit')->name('backoffice.employee.edit');
            Route::post('/', 'store')->name('backoffice.employee.store');
            Route::post('/delete_all', 'deleteAll')->name('backoffice.employee.delete-all');
            Route::delete('/{employee}', 'destroy')->name('backoffice.employee.delete');
            Route::put('/{employee}', 'update')->name('backoffice.employee.update');
        });

        Route::prefix('users')->controller(UserController::class)->group(function () {
            Route::get('/', 'index')->name('backoffice.user.index');
            Route::get('/create', 'create')->name('backoffice.user.create');
            Route::get('/{user}', 'edit')->name('backoffice.user.edit');
            Route::post('/', 'store')->name('backoffice.user.store');
            Route::post('/delete_all', 'deleteAll')->name('backoffice.user.delete-all');
            Route::delete('/{user}', 'destroy')->name('backoffice.user.delete');
            Route::put('/{user}', 'update')->name('backoffice.user.update');
        });
    });
});



// require __DIR__.'/auth.php';
