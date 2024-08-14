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
        $modelType = explode('\\', $this->userable_type);
        if ($modelType[2] == 'Employee') {
            return [
                'id' => $this->userable->id,
                'name' => $this->userable->name,
                'username' => $this->username,
                'level' => $this->getRoleNames()[0],
            ];
        }
    }
}
