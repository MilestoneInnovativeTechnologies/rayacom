<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Milestone\Rayacom\Models\Master;
use Milestone\Rayacom\Models\MasterData;

class MasterController extends Controller
{
    public function update(){
        $id = request('id');
        $master = Master::find($id);
        if(request()->filled('name') && $master->name === request('name')) $master->update(request()->except('name'));
        else $master->update(request()->all());
    }

    public function store(){
        $name = request('name');
        $master = MasterData::where('name',Str::upper(request('item')))->value('id'); request('item');
        $master_data = new Master(compact('master','name'));
        return $master_data->save();
    }

}
