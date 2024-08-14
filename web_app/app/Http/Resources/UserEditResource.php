<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserEditResource extends JsonResource
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
            'name' => $this->userable->name,
            'username' => $this->username,
            'shop' => !empty($this->userable->shop->name) ? $this->userable->shop->name : 'Unit Layanan Tidak Ditemukan',
        ];
    }
}
