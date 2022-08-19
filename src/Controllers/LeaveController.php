<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Milestone\Rayacom\Models\LeaveRecord;


class LeaveController extends Controller
{
  public function store(){
    $data = new LeaveRecord(request()->only(['executive', 'start_date', 'end_date', 'description']));
    $data->save();
    return $data;
  }
}
