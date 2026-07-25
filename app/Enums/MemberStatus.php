<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class MemberStatus extends Enum
{
    const ACTIVE = 1;
    const INACTIVE = 2;
    const SUSPENDED = 3;
}