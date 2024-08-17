<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasUuids;
    use HasFactory;

    protected $guarded = [];


    public function scopeEmployees($query)
    {
        return $query->whereNot('name', 'Administrator');
    }

    public function user()
    {
        return $this->morphOne(User::class, 'userable');
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }
}
