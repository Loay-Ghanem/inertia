import { Link } from '@inertiajs/react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { about, contact, home, login } from '@/routes';
import { useAppearance } from '@/hooks/use-appearance';

export function Navbar() {
    const { resolvedAppearance, updateAppearance } = useAppearance();

    const toggleTheme = () => {
        updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-sidebar-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 items-center justify-between px-4 md:container md:max-w-7xl">
                <div className="flex items-center gap-8">
                    <Link
                        href={home()}
                        prefetch
                        className="flex items-center space-x-2 text-lg font-semibold"
                    >
                        My App
                    </Link>
                    <nav className="hidden items-center gap-6 md:flex">
                        <Link
                            href={home()}
                            prefetch
                            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                            Home
                        </Link>
                        <Link
                            href={about()}
                            prefetch
                            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                            About
                        </Link>
                        <Link
                            href={contact()}
                            prefetch
                            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href={login()}
                        className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                        Login
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="h-9 w-9"
                    >
                        {resolvedAppearance === 'dark' ? (
                            <Sun className="h-4 w-4" />
                        ) : (
                            <Moon className="h-4 w-4" />
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
