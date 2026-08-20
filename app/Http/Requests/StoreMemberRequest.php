<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreMemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:100'],
            'middle_name' => ['nullable', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],

            'mobile_number' => ['nullable', 'string', 'max:20'],
            'email' => ['nullable', 'email'],

            'birth_date' => ['nullable', 'date'],
            'gender' => ['nullable', 'integer'],

            'address' => ['nullable', 'string'],

            'emergency_contact_name' => ['nullable', 'string'],
            'emergency_contact_number' => ['nullable', 'string'],

            'joined_at' => ['required', 'date'],
            'status' => ['required', 'integer'],
        ];
    }
}
