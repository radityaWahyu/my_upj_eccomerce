<?php

namespace App\Http\Requests\BackOffice;

use Illuminate\Foundation\Http\FormRequest;

class JurnalRequest extends FormRequest
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
            'type' => ['required'],
            'description' => ['required'],
            'transaction_date' => ['required'],
            'total' => ['required'],
        ];
    }

    public function messages(): array
    {
        return [
            'required' => ':attribute harus diisi.',
        ];
    }

    public function attributes(): array
    {
        return [
            'type' => 'Jenis Jurnal',
            'description' => 'Deskripsi jurnal',
            'transaction_date' => 'Tanggal jurnal',
            'total' => 'Total'
        ];
    }
}
