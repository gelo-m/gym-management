<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Payment extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;

    protected $fillable = [
        'reference_no',
        'member_id',
        'subscription_id',
        'amount',
        'payment_method',
        'gateway',
        'gateway_transaction_id',
        'payment_date',
        'status',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'payment_date' => 'datetime',
    ];

    public function member()
    {
        return $this->belongsTo(Member::class);
    }

    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }
}