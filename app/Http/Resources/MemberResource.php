<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MemberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            'member_no' => $this->member_no,
        
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
        
            'full_name' => $this->full_name,
        
            'mobile_number' => $this->mobile_number,
            'email' => $this->email,
        
            'birth_date' => $this->birth_date?->format('Y-m-d'),
            'joined_at' => $this->joined_at?->format('Y-m-d'),
        
            'gender' => $this->gender,
            'status' => $this->status,
            'status_label' => $this->status_label,
        ];
    }
}
