<?php

namespace App\Concerns;

use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Illuminate\Support\Str;

trait HasSlugGenerator
{
    protected static function setSlug(?string $state, Get $get, Set $set): void
    {
        if (filled($state) && empty($get('slug'))) {
            $slugState = Str::slug($state);
            $set('slug', $slugState);
        }
    }
}
