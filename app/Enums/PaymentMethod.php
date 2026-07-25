<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class PaymentMethod extends Enum
{
    const CASH = 1;
    const GCASH = 2;
    const CREDIT_CARD = 3;
    const BANK_TRANSFER = 4;
}