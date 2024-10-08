<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BackOffice\AuthController;
use App\Http\Controllers\BackOffice\ShopController;
use App\Http\Controllers\BackOffice\UserController;
use App\Http\Controllers\BackOffice\BannerController;
use App\Http\Controllers\BackOffice\JurnalController;
use App\Http\Controllers\BackOffice\ProfilController;
use App\Http\Controllers\BackOffice\ProductController;
use App\Http\Controllers\BackOffice\SettingController;
use App\Http\Controllers\BackOffice\CategoryController;
use App\Http\Controllers\BackOffice\CustomerController;
use App\Http\Controllers\BackOffice\EmployeeController;
use App\Http\Controllers\BackOffice\DashboardController;
use App\Http\Controllers\BackOffice\TransactionController;

Route::prefix('backoffice')->group(function () {
    Route::get('/', [AuthController::class, 'index'])->name('backoffice.auth.login');
    Route::post('/login', [AuthController::class, 'store'])->name('backoffice.auth.store');

    Route::middleware('auth.backoffice')->group(function () {
        Route::get('/dashboard', DashboardController::class)->name('backoffice.dashboard');
        Route::post('/logout', [AuthController::class, 'destroy'])->name('backoffice.auth.logout');
        Route::get('/profil', [ProfilController::class, 'index'])->name('backoffice.profil.index');
        Route::put('/profil/{profil}', [ProfilController::class, 'update'])->name('backoffice.profil.update');

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

        Route::prefix('pelanggan')->controller(CustomerController::class)->group(function () {
            Route::get('/', 'index')->name('backoffice.customer.index');
            Route::put('/{customer}', 'update')->name('backoffice.customer.update');
            Route::get('/{customer}', 'show')->name('backoffice.customer.detail');
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

        Route::prefix('produk')->controller(ProductController::class)->group(function () {
            Route::get('/', 'index')->name('backoffice.product.index');
            Route::get('/create', 'create')->name('backoffice.product.create');
            Route::get('/{product}', 'edit')->name('backoffice.product.edit');
            Route::post('/', 'store')->name('backoffice.product.store');
            Route::post('/delete_all', 'deleteAll')->name('backoffice.product.delete-all');
            Route::delete('/delete-image/{image}', 'deleteImage')->name('backoffice.product.images.delete');
            Route::delete('/{product}', 'destroy')->name('backoffice.product.delete');
            Route::put('/{product}', 'update')->name('backoffice.product.update');
            Route::get('/{product}/images', 'images')->name('backoffice.product.images');
            Route::post('/{product}/images', 'imagesStore')->name('backoffice.product.images.store');
        });

        Route::prefix('transaksi')->controller(TransactionController::class)->group(function () {
            Route::get('/{status}', 'index')->name('backoffice.transaction.index');
            Route::put('/{transaction}', 'update')->name('backoffice.transaction.update');
            Route::get('/{transaction}/invoice', 'invoice')->name('backoffice.transaction.invoice');
            Route::get('/{transaction}/detail', 'show')->name('backoffice.transaction.detail');
        });

        Route::prefix('jurnal')->controller(JurnalController::class)->group(function () {
            Route::get('/all', 'index')->name('backoffice.jurnal.index');
            Route::get('/create', 'create')->name('backoffice.jurnal.create');
            Route::post('/store', 'store')->name('backoffice.jurnal.store');
            Route::get('/unit', 'getByUnit')->name('backoffice.jurnal.unit');
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

        Route::prefix('setting')->controller(SettingController::class)->group(function () {
            Route::get('/', 'index')->name('backoffice.setting.index');
            Route::post('/', 'store')->name('backoffice.setting.store');
        });

        Route::prefix('banner')->controller(BannerController::class)->group(function () {
            Route::get('/', 'index')->name('backoffice.banner.index');
            Route::get('/create', 'create')->name('backoffice.banner.create');
            Route::post('/', 'store')->name('backoffice.banner.store');
            Route::post('/set-active/{banner}', 'setActive')->name('backoffice.banner.activated');
            Route::delete('/{banner}', 'destroy')->name('backoffice.banner.delete');
        });
    });
});
