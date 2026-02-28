<?php

namespace App\Filament\Resources\Banners\Tables;

use App\Concerns\HasTranslator;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BannersTable
{
    use HasTranslator;

    protected static string $translationDirectoryName = 'filament';
    protected static string $translationFileName      = 'banner';

    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label(self::translate('image'))
                    ->circular(),
                TextColumn::make('title')
                    ->label(self::translate('title'))
                    ->searchable(),
                TextColumn::make('description')
                    ->label(self::translate('description'))
                    ->limit(50)
                    ->wrap(),
                TextColumn::make('button_title')
                    ->label(self::translate('button_title')),
                TextColumn::make('link')
                    ->label(self::translate('button_link'))
                    ->limit(50)
                    ->wrap()
                    ->url(fn($record) => $record->link, true)
                    ->extraAttributes([
                        'class' => 'underline'
                    ]),
                TextColumn::make('created_at')
                    ->label(self::translate('created_at', true))
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->label(self::translate('updated_at', true))
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
