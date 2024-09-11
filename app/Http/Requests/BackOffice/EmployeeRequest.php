<?php

namespace App\Http\Requests\BackOffice;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
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

        return [
            'name' => ['required'],
            'gender' => ['required', Rule::in(['l', 'p'])],
            'whatsapp' => ['required',  'max:15'],
            'phone' => ['max:15'],
            'shop' => ['required']
        ];
    }

    public function messages(): array
    {
        return [
            'required' => ':attribute harus diisi.',
            'unique' => ':attribute sudah terdapat di sistem.',
            'max' => ':attribute harus diisi maksimal :max digit',
            'number' => ':attribute harus diisi dengan angka',
            'exists' => ':attribute tidak terdapat dalam sistem.'
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'Nama',
            'address' => 'Alamat',
            'gender' => 'Jenis Kelamain',
            'shop' => 'Unit Layanan',
            'phone' => 'No Telepon',
            'whatsapp' => 'No Whatsapp'
        ];
    }
}
