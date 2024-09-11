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
                'name' => ['required', 'unique:shops,name'],
                'address' => ['required'],
                'image' => ['required'],
            ];
        } elseif (request()->isMethod('put')) {
            return [
                'name' => ['required'],
                'address' => ['required'],
            ];
        }
    }

    public function messages(): array
    {
        return [
            'required' => ':attribute harus diisi.',
            'unique' => ':attribute sudah terdapat di sistem.'
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'Unit Layanan',
            'address' => 'Alamat Kantor',
            'image' => 'Gambar'
        ];
    }
}
