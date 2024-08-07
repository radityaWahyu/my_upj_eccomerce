<?php

namespace App\Http\Requests\BackOffice;

use Illuminate\Foundation\Http\FormRequest;

class ShopRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if (request()->isMethod('post')) {
            return [
                'name' => ['required', 'unique:shops,name']
            ];
        } elseif (request()->isMethod('put')) {
            return [
                'name' => ['required']
            ];
        }
    }

    public function messages(): array
    {
        return [
            'required' => 'Data Unit Layanan harus diisi.',
            'unique' => 'Data Unit Layanan sudah terdapat di sistem.'
        ];
    }
}
