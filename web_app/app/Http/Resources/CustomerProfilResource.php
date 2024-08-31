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
            'id' => $this->customer->id,
            'name' => $this->customer->name,
            'username' => $this->username,
            'whatsapp' => $this->customer->whatsapp,
            'phone' => $this->customer->phone,
            'address' => $this->customer->address,
        ];
    }
}
