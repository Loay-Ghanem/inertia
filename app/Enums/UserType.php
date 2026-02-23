<?php

namespace App\Enums;

enum UserType :string
{
    case ADMIN     = 'Admin';
    case CUSTOMER  = 'Customer';
    case FACTORY   = 'Factory';

    public static function getValues(): array
    {
        return array_column(self::cases(), 'value');
    }
}
