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
}
