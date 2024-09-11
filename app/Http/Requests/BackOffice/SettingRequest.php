<?php

namespace App\Http\Requests\BackOffice;

use Illuminate\Foundation\Http\FormRequest;

class SettingRequest extends FormRequest
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
            'settings.0.value' => ['required'],
            'settings.1.value' => ['required'],
            'settings.2.value' => ['required'],
            'settings.3.value' => ['required'],
            'settings.4.value' => ['required'],
        ];
    }

    public function messages(): array
    {
        return [
            'settings.0.value.required' => 'Data Instagram harus diisi',
            'settings.1.value.required' => 'Data Facebook harus diisi',
            'settings.2.value.required' => 'Data Youtube harus diisi',
            'settings.3.value.required' => 'Data Alamat harus diisi',
            'settings.4.value.required' => 'Data Google Map harus diisi'

        ];
    }
}
