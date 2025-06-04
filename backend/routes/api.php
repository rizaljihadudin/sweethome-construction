<?php

use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\TempImageController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Front\ArticleController as FrontArticleController;
use App\Http\Controllers\Front\ProjectController as FrontProjectController;
use App\Http\Controllers\Front\ServiceController as FrontServiceController;
use App\Http\Controllers\Front\TestimonialController as FrontTestimonialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('auth', [AuthController::class, 'authenticate']);

#GET DATA FRONT SERVICES
Route::get('get-services', [FrontServiceController::class, 'index']);
Route::get('get-latest-services', [FrontServiceController::class, 'latestServices']);

#GET DATA FRONT PROJECTS
Route::get('get-projects', [FrontProjectController::class, 'index']);
Route::get('get-latest-projects', [FrontProjectController::class, 'latestProjects']);

#GET DATA FRONT ARTICLES
Route::get('get-articles', [FrontArticleController::class, 'index']);
Route::get('get-latest-articles', [FrontArticleController::class, 'latestArticles']);

#GET DATA TESTIMONIAL
Route::get('get-testimonials', [FrontTestimonialController::class, 'index']);



Route::group(['middleware' => ['auth:sanctum']], function () {
    // Protected Routes

    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::post('logout', [AuthController::class, 'logout']);

    #Service Routes
    Route::resource('services', ServiceController::class);

    #Project Routes
    Route::resource('projects', ProjectController::class);

    #Articles Routes
    Route::resource('articles', ArticleController::class);

    #Temp Image Routes
    Route::post('temp-images', [TempImageController::class, 'store']);

    #Testimonial Routes
    Route::resource('testimonials', TestimonialController::class);
});
