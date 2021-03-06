<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [\App\Http\Controllers\Login\LoginController::class, 'login']);
Route::post('/register', [\App\Http\Controllers\Login\LoginController::class, 'register']);


Route::get('/beneficiaries', [\App\Http\Controllers\Beneficiary\BeneficiaryController::class, 'list'])
    ->middleware('auth:sanctum');
Route::post('/beneficiaries/{beneficiaryId}', [\App\Http\Controllers\Beneficiary\BeneficiaryController::class, 'save'])
     ->middleware('auth:sanctum');
