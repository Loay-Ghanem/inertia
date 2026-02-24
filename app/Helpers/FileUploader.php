<?php

use Carbon\Carbon;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

if (! function_exists('storeFiles')) {
    function storeFiles($files, string $path, string $disk = 'public')
    {
        if (empty($files)) {
            return null;
        }

        $files = is_array($files) ? $files : [$files];

        $stored   = [];
        $datePath = storageStructure($path);

        foreach ($files as $file) {

            if (is_string($file)) {
                $stored[] = $file;
                continue;
            }

            if (! $file instanceof UploadedFile) {
                continue;
            }

            $stored[] = $file->store($datePath, $disk);
        }

        return count($stored) === 1 ? $stored[0] : $stored;
    }
}

if (! function_exists('removeFiles')) {
    function removeFiles($files, string $disk = 'public'): void
    {
        if (empty($files)) {
            return;
        }

        $files = is_array($files) ? $files : [$files];

        foreach ($files as $file) {
            if (! is_string($file)) {
                continue;
            }

            $file = ltrim($file, '/');

            if (Storage::disk($disk)->exists($file)) {
                Storage::disk($disk)->delete($file);
            }
        }
    }
}

if (! function_exists('getStorageUrl')) {
    function getStorageUrl(string $path): string
    {
        return Storage::url($path);
    }
}

if (! function_exists('storageStructure')) {
    function storageStructure(string $path = ''): string
    {
        return Carbon::now()->format('Y/m/d') . '/' . $path;
    }
}
