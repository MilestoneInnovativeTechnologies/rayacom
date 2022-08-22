<?php

namespace Milestone\Rayacom\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Milestone\Rayacom\Models\Master;
use Milestone\Rayacom\Models\MasterData;
use Milestone\Rayacom\Models\MasterProperty;
use Milestone\Rayacom\Models\Property;

class LoginController extends Controller
{
    private static array $CREDENTIALS = [
        'ADMIN' => ['email' => 'email','password' => 'password'],//[dbField => requestKey]
        'SALES_EXECUTIVE' => ['email' => 'email','password' => 'password'],
        'CUSTOMER' => ['email' => 'email','password' => 'password']
    ];

    public function login(){
        $MNameId = MasterData::whereIn('name',array_keys(self::$CREDENTIALS))->pluck('id','name')->toArray();
        $success = true;
        foreach (self::$CREDENTIALS as $Master => $credentials) {
            $CREDs = Property::where(['master' => $MNameId[$Master]])->whereIn('name',array_keys($credentials))->pluck('id','name')->toArray();
            $success = true; $data = null;
            foreach ($credentials as $dbField => $requestKey) {
                $property = $CREDs[$dbField]; $value = request($requestKey);
                if($success){
                    $cData = MasterProperty::where(compact('property','value'))->value('data');
                    if($data === null) $data = $cData;
                    $success = ($data === $cData);
                }
            }
            if($success && $data) {
                $auth_master = $MNameId[$Master]; $auth_data = $data; $logged = true; $auth_type = $Master;
                session(compact('auth_data','auth_master','logged','auth_type'));
                $user = Master::find($data);
                session(['auth_user' => ['id' => $user->id,'name' => $user->name]]);
                break;
            }
        }
//        dd(session()->all());
        return redirect()->route('home',compact('success'));
    }

    public function logout(){
        session()->flush();
        return redirect()->route('home');
    }
}
