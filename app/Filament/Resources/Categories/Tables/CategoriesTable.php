<?php

namespace App\Filament\Resources\Categories\Tables;

use App\Concerns\HasTranslator;
use App\Filament\Resources\Categories\RelationManagers\ChildrenRelationManager;
use Filament\Actions\EditAction;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Guava\FilamentModalRelationManagers\Actions\RelationManagerAction;

class CategoriesTable
{
    use HasTranslator;

    protected static string $translationDirectoryName = 'filament';
    protected static string $translationFileName      = 'category';

    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title.en')
                    ->label(self::translate('title_en'))
                    ->searchable(),
                TextColumn::make('title.ar')
                    ->label(self::translate('title_ar'))
                    ->searchable(),
                TextColumn::make('slug')
                    ->label(self::translate('slug'))
                    ->searchable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->recordActions([
                RelationManagerAction::make('lesson-relation-manager')
                    ->label(self::translate('sub_categories'))
                    ->relationManager(ChildrenRelationManager::make())
                    ->icon(Heroicon::OutlinedEye)
                    ->slideOver()
                    ->modalWidth('4xl'),
                EditAction::make(),
            ]);
    }
}
