<?php

namespace Milestone\Rayacom\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run():void
    {
        DB::table('_properties')->truncate();
        $masters = DB::table('_masters')->pluck('id','name');
        $content = [];
        foreach (['category','brand','division','department','group','tax'] as $name) $content[] = ['master' => $masters['ITEM'],'name' => $name, 'value_master' => $masters[strtoupper($name)],'index' => 'Y','control' => 'select','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()];
        DB::table('_properties')->insert($content);
        DB::table('_properties')->insert(['master' => $masters['ITEM'],'name' => 'units','nature' => 'Single','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);
        DB::table('_properties')->insert(['master' => $masters['ITEM'],'name' => 'inactive','index' => 'Y','nature' => 'Y/N','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);

        DB::table('_properties')->insert(['master' => $masters['CUSTOMER'],'name' => 'phone','nature' => 'Multiple','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);
        DB::table('_properties')->insert(['master' => $masters['CUSTOMER'],'name' => 'address','nature' => 'Multiple','control' => 'textarea','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);
        DB::table('_properties')->insert(['master' => $masters['CUSTOMER'],'name' => 'blacklist','index' => 'Y','nature' => 'Y/N','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);
        DB::table('_properties')->insert(['master' => $masters['CUSTOMER'],'name' => 'special_price_list','index' => 'Y','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);

        DB::table('_properties')->insert(['master' => $masters['BARCODE'],'name' => 'item','value_master' => $masters['ITEM'],'control' => 'select','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);
        DB::table('_properties')->insert(['master' => $masters['BARCODE'],'name' => 'unit','control' => 'radio','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);
        DB::table('_properties')->insert(['master' => $masters['BARCODE'],'name' => 'tax','value_master' => $masters['TAX'],'control' => 'radio','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);

        DB::table('_properties')->insert(['master' => $masters['TAX'],'name' => 'percentage','control' => 'number','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);

        DB::table('_properties')->insert(['master' => $masters['PRICE_LIST'],'name' => 'default','nature' => 'Y/N','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);
    }
}
