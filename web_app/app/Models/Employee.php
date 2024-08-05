<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use Uuid;
    use HasFactory;

    public function user()
    {
        return $this->morphOne(User::class, 'userable');
    }

    public function shop()
    {
        return $this->hasOne(Shop::class);
    }
}
