<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerProfilResource extends JsonResource
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
            'username' => $this->username,
            'whatsapp' => $this->whatsapp,
            'phone' => $this->phone,
            'address' => $this->address,
            'verified' => $this->is_verified,
            'enabled' => $this->is_enabled,
            'created_at' => $this->created_at->format('d/m/YY'),
        ];
    }
}
