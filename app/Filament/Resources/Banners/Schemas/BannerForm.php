<?php

namespace App\Filament\Resources\Banners\Schemas;

use App\Concerns\HasTranslator;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class BannerForm
{
     use HasTranslator;

    protected static string $translationDirectoryName = 'filament';
    protected static string $translationFileName      = 'banner';
    
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label(self::translate('title'))
                    ->columnSpanFull()
                    ->required(),
                Textarea::make('description')
                    ->label(self::translate('description'))
                    ->required()
                    ->rows(3)
                    ->columnSpanFull(),
                TextInput::make('button_title')
                    ->label(self::translate('button_title'))
                    ->required(),
                TextInput::make('link')
                    ->label(self::translate('button_link'))
                    ->required(),
                FileUpload::make('image')
                    ->label(self::translate('image'))
                    ->image()
                    ->directory(storageStructure('banner/image'))
                    ->required()
                    ->columnSpanFull(),
            ]);
    }
}
