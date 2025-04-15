import Link from 'next/link';
import { FaHome, FaSearch, FaArrowRight } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata = {
    title: 'Page Not Found | UFDevs - Web & OTT Development by Ramesh Vishwakarma',
    description: 'Sorry, the page you are looking for cannot be found. Explore our web development, mobile app, and OTT platform services by Ramesh Vishwakarma from IIT Patna instead.',
    robots: 'noindex, follow'
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
            <div className="max-w-lg w-full text-center">
                <h1 className="text-6xl md:text-9xl font-extrabold text-primary mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Page Not Found</h2>

                <p className="text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                    But don't worry, you can find lots of other things on our homepage or explore our services.
                </p>

                <div className="mb-8">
                    <div className="text-xl font-medium text-gray-800 mb-4">You might be looking for:</div>
                    <ul className="space-y-2 mb-6">
                        <li className="hover:text-primary transition-colors">
                            <Link href="/about/ramesh-vishwakarma-iit-patna" className="flex items-center justify-center gap-2">
                                <FaArrowRight className="text-sm" />
                                <span>About Ramesh Vishwakarma (IIT Patna)</span>
                            </Link>
                        </li>
                        <li className="hover:text-primary transition-colors">
                            <Link href="/services/web-development" className="flex items-center justify-center gap-2">
                                <FaArrowRight className="text-sm" />
                                <span>Web Development Services</span>
                            </Link>
                        </li>
                        <li className="hover:text-primary transition-colors">
                            <Link href="/services/ott-development" className="flex items-center justify-center gap-2">
                                <FaArrowRight className="text-sm" />
                                <span>OTT Platform Development</span>
                            </Link>
                        </li>
                        <li className="hover:text-primary transition-colors">
                            <Link href="/portfolio" className="flex items-center justify-center gap-2">
                                <FaArrowRight className="text-sm" />
                                <span>Our Portfolio</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                        <FaHome /> <span>Back to Homepage</span>
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors">
                        <FaSearch /> <span>Contact Us</span>
                    </Link>
                </div>
            </div>
        </div>
    );
} 