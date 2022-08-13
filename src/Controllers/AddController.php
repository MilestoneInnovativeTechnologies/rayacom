<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Master;
use Milestone\Rayacom\Models\MasterData;
use function Sodium\add;

class AddController extends Controller
{
//  public function add(Request $req){
//    $master= new Master;
//    $master->name=$req->name;
//    $master->password=$req->password;
//    $master->email=$req->email;
//    $master->phone=$req->phone;
//    $master->save();
//    return redirect('add');
//  }
//  public function insert(){
//  $name = request('name');
//  $master=new Master();
//  $master->name=$name;
//  $master->save();
//  return $master;
//
//}
////
//public function insertform(){
//  return view('stud_create');
//}
//  public function save(Request $request)
//  {
//    $id = $request->input('id');
//    $name = $request->input('name');
//    $password = $request->input('password');
//    $phone = $request->input('phone');
//    $email = $request->input('email');
//    $data = array('id' => $id, 'name' => $name, "password" => $password, "phone" => $phone, "email" => $email);
////  DB::table('salesexecutive_details')->insert($data);
//    $name->save(request()->all());
//    return $data;
//
////}
///
  public function update(){
    $id = request('id');
    $name = request('name');
    if($id >0){
      $master = Master::find($id);
    }else{
      $master= new Master();
      $master->master = MasterData::where('name','SALES_EXECUTIVE')->value('id');
    }
    $master->name = $name;
    $master->save();
    return $master;
  }



}
