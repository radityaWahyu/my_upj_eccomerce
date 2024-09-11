<?php

namespace App\Http\Requests\BackOffice;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
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
            'whatsapp' => ['required',  'max:12'],
            'phone' => ['required', 'max:12'],
            'address' => ['required'],
            'username' => ['required', 'unique:users,username'],
            'password' => ['required', 'min:8'],
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
            'username' => 'Username',
            'password' => 'Password',
            'phone' => 'No Telepon',
            'whatsapp' => 'No Whatsapp'
        ];
    }
}
