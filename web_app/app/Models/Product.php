<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasUuids;
    use HasFactory;

    protected $guarded = [];

    public static function boot()
    {
        parent::boot();
        self::deleting(function ($product) {
            $product->images()->each(function ($image) {
                $image->delete();
            });
        });
    }

    protected function name(): Attribute
    {
        return Attribute::make(
            set: function ($value) {
                return ['slug' => Str::slug($value), 'name' => $value];
            }
        );
    }


    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function image()
    {
        return $this->hasOne(ProductImage::class)->latest();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
