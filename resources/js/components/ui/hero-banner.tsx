import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Banner from '@/types/banner';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function HeroBanner({ banners,  }: { banners: Banner[] }) {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <section className="relative w-full">
            <Carousel
                opts={{ loop: true }}
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {banners.map((banner) => (
                        <CarouselItem key={banner.id}>
                            <div className="relative h-[400px] w-full overflow-hidden md:h-[550px]">
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={banner.image.startsWith('http') ? banner.image : `/storage/${banner.image}`}
                                        alt={banner.title}
                                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                </div>

                                <div className="relative z-10 flex h-full items-center justify-center">
                                    <div className="max-w-3xl px-6 text-center text-white">
                                        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-7xl">
                                            {banner.title}
                                        </h1>
                                        <p className="mx-auto mb-8 max-w-lg text-lg font-light text-gray-200 opacity-90 md:text-xl">
                                            {banner.description}
                                        </p>
                                        <div className="flex justify-center gap-4">
                                            <a
                                                href={banner.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-all hover:bg-primary"
                                            >
                                                {banner.button_title || 'Learn More'}
                                                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 border-0 bg-white/20 text-white backdrop-blur-sm transition-opacity hover:bg-white/30 md:flex" />
                <CarouselNext className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 border-0 bg-white/20 text-white backdrop-blur-sm transition-opacity hover:bg-white/30 md:flex" />
            </Carousel>
        </section>
    );
}