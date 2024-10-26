<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductBoxResource extends JsonResource
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
            'name' => $this->name,
            'shop' => $this->shop->name,
            'slug' => $this->slug,
            'type' => $this->type,
            //'image' => empty($this->image) ? null : asset('/storage/' . $this->image->image_url),
            'image' => empty($this->image) ? null : "data:image/jpeg;base64," . base64_encode(Storage::get($this->image->image_url)),
            'price' => $this->price,
        ];
    }
}
