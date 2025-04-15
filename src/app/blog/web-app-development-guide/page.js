"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiCalendar, FiUser, FiTag } from 'react-icons/fi';

export default function WebAppDevelopmentGuide() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4">
                <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
                    <FiArrowLeft className="mr-2" /> Back to Blog
                </Link>

                <article className="prose lg:prose-xl max-w-4xl mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold mb-4">Complete Guide to Web & App Development in 2024</h1>
                        <div className="flex justify-center items-center space-x-4 text-gray-600 mb-4">
                            <span className="flex items-center">
                                <FiCalendar className="mr-1" /> April 15, 2024
                            </span>
                            <span className="flex items-center">
                                <FiUser className="mr-1" /> Ramesh Vishwakarma
                            </span>
                            <span className="flex items-center">
                                <FiTag className="mr-1" /> Web Development, App Development
                            </span>
                        </div>
                        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                    </div>

                    <div className="mb-8 relative h-96 rounded-xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center">
                            <h2 className="text-white text-3xl font-bold text-center px-4">Web & Mobile App Development Guide</h2>
                        </div>
                    </div>

                    <h2>Introduction to Web & App Development</h2>
                    <p>
                        In today's digital landscape, having a strong online presence through websites and mobile applications is essential for businesses of all sizes. This comprehensive guide will walk you through the process of web and app development, from planning to deployment, and help you make informed decisions about technologies, costs, and best practices.
                    </p>
                    <p>
                        Whether you're a startup founder, a business owner, or an aspiring developer, understanding the fundamentals of web and app development will enable you to better communicate with developers, make strategic decisions, and ultimately create digital products that meet your goals.
                    </p>

                    <h2>Web Development: Types and Technologies</h2>
                    <h3>Types of Websites</h3>
                    <p>
                        Web development encompasses various types of websites, each serving different purposes:
                    </p>
                    <ul>
                        <li><strong>Static Websites:</strong> Simple sites with fixed content, ideal for small businesses or personal portfolios.</li>
                        <li><strong>Dynamic Websites:</strong> Sites with content that changes based on user interactions, such as e-commerce platforms or social media.</li>
                        <li><strong>E-commerce Websites:</strong> Online stores with product listings, shopping carts, and payment gateways.</li>
                        <li><strong>Single Page Applications (SPAs):</strong> Web apps that load a single HTML page and dynamically update content as users interact with them.</li>
                        <li><strong>Progressive Web Apps (PWAs):</strong> Websites that function like native mobile apps, offering offline capabilities and app-like experiences.</li>
                    </ul>

                    <h3>Frontend Technologies</h3>
                    <p>
                        Frontend development focuses on what users see and interact with. Modern frontend development typically involves:
                    </p>
                    <ul>
                        <li><strong>HTML5:</strong> The structure of web pages</li>
                        <li><strong>CSS3:</strong> For styling and layout</li>
                        <li><strong>JavaScript:</strong> For interactive elements and dynamic content</li>
                    </ul>
                    <p>
                        Popular frontend frameworks and libraries include:
                    </p>
                    <ul>
                        <li><strong>React.js:</strong> A JavaScript library for building user interfaces, developed by Facebook</li>
                        <li><strong>Angular:</strong> A comprehensive framework maintained by Google</li>
                        <li><strong>Vue.js:</strong> A progressive framework known for its simplicity and flexibility</li>
                        <li><strong>Next.js:</strong> A React framework that enables server-side rendering and static site generation</li>
                    </ul>

                    <h3>Backend Technologies</h3>
                    <p>
                        Backend development deals with server-side logic, databases, and application architecture. Common backend technologies include:
                    </p>
                    <ul>
                        <li><strong>Node.js:</strong> JavaScript runtime for server-side development</li>
                        <li><strong>Express.js:</strong> A minimal web framework for Node.js</li>
                        <li><strong>Django:</strong> A high-level Python framework</li>
                        <li><strong>Ruby on Rails:</strong> A convention-over-configuration framework</li>
                        <li><strong>Laravel:</strong> A PHP framework with elegant syntax</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>
                        Web and app development are dynamic fields that require careful planning, appropriate technology choices, and continuous learning. By understanding the fundamentals outlined in this guide, you can make informed decisions about your development projects.
                    </p>
                    <p>
                        At UFDev, we specialize in creating custom web and mobile applications that drive business growth. Our team of experienced developers, led by IIT Patna alumnus Ramesh Vishwakarma, combines technical expertise with business understanding to deliver high-quality digital solutions.
                    </p>

                    <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                        <h3 className="text-xl font-bold mb-4">Need Help With Your Web or App Development Project?</h3>
                        <p className="mb-4">
                            Whether you're looking to build a new website, develop a mobile app, or create a custom web application, our team at UFDev can help bring your vision to life.
                        </p>
                        <div className="text-center">
                            <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                Get a Free Consultation
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
} 