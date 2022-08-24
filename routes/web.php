<?php

use Illuminate\Support\Facades\Route;
use Milestone\Rayacom\Controllers\AssetController;
use Milestone\Rayacom\Controllers\PostController;
use Milestone\Rayacom\Controllers\LoginController;

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

Route::group([

    "middleware" => \Illuminate\Session\Middleware\StartSession::class

],function(){

    Route::group([
        "middleware" => 'cache.headers:public;max_age=2628000;etag',
        "controller" => AssetController::class,
    ],function(){
        Route::get('properties/{user}/{time}/{id}/{name}.json','master_properties');
        Route::get('asset/{time}/properties.json','properties');
        Route::get('asset/{user}/{time}/{id}/{name}.json','master');
    });

    Route::get('init.js',[AssetController::class,'init']);
    Route::get('clear_cache',function(){
        foreach (rayacom_config('cache_key') as $cache_key){
            \Illuminate\Support\Facades\Cache::forget($cache_key);
        }
        return redirect('/caches');
    });
    Route::get('caches',function(){
        $caches = [];
        foreach (rayacom_config('cache_key') as $cache_key){
            $caches[$cache_key] = \Illuminate\Support\Facades\Cache::get($cache_key);
        }
        dd($caches);
    });

    Route::post('/',[LoginController::class,'login']);
    Route::view('/','Rayacom::home')->name('home');
    Route::get('logout',[LoginController::class,'logout']);
    Route::post('latest.json',[PostController::class,'latest']);
    Route::post('{item}/{action}',[PostController::class,'post']);
    Route::view('{rayacom_segments}', 'Rayacom::home');

});
