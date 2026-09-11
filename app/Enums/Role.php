<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class Role extends Enum
{
    const ADMIN     = 1;
    const COACH     = 2;
    const MEMBER    = 3;
}