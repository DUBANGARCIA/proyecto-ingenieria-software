<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use Flugg\Responder\Responder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request, Responder $responder)
    {
        $this->validateLogin($request);
        $credentials = [
            'email' => $request->get('username'),
            'password' => $request->get('password'),
        ];
        if ( ! Auth::attempt($credentials)) {
            return response()->json([
                'data' => [
                    'message' => 'Unauthorized',
                ],
                'status' => 401,
                'error' => [
                    'message' => 'Datos ingresados incorrectos. Por favor verifica el Usuario y/o Contraseña',
                    'tittle' => 'Datos incorrectos',
                    'code' => 'API-L-101'
                ]
            ], 401);
        }

        return response()->json([
            'data' => [
                'token'   => $request->user()->createToken($request->username)->plainTextToken,
                'message' => 'Success',
            ],
            'status' => 200,
            'error' => []
        ]);
    }

    public function validateLogin(Request $request)
    {
        return $request->validate([
            'username'    => 'required|email',
            'password' => 'required'
        ]);
    }
}
