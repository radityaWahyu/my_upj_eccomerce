<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Shop extends Model
{
    use Uuid;
    use HasFactory;

    protected $guarded = [];

    protected function name(): Attribute
    {
        return Attribute::make(
            set: function ($value) {
                return ['slug' => Str::slug($value), 'name' => $value];
            }
        );
    }

    public function employees()
    {
        return $this->hasMany(Employee::class);
    }
}
