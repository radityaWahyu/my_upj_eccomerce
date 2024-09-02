<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasUuids;
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'finished_at' => 'date',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    public function details()
    {
        return $this->hasMany(TransactionDetail::class);
    }
}
