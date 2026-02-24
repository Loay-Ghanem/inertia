<?php

namespace App\Http\Controllers;

use App\Repositories\BannerRepository;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function __construct(
        protected BannerRepository $bannerRepository
    ) {}

    public function __invoke()
    {
        return Inertia::render('home', [
            'banners' => $this->bannerRepository->getAllBanners(),
        ]);
    }
}
