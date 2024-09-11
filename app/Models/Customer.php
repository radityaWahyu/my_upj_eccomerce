<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Authenticatable
{
    use HasUuids;
    use HasFactory;

    protected $guarded = [];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'password' => 'hashed',
    ];


    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
