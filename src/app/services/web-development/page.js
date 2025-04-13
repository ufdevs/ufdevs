"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { FiCheck, FiArrowLeft, FiCode } from 'react-icons/fi';

export default function WebDevelopmentPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    const features = [
        'Responsive design for all devices',
        'Custom website and web application development',
        'E-commerce solutions',
        'Content management systems',
        'Progressive Web Apps (PWAs)',
        'Website maintenance and support',
        'Performance optimization',
        'SEO-friendly development'
    ];

    const technologies = [
        { name: 'React.js', color: '#61DAFB' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Node.js', color: '#339933' },
        { name: 'Django', color: '#092E20' },
        { name: 'WordPress', color: '#21759B' },
        { name: 'Shopify', color: '#7AB55C' },
        { name: 'MongoDB', color: '#47A248' },
        { name: 'PostgreSQL', color: '#336791' }
    ];

    return (
        <main className="min-h-screen pt-28 pb-16 bg-dark-900">
            <div className="container mx-auto px-4">
                <Link href="/services" className="inline-flex items-center text-blue-400 mb-8 hover:text-blue-300 transition-colors">
                    <FiArrowLeft className="mr-2" />
                    Back to services
                </Link>

                <div className="mb-12">
                    <div className="rounded-xl overflow-hidden relative h-64 md:h-80 mb-8">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://via.placeholder.com/1200x600/2563eb/FFFFFF?text=Web+Development')"
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 to-transparent flex items-center">
                            <div className="p-8 md:p-12">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Web Development</h1>
                                <p className="text-xl text-blue-200 max-w-xl">
                                    Building modern, high-performance websites and web applications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <div className="bg-dark-800 rounded-xl p-8 mb-8 shadow-lg">
                            <p className="text-lg text-gray-300 mb-6">
                                Our web development services focus on creating modern, high-performance websites
                                and web applications that help businesses establish a strong online presence.
                                We use the latest technologies and frameworks to deliver solutions that are both
                                visually appealing and functionally robust.
                            </p>

                            <p className="text-lg text-gray-300 mb-6">
                                Whether you need a simple informational website, a complex web application, or
                                an e-commerce platform, our experienced developers can bring your vision to life.
                                We prioritize responsive design, performance, and user experience to ensure your
                                website performs well across all devices.
                            </p>
                        </div>

                        <div className="bg-dark-800 rounded-xl p-8 mb-8 shadow-lg">
                            <h2 className="text-2xl font-semibold mb-6 text-white">Our Web Development Process</h2>

                            <div className="space-y-4">
                                <div className="flex items-center bg-dark-900/50 p-4 rounded-lg">
                                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">1</div>
                                    <span className="text-gray-200">Discovery and requirements gathering</span>
                                </div>
                                <div className="flex items-center bg-dark-900/50 p-4 rounded-lg">
                                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">2</div>
                                    <span className="text-gray-200">Planning and architecture design</span>
                                </div>
                                <div className="flex items-center bg-dark-900/50 p-4 rounded-lg">
                                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">3</div>
                                    <span className="text-gray-200">UI/UX design and wireframing</span>
                                </div>
                                <div className="flex items-center bg-dark-900/50 p-4 rounded-lg">
                                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">4</div>
                                    <span className="text-gray-200">Frontend and backend development</span>
                                </div>
                                <div className="flex items-center bg-dark-900/50 p-4 rounded-lg">
                                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">5</div>
                                    <span className="text-gray-200">Testing and quality assurance</span>
                                </div>
                                <div className="flex items-center bg-dark-900/50 p-4 rounded-lg">
                                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">6</div>
                                    <span className="text-gray-200">Deployment and launch</span>
                                </div>
                                <div className="flex items-center bg-dark-900/50 p-4 rounded-lg">
                                    <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">7</div>
                                    <span className="text-gray-200">Maintenance and support</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-dark-800 rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-semibold mb-6 text-white">Technologies We Use</h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {technologies.map((tech, index) => (
                                    <div key={index} className="bg-dark-900 p-4 rounded-lg text-center group hover:bg-gradient-to-br hover:from-blue-900 hover:to-purple-900 transition-all duration-300">
                                        <FiCode className="text-2xl mx-auto mb-2 text-blue-500 group-hover:text-white" />
                                        <div className="text-gray-300 group-hover:text-white">{tech.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl p-6 shadow-lg sticky top-28">
                            <h3 className="text-xl font-semibold mb-6 text-white border-b border-blue-700 pb-3">Features & Benefits</h3>

                            <ul className="space-y-4 mb-8">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                                            <FiCheck className="text-white" />
                                        </div>
                                        <span className="text-gray-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-blue-800/50 rounded-lg p-4 mb-6">
                                <h4 className="font-medium text-blue-200 mb-1">Start From</h4>
                                <div className="text-2xl font-bold text-white mb-1">₹50,000</div>
                                <p className="text-sm text-blue-200">For basic websites. Prices vary based on requirements.</p>
                            </div>

                            <Link
                                href="/contact"
                                className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 bg-dark-800 rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-white text-center">Ready to Start Your Web Project?</h2>
                    <p className="text-gray-300 text-center max-w-xl mx-auto mb-8">
                        Contact us today to discuss your web development needs. Our team is ready to help you create
                        a website that truly represents your brand and delivers results.
                    </p>
                    <div className="text-center">
                        <Link href="/pricing" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-500 transition-colors mr-4">
                            View Pricing
                        </Link>
                        <Link href="/contact" className="inline-block bg-transparent border border-blue-500 text-blue-400 py-3 px-8 rounded-lg hover:bg-blue-900/20 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
} 