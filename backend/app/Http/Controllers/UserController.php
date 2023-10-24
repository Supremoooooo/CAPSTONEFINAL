<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Validator;

class UserController extends Controller
{
    public function getUser()
    {

        $user = User::all();
        return response()->json($user);
    }

    public function postUser(Request $request)
    {

        $email = $request->input('email');

        $validator = Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required',
            'password'=>'required'
        ]);
        

        if($validator->fails() || User::where('email', $email)->exists())
        {
            $data = [
                'status'=>422,
                'message'=>$validator->messages()
            ];

            return response()->json($data,422);
        }
        else {
            $user = new User;

            $user->name= $request->name;
            $user->email= $request->email;
            $user->password= $request->password;

            $user->save();

            $data = [
                'status'=>200,
                'message'=>"User enrolled successfully"
            ];

            return response()->json($data,200);

        }
    }

    public function updateUser(Request $request, $id)
    {

        $validator = Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required',
            'password'=>'required'
        ]);

        if($validator->fails())
        {
            $data = [
                'status'=>422,
                'message'=>$validator->messages()
            ];

            return response()->json($data,422);
        }
        else 
        {
            $user = User::find($id);

            $user->name= $request->name;
            $user->email= $request->email;
            $user->password= $request->password;

            $user->save();

            $data = [
                'status'=>200,
                'message'=>"User entry updated successfully"
            ];

            return response()->json($data,200);

        }
    }
};
