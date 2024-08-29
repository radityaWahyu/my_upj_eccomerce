<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
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
            'name' => $this->product->name,
            'quantity' => $this->quantity,
            'shop' => $this->product->shop->name,
            'price' => $this->price,
            'total' => $this->total,
            'image' => empty($this->product->image) ? null : "data:image/jpeg;base64," . base64_encode(Storage::get($this->product->image->image_url)),
        ];
    }
}
