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
            'id' => $this->user->id,
            'name' => $this->name,
            'username' => $this->user->username,
            'shop' => !empty($this->shop->name) ? $this->shop->name : 'Unit Layanan Tidak Ditemukan',
            'level' => $this->user->getRoleNames()[0],
            'enabled' => $this->user->is_enabled,
            'verified' => $this->user->is_verified
        ];
    }
}
