<?php

namespace App\Repositories;

use App\Models\Banner;

class BannerRepository
{
    public function getAllBanners()
    {
        return Banner::query()
            ->select(['id', 'title', 'button_title', 'link', 'image', 'description'])
            ->get();
    }
}
