<?php

namespace Milestone\Rayacom;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use Milestone\Rayacom\Commands\Install;

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
            $this->commands([Install::class]);
            $this->publishes([__DIR__ . '/../public' => public_path()],['rayacom-updates']);
//            $this->publishes([__DIR__ . '/../install' => base_path()],['rayacom-install']);
//            $this->publishes([__DIR__ . '/../install/src' => base_path('src')],['rayacom-resources','rayacom-dev-updates']);
            $this->publishes([__DIR__ . '/../config/rayacom.php' => config_path('rayacom.php')],['rayacom-config']);
//            $this->publishes([__DIR__ . '/../install/storage/app' => storage_path('app')],['rayacom-data','rayacom-dev-updates']);
        } else {
            Route::pattern('rayacom_segments', '.*');
            $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
            $this->loadViewsFrom(__DIR__ . '/../views','Rayacom');
        }
    }
}
