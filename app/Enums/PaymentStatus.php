<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class PaymentStatus extends Enum
{
    const PENDING = 1;
    const PAID = 2;
    const FAILED = 3;
    const REFUNDED = 4;
}