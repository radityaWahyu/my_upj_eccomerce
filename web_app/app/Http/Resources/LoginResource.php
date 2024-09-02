<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LoginResource extends JsonResource
{
    public static $wrap = null;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // $isAdmin = get_class($this->userable) == 'App\Models\Employee';

        if ($request->user('web')) {
            return [
                'id' => $this->employee->id,
                'name' => $this->employee->name,
                'username' => $this->username,
                'level' => $this->getRoleNames()[0],
            ];
        }
        return [
            'id' => $this->id,
            'name' => $this->name,
            'username' => $this->username,
            'whatsapp' => $this->whatsapp,
        ];
    }
}
