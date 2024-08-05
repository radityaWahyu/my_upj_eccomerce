<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use Uuid;
    use HasFactory;

    public function employees()
    {
        return $this->hasMany(Employee::class);
    }
}
