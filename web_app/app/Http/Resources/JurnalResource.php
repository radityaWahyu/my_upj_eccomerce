<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JurnalResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'shop' => $this->shop->name,
            'jurnal_code' => $this->jurnal_code,
            'income' => $this->income,
            'expense' => (int)$this->expense,
            'transaction_id' => empty($this->transaction_id)  ? null  : $this->transaction->transaction_code,
            'transaction_date' => $this->transaction_date->format('d/m/Y'),
            'description' => $this->description,
        ];
    }
}
