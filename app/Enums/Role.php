<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class Gender extends Enum
{
    const ADMIN     = 1;
    const COACH     = 2;
    const MEMBER    = 3;
}