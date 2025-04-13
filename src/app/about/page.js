"use client";

import { useEffect } from 'react';

export default function AboutPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg mb-6">
                        Welcome to UFDev.LLC, your trusted partner in digital transformation.
                        Founded with a vision to make cutting-edge technology accessible to businesses of all sizes,
                        we specialize in creating innovative digital solutions that drive growth and efficiency.
                    </p>

                    <p className="text-lg mb-6">
                        Our team of passionate developers, designers, and strategists work together to deliver
                        exceptional results that exceed our clients' expectations.
                    </p>

                    {/* More content can be added here */}
                </div>
            </div>
        </main>
    );
} 