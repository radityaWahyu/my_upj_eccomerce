<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->userable->name,
            'username' => $this->username,
            'shop' => !empty($this->userable->shop->name) ? $this->userable->shop->name : 'Unit Layanan Tidak Ditemukan',
            'level' => $this->getRoleNames()[0],
        ];
    }
}
