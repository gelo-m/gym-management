<?php

namespace App\Models;

use App\Enums\MemberStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use OwenIt\Auditing\Contracts\Auditable;

class Member extends Model implements Auditable
{
    use SoftDeletes;
    use \OwenIt\Auditing\Auditable;

    protected $fillable = [
        'user_id',
        'member_no',
        'first_name',
        'middle_name',
        'last_name',
        'birth_date',
        'gender',
        'mobile_number',
        'email',
        'address',
        'emergency_contact_name',
        'emergency_contact_number',
        'photo',
        'qr_code',
        'joined_at',
        'status',
    ];

    protected $casts = [
        'birth_date' => 'date',
        'joined_at' => 'date',
        'gender' => Gender::class,
        'status' => MemberStatus::class,
    ];

    protected $auditInclude = [
        'first_name',
        'middle_name',
        'last_name',
        'mobile_number',
        'email',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }

    public function getFullNameAttribute()
    {
        return trim(
            "{$this->first_name} {$this->middle_name} {$this->last_name}"
        );
    }

    public function getStatusLabelAttribute()
    {
        // return MemberStatus::getDescription($this->status);
        return $this->status->description;
    }
}