import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Search,
    ShoppingBag,
    Laptop,
    Home,
    Shirt,
    BookOpen,
    Watch,
    Smartphone,
} from 'lucide-react';

const categories = [
    { name: 'Electronics', icon: Smartphone, color: 'bg-blue-500' },
    { name: 'Fashion', icon: Shirt, color: 'bg-pink-500' },
    { name: 'Home & Living', icon: Home, color: 'bg-amber-500' },
    { name: 'Sports', icon: ShoppingBag, color: 'bg-green-500' },
    { name: 'Computers', icon: Laptop, color: 'bg-purple-500' },
    { name: 'Books', icon: BookOpen, color: 'bg-orange-500' },
    { name: 'Watches', icon: Watch, color: 'bg-cyan-500' },
    { name: 'Accessories', icon: ShoppingBag, color: 'bg-rose-500' },
];

const slides = [
    {
        title: 'Flash Sale: 50% Off',
        subtitle: 'Selected categories',
        description: 'Limited time offers on premium products',
        gradient: 'from-slate-900 via-slate-800 to-slate-900',
        badge: 'ENDS SOON',
    },
    {
        title: 'New Arrivals',
        subtitle: 'This Week',
        description: 'Discover the latest trends in fashion and tech',
        gradient: 'from-blue-900 via-blue-800 to-indigo-900',
        badge: 'NEW',
    },
    {
        title: 'Free Shipping',
        subtitle: 'On Orders Over $50',
        description: 'Fast delivery to your doorstep',
        gradient: 'from-emerald-900 via-emerald-800 to-teal-900',
        badge: 'FREE',
    },
];

export default function HomePage() {
    return (
        <div className="flex flex-col gap-16 pb-10">
            {/* Hero Carousel */}
            <section className="relative w-full">
                <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={index}>
                                <div
                                    className={`relative h-[320px] bg-gradient-to-r md:h-[420px] ${slide.gradient} flex items-center justify-center`}
                                >
                                    <div className="absolute inset-0 bg-black/20" />
                                    <div className="relative z-10 max-w-2xl px-6 text-center text-white">
                                        <Badge className="mb-4 border-0 bg-white/20 font-medium text-white backdrop-blur-sm hover:bg-white/30">
                                            {slide.badge}
                                        </Badge>
                                        <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-6xl">
                                            {slide.title}
                                        </h1>
                                        <p className="mb-4 text-xl font-light opacity-90 md:text-2xl">
                                            {slide.subtitle}
                                        </p>
                                        <p className="text-sm opacity-75 md:text-base">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 left-4 h-10 w-10 -translate-y-1/2 border-0 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30" />
                    <CarouselNext className="absolute top-1/2 right-4 h-10 w-10 -translate-y-1/2 border-0 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30" />
                </Carousel>
            </section>

            <div className="container mx-auto space-y-16 px-4">
                {/* Search Bar */}
                <div className="relative mx-auto max-w-2xl">
                    <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search for products, categories, brands..."
                        className="h-14 rounded-full border-muted-foreground/20 pl-12 text-base shadow-lg focus:ring-2 focus:ring-primary/20"
                    />
                </div>

                {/* Categories Section */}
                <section>
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold md:text-3xl">
                                Shop by Category
                            </h2>
                            <p className="mt-1 text-muted-foreground">
                                Browse our extensive collection
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
                        {categories.map((category, i) => (
                            <Card
                                key={i}
                                className="group cursor-pointer overflow-hidden border-muted/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                            >
                                <CardContent className="flex flex-col items-center p-6 text-center">
                                    <div
                                        className={`h-16 w-16 rounded-2xl ${category.color} mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <category.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-base font-semibold">
                                        {category.name}
                                    </CardTitle>
                                    <p className="mt-1 text-sm text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                                        Explore now
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Featured Banner */}
                <section className="relative overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
                    <div className="relative px-8 py-12 text-center md:py-16">
                        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
                            Get 20% Off Your First Order
                        </h2>
                        <p className="mx-auto mb-6 max-w-lg text-lg text-white/80">
                            Sign up for our newsletter and receive an exclusive
                            discount on your first purchase.
                        </p>
                        <div className="mx-auto flex max-w-md flex-col justify-center gap-3 sm:flex-row">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="h-12 border-white/30 bg-white/20 text-white backdrop-blur-sm placeholder:text-white/60"
                            />
                            <button className="h-12 rounded-full bg-white px-8 font-semibold text-primary transition-colors hover:bg-white/90">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>

                {/* Trending Products Section */}
                <section>
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold md:text-3xl">
                                Trending Now
                            </h2>
                            <p className="mt-1 text-muted-foreground">
                                Most popular products this week
                            </p>
                        </div>
                        <button className="text-sm font-medium text-primary hover:underline">
                            View all
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Card
                                key={i}
                                className="group cursor-pointer overflow-hidden border-muted/60 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="relative aspect-square bg-muted transition-colors group-hover:bg-muted/60">
                                    <div className="absolute top-3 left-3">
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            Sale
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <p className="mb-1 text-sm text-muted-foreground">
                                        Category
                                    </p>
                                    <h3 className="mb-2 line-clamp-1 font-semibold">
                                        Product Name {i + 1}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold">
                                            ${(29.99 * (i + 1)).toFixed(2)}
                                        </span>
                                        <span className="text-sm text-muted-foreground line-through">
                                            ${(49.99 * (i + 1)).toFixed(2)}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
