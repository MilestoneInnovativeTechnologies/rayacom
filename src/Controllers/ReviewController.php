<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Review;


class ReviewController extends Controller
{
  public function store(){
    $data = new Review(request()->only(['type', 'typeid', 'comment']));
    $data->save();
    return $data;
  }
}
