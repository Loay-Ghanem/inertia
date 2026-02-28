<?php

namespace App\Filament\Resources\SubCategories;

use App\Concerns\HasTranslator;
use App\Filament\Resources\SubCategories\Pages\CreateSubCategory;
use App\Filament\Resources\SubCategories\Pages\EditSubCategory;
use App\Filament\Resources\SubCategories\Pages\ListSubCategories;
use App\Filament\Resources\SubCategories\Schemas\SubCategoryForm;
use App\Filament\Resources\SubCategories\Tables\SubCategoriesTable;
use App\Models\Category;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class SubCategoryResource extends Resource
{
    use HasTranslator;

    protected static ?string $model                         = Category::class;
    protected static string|BackedEnum|null $navigationIcon = Heroicon::QueueList;
    protected static string $translationDirectoryName       = 'filament';
    protected static string $translationFileName            = 'category';
    protected static ?int $navigationSort                   = 2;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->with('parent')
            ->whereNotNull('parent_id');
    }

    public static function getNavigationGroup(): ?string
    {
        return self::translate('categories');
    }

    public static function getNavigationLabel(): string
    {
        return self::translate('sub_categories');
    }

    public static function getLabel(): ?string
    {
        return self::translate('sub_category');
    }

    public static function getPluralLabel(): ?string
    {
        return self::translate('sub_categories');
    }

    public static function form(Schema $schema): Schema
    {
        return SubCategoryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return SubCategoriesTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListSubCategories::route('/'),
            'create' => CreateSubCategory::route('/create'),
            'edit'   => EditSubCategory::route('/{record}/edit'),
        ];
    }
}
