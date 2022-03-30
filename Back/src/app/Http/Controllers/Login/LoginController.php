<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
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
                'token'   => $request->user()->createToken($request->get('username'))->plainTextToken,
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

    public function register(Request $request) {
        $request->validate([
            'first_name'    => 'required|string',
            'last_name' => 'required|string',
            'gender' => 'required|string',
            'age' => 'required|integer',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::create($request->only(['first_name', 'last_name', 'gender', 'age', 'email', 'password']));
        Auth::login($user);

        return response()->json([
            'data' => [
                'token'   => $request->user()->createToken($request->get('email'))->plainTextToken,
                'message' => 'Success',
            ],
            'status' => 200,
            'error' => []
        ]);
    }
}
