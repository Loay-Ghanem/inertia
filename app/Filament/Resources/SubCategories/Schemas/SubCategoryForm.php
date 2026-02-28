<?php

namespace App\Filament\Resources\SubCategories\Schemas;

use App\Concerns\HasSlugGenerator;
use App\Concerns\HasTranslator;
use App\Models\Category;
use App\Repositories\CategoryRepository;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;

class SubCategoryForm
{
    use HasTranslator, HasSlugGenerator;

    protected static string $translationDirectoryName = 'filament';
    protected static string $translationFileName      = 'category';

    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Grid::make()
                    ->columns(2)
                    ->columnSpanFull()
                    ->schema([
                        TextInput::make('title.en')
                            ->label(self::translate('title_en'))
                            ->afterStateUpdated(fn(?string $state, Get $get, Set $set) => self::setSlug($state, $get, $set))
                            ->live(onBlur: true)
                            ->required()
                            ->maxLength(255),
                        TextInput::make('title.ar')
                            ->label(self::translate('title_ar'))
                            ->required()
                            ->maxLength(255),
                        TextInput::make('slug')
                            ->label(self::translate('slug'))
                            ->unique(ignoreRecord: true)
                            ->maxLength(255)
                            ->required(),
                        Select::make('parent_id')
                            ->label(self::translate('parent'))
                            ->relationship('parent', 'title->' . app()->getLocale())
                            ->searchable()
                            ->getSearchResultsUsing(function (string $search) {
                                return app(CategoryRepository::class)->searchMainCategories($search);
                            })
                            ->preload()
                            ->native(false)
                            ->required(),
                    ])
            ]);
    }
}
