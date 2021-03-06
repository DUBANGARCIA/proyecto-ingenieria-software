<?php

namespace App\Http\Controllers\Beneficiary;

use App\Http\Controllers\Controller;
use App\Models\Beneficiary;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class BeneficiaryController extends Controller
{
    public function list(Request $request) {
        $user = $request->user();
        Log::debug($user->id);
        $beneficiaries = Beneficiary::where('parent_id', $user->id)->get()->toArray();

        $beneficiaries = array_map(function ($item) {
            $newItem = [
               'Id' => $item['id'],
                'Nombres' => $item['first_name'],
                'Apellidos' => $item['last_name'],
                'Genero' => $item['gender'],
                'Edad' => $item['age'],
                'Correo' => $item['email'],
            ];

            return $newItem;
        }, $beneficiaries);

        return response()->json([
            'data' => $beneficiaries,
            'status' => 200,
            'error' => []
        ]);
    }

    public function save($id, Request $request) {
        $user = $request->user();
        $request->validate([
            'first_name'    => 'required',
            'last_name' => 'required',
            'gender' => 'required',
            'age' => 'required',
            'email' => 'required',
        ]);

        $data = array_merge(
            $request->only(['first_name', 'last_name', 'gender', 'age', 'email']),
            [
                'parent_id' => $user->id,
            ]
        );

        $beneficiary = Beneficiary::firstOrCreate(
            [
                'id' => $id,
            ],
            $data
        );

        $beneficiary->update($data);

        return response()->json([
            'data' => [
                'message' => 'success'
            ],
            'status' => 200,
            'error' => []
        ]);
    }
}
