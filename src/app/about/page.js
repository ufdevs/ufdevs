"use client";

import { useEffect } from 'react';
import { FaCode, FaMobile, FaLaptopCode, FaUsers, FaChartLine, FaAward } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About UFDev</h1>

                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <p className="text-lg mb-4">
                                Founded in 2020, UFDev.LLC was born from a passion to bring professional-grade web and mobile development solutions to businesses of all sizes. Our founders recognized a gap in the market for affordable yet high-quality development services that could help small to medium businesses compete in the digital landscape.
                            </p>
                            <p className="text-lg mb-4">
                                What began as a small team of three developers has grown into a diverse collective of talented professionals spanning multiple disciplines – from UI/UX design to full-stack development, DevOps, and digital marketing.
                            </p>
                            <p className="text-lg">
                                Based in the United States with team members across the globe, we combine the reliability of local service with the innovation that comes from diverse perspectives.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
                        <div className="border-l-4 border-blue-500 pl-6 py-2">
                            <p className="text-xl italic">
                                "To empower businesses through technology by delivering exceptional digital solutions that drive growth, efficiency, and competitive advantage."
                            </p>
                        </div>
                        <p className="text-lg mt-6">
                            At UFDev, we believe that powerful technology shouldn't be exclusive to enterprise-level businesses. Our mission is to democratize access to high-quality web and app development, enabling companies of all sizes to leverage digital tools for sustainable growth.
                        </p>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-8">Core Services</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <FaCode className="text-blue-500 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold">Web Development</h3>
                                </div>
                                <p>Custom websites, web applications, and e-commerce solutions built with React, Next.js, and other modern technologies.</p>
                            </div>

                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <FaMobile className="text-blue-500 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold">Mobile App Development</h3>
                                </div>
                                <p>Cross-platform mobile applications using React Native, delivering native-like experience on both iOS and Android.</p>
                            </div>

                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <FaLaptopCode className="text-blue-500 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold">Full-Stack Development</h3>
                                </div>
                                <p>End-to-end solutions using Node.js, Express, MongoDB, and other backend technologies to power your applications.</p>
                            </div>

                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <FaChartLine className="text-blue-500 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold">Digital Strategy</h3>
                                </div>
                                <p>Technical consulting, SEO optimization, and digital transformation roadmaps tailored to your business goals.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-3">Client-Centered Development</h3>
                                <p className="mb-4">
                                    We believe in close collaboration with our clients throughout the development process. Your vision drives our work, and your feedback shapes our approach at every step.
                                </p>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-3">Agile Methodology</h3>
                                <p className="mb-4">
                                    Our development process follows agile principles, allowing for flexibility, iterative improvements, and faster time-to-market.
                                </p>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-3">Future-Proof Solutions</h3>
                                <p className="mb-4">
                                    We build with scalability and maintainability in mind, using modern technologies and best practices to ensure your solution grows with your business.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Why Choose UFDev</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center p-4">
                                <FaUsers className="text-4xl text-blue-500 mx-auto mb-3" />
                                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                                <p>Our developers have an average of 5+ years in modern web and app technologies.</p>
                            </div>
                            <div className="text-center p-4">
                                <FaLaptopCode className="text-4xl text-blue-500 mx-auto mb-3" />
                                <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                                <p>We stay ahead of industry trends to deliver cutting-edge solutions.</p>
                            </div>
                            <div className="text-center p-4">
                                <FaAward className="text-4xl text-blue-500 mx-auto mb-3" />
                                <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                                <p>Our success is measured by the impact our solutions have on your business.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
                            <p className="text-xl mb-6">
                                Let's discuss how UFDev can help you achieve your technology goals.
                            </p>
                            <Link href="/contact" className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                                Contact Us Today
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
} 