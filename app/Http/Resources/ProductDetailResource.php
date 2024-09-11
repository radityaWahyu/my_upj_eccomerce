<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductDetailResource extends JsonResource
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
            'name' => $this->name,
            'shop' => $this->shop->name,
            'shop_address' => $this->shop->address,
            'contacts' => EmployeeResource::collection($this->shop->employees),
            'category' => $this->category->name,
            'type' => $this->type,
            'images' => empty($this->images) ? null : ProductImageResource::collection($this->images),
            'price' => $this->price,
            'description' => $this->description,
        ];
    }
}
