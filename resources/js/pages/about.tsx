import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bike, Clock, Shield, Star } from 'lucide-react';

export default function AboutPage() {
    return (
        <>
            <Head title="About" />
            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-4 text-4xl font-bold">About Us</h1>
                    <p className="mb-12 text-lg text-muted-foreground">
                        We are dedicated to providing the best shopping
                        experience for our customers.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Star className="h-8 w-8 text-primary" />
                            <CardTitle className="text-lg">Quality</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                We carefully select each product to ensure the
                                highest quality standards.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Shield className="h-8 w-8 text-primary" />
                            <CardTitle className="text-lg">Trust</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Thousands of satisfied customers trust us with
                                their shopping needs.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Clock className="h-8 w-8 text-primary" />
                            <CardTitle className="text-lg">Service</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Our dedicated support team is always ready to
                                help you.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Bike className="h-8 w-8 text-primary" />
                            <CardTitle className="text-lg">Delivery</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Fast and reliable shipping to get your orders on
                                time.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-16">
                    <h2 className="mb-6 text-2xl font-semibold">Our Story</h2>
                    <p className="text-muted-foreground">
                        Founded with a passion for providing exceptional
                        products, we have grown to become a trusted name in the
                        industry. Our commitment to quality, customer
                        satisfaction, and innovation sets us apart. We believe
                        in building lasting relationships with our customers
                        through transparency and reliability.
                    </p>
                </div>
            </div>
        </>
    );
}
