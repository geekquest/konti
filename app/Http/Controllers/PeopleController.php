<?php
namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class PeopleController extends BaseController 
{

    public function index()
    {
        return response()->json(['Hello World']);
    }

}