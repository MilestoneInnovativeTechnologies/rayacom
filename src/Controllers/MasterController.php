<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Master;

class MasterController extends Controller
{
    public function update(){
        $id = request('id');
        $master = Master::find($id);
        if(request()->filled('name') && $master->name === request('name')) $master->update(request()->except('name'));
        else $master->update(request()->all());
    }
}
