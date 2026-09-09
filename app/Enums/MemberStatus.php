<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class MemberStatus extends Enum
{
    const ACTIVE = 1;
    const INACTIVE = 2;
    const FROZEN = 3;
    const SUSPENDED = 4;
    const EXPIRED = 5;
}