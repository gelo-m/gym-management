<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class SubscriptionStatus extends Enum
{
    const PENDING = 1;
    const ACTIVE = 2;
    const EXPIRED = 3;
    const CANCELLED = 4;
}