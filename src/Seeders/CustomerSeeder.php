<?php

namespace Milestone\Rayacom\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $CONTENTS = array_map(fn($line) => array_combine(['id','name'],explode("\t",trim($line))),file(Storage::path('CUSTOMERS.txt'))); $master = DB::table('_masters')->where('name','CUSTOMER')->value('id');
      DB::table('_master_data')->where(compact('master'))->delete();
      foreach (array_chunk(SeedMasterFn($CONTENTS,compact('master')),1000) as $chunk) DB::table('_master_data')->insert($chunk);
    }
}
