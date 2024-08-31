<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionDetailResource extends JsonResource
{
    public static $wrap = null;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {


        return [
            'id' => $this->id,
            'transaction_code' => $this->transaction_code,
            'shop' => $this->shop->name,
            'product_count' => $this->details_count,
            'details' => TransactionDetailProductResource::collection($this->details),
            'total' => $this->total,
            'status' => $this->status,
            'finished_at' => empty($this->finished_at) ? null : $this->finished_at->format('d/m/Y'),
            'created_at' => $this->created_at->format('d/m/Y')
        ];
    }
}
