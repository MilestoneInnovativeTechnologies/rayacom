<?php

namespace Milestone\Rayacom\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Milestone\Rayacom\Models\Property;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $CONTENTS = array_map(fn($line) => array_combine(['id','name','email','password'],explode("\t",trim($line))),file(Storage::path('ADMINS.txt'))); $master = DB::table('_masters')->where('name','ADMIN')->value('id');
      $Property = Property::where(['master' => $master])->whereIn('name',['email','password'])->pluck('id','name')->toArray();
      $MasterData = []; $MP = [];
      foreach ($CONTENTS as $CONTENT){
          $MasterData[] = ['id' => $CONTENT['id'], 'name' => $CONTENT['name'], 'master' => $master];
          foreach ($Property as $key => $property) {
              $data = $CONTENT['id']; $value = $CONTENT[$key];
              $MP[] = compact('data','property','value');
          }
      }
      DB::table('_master_data')->where(compact('master'))->delete();
      DB::table('_master_properties')->whereIn('property',array_values($Property))->delete();
      foreach (array_chunk(SeedMasterFn($MasterData),1000) as $chunk) DB::table('_master_data')->insert($chunk);
      foreach (array_chunk(SeedMasterFn($MP),1000) as $chunk) DB::table('_master_properties')->insert($chunk);
    }
}
