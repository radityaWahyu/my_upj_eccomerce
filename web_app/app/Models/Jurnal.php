<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jurnal extends Model
{
    use HasFactory;
    use HasUuids;

    protected $guarded = [];

    protected $casts = [
        'transaction_date' => 'date'
    ];

    public function transaction()
    {
        if (!empty($this->transaction_id)) return $this->belongsTo(Transaction::class);

        return null;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }
}
