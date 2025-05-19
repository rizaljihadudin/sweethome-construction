<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\TempImageController;
use App\Http\Controllers\Front\ServiceController as FrontServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('auth', [AuthController::class, 'authenticate']);

#GET DATA FRONT SERVICES
Route::get('get-services', [FrontServiceController::class, 'index']);
Route::get('get-latest-services', [FrontServiceController::class, 'latestServices']);



Route::group(['middleware' => ['auth:sanctum']], function () {
    // Protected Routes

    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::post('logout', [AuthController::class, 'logout']);

    #Service Routes
    Route::resource('services', ServiceController::class);

    #Temp Image Routes
    Route::post('temp-images', [TempImageController::class, 'store']);
});
