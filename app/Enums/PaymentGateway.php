<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class PaymentGateway extends Enum
{
    const MANUAL = 1;
    const PAYMONGO = 2;
    const STRIPE = 3;
}