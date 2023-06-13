<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\Users;

 
 
class FormController extends Controller
{
    public function create()
    {
        return view('signup');
    }
 
    public function store(Request $request)
    {
         
        $validatedData = $request->validate([
          'username' => 'required',
          'phone' => 'required|unique:users|max:255',
           'email' => 'required|unique:users|max:255',
          'password' => 'required|unique:users|max:255',
        ]);
 
        $validatedData['password'] = Hash::make($validatedData['password']);

        Users::create($validatedData);

        return redirect()->route('login')->with('success', 'User registered successfully!');
 
    }
}
