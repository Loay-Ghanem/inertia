<?php

namespace App\Concerns;

use Exception;

trait HasTranslator
{
    protected static function translate($key, $common = false, $replace = [], $file_name = null, $dir = null): string
    {
        if (!property_exists(static::class, 'translationFileName') && !$file_name) {
            throw new Exception("Translation file name not set in " . static::class);
        }

        $translationFileName = $file_name ?: self::$translationFileName;
        $translationDirectoryName = $dir ?: self::$translationDirectoryName;

        return $common ?
            __("{$translationDirectoryName}/common.{$key}") :
            __("{$translationDirectoryName}/{$translationFileName}.{$key}", $replace);
    }
}
