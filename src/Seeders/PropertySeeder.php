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
        DB::table('_properties')->insert(['master' => $masters['CUSTOMER'],'name' => 'area','value_master' => $masters['AREA'],'index' => 'Y','nature' => 'Single','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);
        DB::table('_properties')->insert(['master' => $masters['SALES_EXECUTIVE'],'name' => 'areas','value_master' => $masters['AREA'],'index' => 'Y','nature' => 'Multiple','created_at' => now()->toDateTimeString(), 'updated_at' => now()->toDateTimeString()]);
    }
}
