<?php

namespace App\Filament\Resources\SubCategories\Tables;

use App\Concerns\HasTranslator;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Contracts\Database\Eloquent\Builder;

class SubCategoriesTable
{
    use HasTranslator;

    protected static string $translationDirectoryName = 'filament';
    protected static string $translationFileName      = 'category';

    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('parent.title.' . app()->getLocale())
                    ->label(self::translate('parent'))
                    ->searchable(query: fn(Builder $query, string $search): Builder => self::parentSearch($query, $search)),
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
                EditAction::make(),
            ]);
    }

    private static function parentSearch(Builder $query, string $search): Builder
    {
        $locale = app()->getLocale();
        return $query->withWhereHas('parent', function ($q) use ($locale, $search) {
            $q->whereRaw("title->> ? ILIKE ?", [$locale, "%{$search}%"]);
        });
    }
}
