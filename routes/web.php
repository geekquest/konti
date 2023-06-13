<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AllContributorsReportController;
use App\Http\Controllers\FormController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/signup', function () {
    return view('signup');
})->name('signup');


Route::get('/', function () {
    return view('index');
});

Route::get('/reports', function () {
    return view('reports');
});

 
Route::get('/signup', [FormController::class, 'create'])->name('signup.create');
Route::post('/signup', [FormController::class, 'store'])->name('signup.store');

Route::get('/reports/contributors', [AllContributorsReportController::class, 'download']);
