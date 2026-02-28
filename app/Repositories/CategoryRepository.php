<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository
{
    private string $locale;

    public function __construct()
    {
        $this->locale = app()->getLocale();
    }

    public function getLocaleTitle(): string
    {
        return 'title->>' . app()->getLocale();
    }

    public function getAllCAtegories()
    {
        return Category::query()
            ->select(['id', 'title', 'slug', 'parent_id'])
            ->get();
    }

    public function getMainCategories()
    {
        return Category::query()
            ->select(['id', 'title', 'slug', 'parent_id'])
            ->whereNull('parent_id')
            ->get();
    }

    public function getSubCategories()
    {
        return Category::query()
            ->select(['id', 'title', 'slug', 'parent_id'])
            ->whereNotNull('parent_id')
            ->get();
    }

    public function searchMainCategories(string $search)
    {
        return Category::query()
            ->whereNull('parent_id')
            ->whereRaw("title->> ? ILIKE ?", [$this->locale, "%{$search}%"])
            ->limit(10)
            ->get()
            ->pluck("title.{$this->locale}", "id");
    }
}
