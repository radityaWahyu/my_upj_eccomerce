<?php

namespace App\Http\Requests\BackOffice;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
                'name' => ['required', 'unique:categories,name']
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
            'required' => 'Data Kategori harus diisi.',
            'unique' => 'Data Kategori sudah terdapat di sistem.'
        ];
    }
}
