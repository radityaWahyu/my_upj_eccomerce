<?php

namespace App\Http\Requests\BackOffice;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
        if ($this->user()->hasRole('administrator')) {
            return [
                'name' => ['required'],
                'type' => ['required'],
                'shop' => ['required'],
                'category' => ['required'],
                'price' => ['required'],
                'description' => ['nullable']
            ];
        }
        return [
            'name' => ['required'],
            'type' => ['required'],
            'category' => ['required'],
            'price' => ['required', 'integer'],
            'description' => ['nullable']
        ];
    }

    public function messages(): array
    {
        return [
            'required' => ':attribute harus diisi.',
            'unique' => ':attribute sudah terdapat di sistem.',
            'max' => ':attribute harus diisi maksimal :max digit',
            'integer' => ':attribute harus diisi dengan angka',
            'exists' => ':attribute tidak terdapat dalam sistem.'
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'Nama Produk',
            'type' => 'Jenis Produk',
            'category' => 'Kategori',
            'shop' => 'Unit Layanan',
            'price' => 'Harga',
            'description' => 'Deskripsi'
        ];
    }
}
