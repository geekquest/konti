<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $fillable = [
        'username', // Add 'username' to the fillable attributes
        'email',
        'phone',
        'password',
        // Other fillable attributes...
    ];

    // Rest of your model code...}

}
