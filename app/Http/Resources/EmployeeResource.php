<?php

namespace App\Http\Resources;

use App\Traits\Whatsapp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    use Whatsapp;
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
            'shop' => empty($this->shop->name) ? '-' : $this->shop->name,
            'phone' => $this->phone,
            'whatsapp' => $this->getWhatsapp($this->whatsapp),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
