<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\LaravelPackageTools\Concerns\Package\HasTranslations;

class Category extends Model
{
    use HasTranslations, SoftDeletes;

    protected $guarded   = [];
    public $translatable = ['title'];
    protected $casts     = [
        'title' => 'array'
    ];
}
