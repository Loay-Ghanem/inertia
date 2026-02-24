<?php

namespace App\Filament\Resources\Banners\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class BannerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Title')
                    ->columnSpanFull()
                    ->required(),
                Textarea::make('description')
                    ->label('Description')
                    ->required()
                    ->rows(3)
                    ->columnSpanFull(),
                TextInput::make('button_title')
                    ->label('Button Title')
                    ->required(),
                TextInput::make('link')
                    ->label('Link')
                    ->required(),
                FileUpload::make('image')
                    ->label('Banner Image')
                    ->image()
                    ->directory(storageStructure('banner/image'))
                    ->required()
                    ->columnSpanFull(),
            ]);
    }
}
