<?php

namespace App\Http\Controllers\Beneficiary;

use App\Http\Controllers\Controller;
use App\Models\Beneficiary;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BeneficiaryController extends Controller
{
    public function list(Request $request) {
        $user = $request->user();

        $beneficiaries = Beneficiary::where('parent_id', $user->id)->get()->toArray();


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
