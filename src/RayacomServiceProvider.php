<?php

namespace Milestone\Rayacom;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class RayacomServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/rayacom.php','rayacom');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        if($this->app->runningInConsole()){
            $this->loadMigrationsFrom(__DIR__.'/../migrations');
            $this->publishes([__DIR__ . '/../public' => public_path()],'rayacom-assets');
            $this->publishes([__DIR__ . '/../install' => base_path()],'rayacom-install');
            $this->publishes([__DIR__ . '/../install/src' => base_path('src')],'rayacom-resources');
            $this->publishes([__DIR__ . '/../public' => public_path(),__DIR__ . '/../install/src' => base_path('src')],'rayacom-updates');
            $this->publishes([__DIR__ . '/../config/rayacom.php' => config_path('rayacom.php')],'rayacom-config');
            $this->publishes([__DIR__ . '/../install/storage/app' => storage_path('app')],'rayacom-data');
        } else {
            Route::pattern('rayacom_segments', '.*');
            $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
            $this->loadViewsFrom(__DIR__ . '/../views','Rayacom');
        }
    }
}
