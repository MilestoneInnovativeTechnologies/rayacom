<?php

namespace Milestone\Rayacom\Commands;

use Illuminate\Console\Command;

class Install extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'rayacom:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install Rayacom for development purpose. This need to be done only for development purpose.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Rayacom Installation!!');
        $bar = $this->output->createProgressBar(17);
        exec(self::sps('mklink','/D',public_path('assets'),self::rp('public','assets'))); $bar->advance();
        exec(self::sps('mklink','/D',public_path('icons'),self::rp('public','icons'))); $bar->advance();
        exec(self::sps('mklink','/D',public_path('static'),self::rp('public','static'))); $bar->advance();
        exec(self::sps('mklink','/H',public_path('favicon.ico'),self::rp('public','favicon.ico'))); $bar->advance();
        exec(self::sps('mklink','/D',base_path('src'),self::rp('install','src'))); $bar->advance();
        foreach(["AREA_CUSTOMERS","AREAS","CUSTOMERS","EXECUTIVE_AREAS","ITEMS","SALES_EXECUTIVES"] as $file){
            exec(self::sps('mklink','/H',storage_path(self::ps('app',$file . '.txt')),self::rp('install','storage','app',$file.'.txt')));
            $bar->advance();
        }
        exec(self::sps('del',base_path('package.json'))); $bar->advance();
        foreach(["jsconfig.json","package.json","postcss.config.js","quasar.config.js","index.html"] as $file){
            exec(self::sps('mklink','/H',base_path($file),self::rp('install',$file))); $bar->advance();
        }
        $this->newLine();
        $this->info('Installation Completed..');
        $this->newLine();
        $this->info('run npm install');
    }

    private static function rp(...$paths){
        if(!$paths) $paths = [];
        return self::ps(__DIR__,"..","..",...$paths);
    }

    private static function ps(...$paths){
        return implode(DIRECTORY_SEPARATOR,$paths);
    }

    private static function sps(...$args){
        return join(" ",$args);
    }
}
