<?php

namespace Milestone\Rayacom\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class AreaCustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $masters = DB::table('_masters')->pluck('id','name')->toArray();
      $property = DB::table('_properties')->where(['name' => 'area','master' => $masters['CUSTOMER']])->value('id');
      $CONTENTS = array_map(fn($line) => array_combine(['data','ids'],explode("\t",trim($line))),file(Storage::path('AREA_CUSTOMERS.txt')));
      DB::table('_property_masters')->where(compact('property'))->delete();
      foreach (array_chunk(SeedMasterFn($CONTENTS,compact('property')),1000) as $chunk) DB::table('_property_masters')->insert($chunk);
    }
}
