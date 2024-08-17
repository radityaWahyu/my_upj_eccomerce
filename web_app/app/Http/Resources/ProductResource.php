<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'category' => $this->category->name,
            'type' => $this->type,
            'image' => empty($this->image) ? null : "data:image/jpeg;base64," . base64_encode(Storage::get($this->image->image_url)),
            'user' => $this->user->userable->name,
            'price' => $this->price,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
