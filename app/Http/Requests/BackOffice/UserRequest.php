<?php

namespace App\Http\Requests\BackOffice;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
                'username' => ['required', 'unique:users,username'],
                'password' => ['required', 'min:5'],
                'confirm_password' => ['required',  'same:password'],
            ];
        } else {
            return [
                'username' => ['required'],
                'password' => ['sometimes', 'nullable', 'min:5'],
                'confirm_password' => ['sometimes', 'nullable', 'same:password'],
            ];
        }
    }

    public function messages(): array
    {
        return [
            'required' => ':attribute harus diisi.',
            'unique' => ':attribute sudah terdapat di sistem.',
            'min' => ':attribute harus diisi minimal :min digit',
            'number' => ':attribute harus diisi dengan angka',
            'exists' => ':attribute tidak terdapat dalam sistem.'
        ];
    }

    public function attributes(): array
    {
        return [
            'username' => 'Username',
            'password' => 'Password',
            'confirm_password' => 'Password Konfirmasi',

        ];
    }
}
