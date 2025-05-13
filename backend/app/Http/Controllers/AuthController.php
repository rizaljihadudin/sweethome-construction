<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        // Apply validation

        $validated = Validator::make($request->all(), [
            'email'     => 'required|email',
            'password'  => 'required'
        ]);

        if($validated->fails()){
            return response()->json([
                'status'    => false,
                'message'   => 'Validation Error',
                'errors'    => $validated->errors()
            ]);
        }

        $credentials = [
            'email'     => $request->email,
            'password'  => $request->password
        ];

        if(Auth::attempt($credentials)){
            $id     = Auth::user()->id;
            $user   = User::find($id);

            #create token
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                'status'    => true,
                'message'   => 'User Login Successfully',
                'data'      => [
                    'id'        => $user['id'],
                    'token'     => $token
                ]
            ]);
        }else{
            return response()->json([
                'status'    => false,
                'message'   => 'Email or Password is incorrect'
            ]);
        }
    }

    public function logout()
    {
        $id     = Auth::user()->id;
        $user   = User::find($id);

        #delete token
        $user->tokens()->delete();

        return response()->json([
            'status'    => true,
            'message'   => 'User Logout Successfully'
        ]);
    }
}
