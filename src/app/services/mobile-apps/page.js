"use client";

import { useEffect } from 'react';
import { FaApple, FaAndroid, FaWindows, FaCode, FaRocket, FaCreditCard, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { SiReact, SiFlutter } from 'react-icons/si';
import { DiDotnet } from 'react-icons/di';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileAppsPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl p-8 mb-16 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Affordable Cross-Platform Mobile App Development</h1>
                        <p className="text-xl mb-8">Get your business app on iOS, Android, and Windows without breaking the bank. One codebase, all platforms, huge savings.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-100 py-3 px-6 rounded-full font-semibold transition duration-300">
                                Get Free Quote
                            </Link>
                            <Link href="#pricing" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 py-3 px-6 rounded-full font-semibold transition duration-300">
                                See Pricing
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Platforms Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Your App on Every Platform</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                            <FaApple className="text-5xl mx-auto mb-4 text-gray-700 dark:text-gray-300" />
                            <h3 className="text-xl font-semibold mb-3">iOS App Development</h3>
                            <p className="text-gray-600 dark:text-gray-400">Get your app on all Apple devices including iPhone and iPad with beautiful, native-feeling interfaces.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                            <FaAndroid className="text-5xl mx-auto mb-4 text-green-500" />
                            <h3 className="text-xl font-semibold mb-3">Android App Development</h3>
                            <p className="text-gray-600 dark:text-gray-400">Reach billions of Android users worldwide with smooth-performing apps that feel right at home.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                            <FaWindows className="text-5xl mx-auto mb-4 text-blue-500" />
                            <h3 className="text-xl font-semibold mb-3">Windows App Development</h3>
                            <p className="text-gray-600 dark:text-gray-400">Complete your multi-platform strategy with Windows apps for desktop and tablet users.</p>
                        </div>
                    </div>
                </section>

                {/* Why Cross-Platform Section */}
                <section className="mb-16 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Cross-Platform App Development?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                                    <FaCreditCard className="text-blue-600 dark:text-blue-400 text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Save 40-60% on Development Costs</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Why pay for multiple development teams when one codebase can target all platforms? Dramatically reduce your app budget.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 dark:bg-green-900 p-3 rounded-full">
                                    <FaRocket className="text-green-600 dark:text-green-400 text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Faster Time to Market</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Launch your app on multiple platforms simultaneously. Get to market in half the time compared to native development.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                                    <FaUsers className="text-purple-600 dark:text-purple-400 text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Reach More Users</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Don't limit yourself to one platform. Reach iOS, Android, and Windows users with a single development effort.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
                                    <FaLightbulb className="text-orange-600 dark:text-orange-400 text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Easier Updates & Maintenance</h3>
                                    <p className="text-gray-600 dark:text-gray-400">One codebase means simpler maintenance. Update once, deploy everywhere, keeping all users happy with minimal effort.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Technologies Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Cross-Platform Technologies We Use</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-gray-200 dark:border-gray-700 p-8 rounded-lg text-center">
                            <SiReact className="text-6xl mx-auto mb-4 text-blue-500" />
                            <h3 className="text-xl font-semibold mb-3">React Native</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">The preferred choice for most of our projects. Created by Facebook, React Native delivers truly native performance with a single JavaScript codebase.</p>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                <p>Perfect for: Most business apps, e-commerce, social platforms</p>
                            </div>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 p-8 rounded-lg text-center">
                            <SiFlutter className="text-6xl mx-auto mb-4 text-blue-400" />
                            <h3 className="text-xl font-semibold mb-3">Flutter</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Google's UI toolkit delivers beautiful interfaces with fast performance. Excellent for highly-graphic applications.</p>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                <p>Perfect for: Complex UI, animation-heavy apps, games</p>
                            </div>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 p-8 rounded-lg text-center">
                            <DiDotnet className="text-6xl mx-auto mb-4 text-blue-800" />
                            <h3 className="text-xl font-semibold mb-3">.NET MAUI</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Microsoft's cross-platform solution for business apps needing deep Windows integration while still supporting iOS and Android.</p>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                <p>Perfect for: Enterprise apps, Windows integration</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cost Comparison Section */}
                <section id="pricing" className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">App Development Cost Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800">
                                    <th className="border p-4 text-left">Development Approach</th>
                                    <th className="border p-4 text-left">Cost Range</th>
                                    <th className="border p-4 text-left">Timeline</th>
                                    <th className="border p-4 text-left">Ideal For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-4 font-semibold">Native Apps (iOS, Android & Windows separately)</td>
                                    <td className="border p-4">$60,000 - $180,000+</td>
                                    <td className="border p-4">6-12 months</td>
                                    <td className="border p-4">Apps needing deep hardware integration or peak performance</td>
                                </tr>
                                <tr className="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20">
                                    <td className="border p-4 font-semibold">Cross-Platform with UFDev (All platforms)</td>
                                    <td className="border p-4 text-green-600 dark:text-green-400 font-semibold">$25,000 - $80,000</td>
                                    <td className="border p-4">3-6 months</td>
                                    <td className="border p-4">Most business apps, startups, MVPs</td>
                                </tr>
                                <tr>
                                    <td className="border p-4 font-semibold">Template-Based App Builders</td>
                                    <td className="border p-4">$5,000 - $20,000</td>
                                    <td className="border p-4">1-2 months</td>
                                    <td className="border p-4">Basic apps with limited customization</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
                        <p>Note: Actual costs vary based on app complexity, features, and requirements. Contact us for a personalized quote.</p>
                    </div>
                </section>

                {/* Our Process Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Our App Development Process</h2>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900 -ml-0.5"></div>

                        {/* Timeline items */}
                        <div className="space-y-12">
                            <div className="relative flex flex-col md:flex-row items-center md:items-start">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white z-10 md:absolute md:left-1/2 md:-ml-4">1</div>
                                <div className="md:w-1/2 md:pr-8 md:text-right pt-4 md:pt-0 md:mr-4">
                                    <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
                                    <p className="text-gray-600 dark:text-gray-400">We learn about your business goals, target users, and desired features to create a detailed project plan and budget.</p>
                                </div>
                                <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                            </div>

                            <div className="relative flex flex-col md:flex-row items-center md:items-start">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white z-10 md:absolute md:left-1/2 md:-ml-4">2</div>
                                <div className="hidden md:block md:w-1/2 md:pr-8"></div>
                                <div className="md:w-1/2 md:pl-8 pt-4 md:pt-0 md:ml-4">
                                    <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Our designers create intuitive, platform-specific interfaces that look and feel native while maintaining your brand identity.</p>
                                </div>
                            </div>

                            <div className="relative flex flex-col md:flex-row items-center md:items-start">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white z-10 md:absolute md:left-1/2 md:-ml-4">3</div>
                                <div className="md:w-1/2 md:pr-8 md:text-right pt-4 md:pt-0 md:mr-4">
                                    <h3 className="text-xl font-semibold mb-2">Development</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Our cross-platform experts build your app using React Native, Flutter, or .NET MAUI, focusing on performance and user experience.</p>
                                </div>
                                <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                            </div>

                            <div className="relative flex flex-col md:flex-row items-center md:items-start">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white z-10 md:absolute md:left-1/2 md:-ml-4">4</div>
                                <div className="hidden md:block md:w-1/2 md:pr-8"></div>
                                <div className="md:w-1/2 md:pl-8 pt-4 md:pt-0 md:ml-4">
                                    <h3 className="text-xl font-semibold mb-2">Testing & Quality Assurance</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Rigorous testing across all target platforms ensures your app works flawlessly for all users, regardless of device.</p>
                                </div>
                            </div>

                            <div className="relative flex flex-col md:flex-row items-center md:items-start">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white z-10 md:absolute md:left-1/2 md:-ml-4">5</div>
                                <div className="md:w-1/2 md:pr-8 md:text-right pt-4 md:pt-0 md:mr-4">
                                    <h3 className="text-xl font-semibold mb-2">Launch & Deployment</h3>
                                    <p className="text-gray-600 dark:text-gray-400">We handle the submission process for all app stores and ensure a smooth launch across all platforms.</p>
                                </div>
                                <div className="hidden md:block md:w-1/2 md:pl-8"></div>
                            </div>

                            <div className="relative flex flex-col md:flex-row items-center md:items-start">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white z-10 md:absolute md:left-1/2 md:-ml-4">6</div>
                                <div className="hidden md:block md:w-1/2 md:pr-8"></div>
                                <div className="md:w-1/2 md:pl-8 pt-4 md:pt-0 md:ml-4">
                                    <h3 className="text-xl font-semibold mb-2">Ongoing Support & Maintenance</h3>
                                    <p className="text-gray-600 dark:text-gray-400">We provide continuous support, updates, and improvements to keep your app running smoothly and adapting to platform changes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Apps Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Types of Apps We Build</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Business & Enterprise Apps</h3>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                <li>CRM applications</li>
                                <li>Employee management</li>
                                <li>Inventory tracking</li>
                                <li>Field service automation</li>
                                <li>Business intelligence dashboards</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">E-commerce & Retail Apps</h3>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                <li>Online stores</li>
                                <li>Marketplace platforms</li>
                                <li>Food delivery services</li>
                                <li>Loyalty programs</li>
                                <li>Inventory management</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Social & Communication Apps</h3>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                <li>Social networks</li>
                                <li>Community platforms</li>
                                <li>Dating apps</li>
                                <li>Messaging apps</li>
                                <li>Group collaboration tools</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Health & Fitness Apps</h3>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                <li>Workout tracking</li>
                                <li>Telehealth platforms</li>
                                <li>Nutrition planning</li>
                                <li>Mental wellness</li>
                                <li>Healthcare management</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Education & eLearning</h3>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                <li>Virtual classrooms</li>
                                <li>Course management</li>
                                <li>Learning games</li>
                                <li>Language learning</li>
                                <li>Professional training</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Travel & Hospitality</h3>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                                <li>Booking platforms</li>
                                <li>Travel guides</li>
                                <li>Hotel management</li>
                                <li>Tour booking</li>
                                <li>Restaurant reservation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">How much can I save with cross-platform development?</h3>
                            <p className="text-gray-600 dark:text-gray-400">Most clients save 40-60% compared to developing native apps for each platform separately. For example, a project that might cost $150,000 for three native apps (iOS, Android, Windows) typically costs $60,000-$90,000 with our cross-platform approach.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Will my cross-platform app look and perform like a native app?</h3>
                            <p className="text-gray-600 dark:text-gray-400">Yes! Modern cross-platform frameworks like React Native and Flutter deliver near-native performance and fully native UI components. Most users cannot tell the difference between our cross-platform apps and fully native ones.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">How long does it take to build a cross-platform app?</h3>
                            <p className="text-gray-600 dark:text-gray-400">Typical development timelines range from 3-6 months depending on complexity. Because we're building for all platforms simultaneously, you'll launch everywhere at once, rather than staggering releases.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Can I add new features after the initial launch?</h3>
                            <p className="text-gray-600 dark:text-gray-400">Absolutely! We design all our apps with scalability in mind. New features can be added across all platforms simultaneously, maintaining the cost benefits of the cross-platform approach.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Are there any apps that shouldn't use cross-platform development?</h3>
                            <p className="text-gray-600 dark:text-gray-400">While cross-platform works beautifully for 90% of apps, some specialized applications may benefit from native development. These include graphically intensive games, apps requiring deep hardware integration, or specialized enterprise applications with platform-specific requirements.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-blue-600 text-white p-12 rounded-lg text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Build Your Cross-Platform App?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">Get your app on iOS, Android and Windows for less than you'd pay for a single platform. Contact us today for a free consultation and quote.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-100 py-3 px-8 rounded-full font-semibold transition duration-300">
                            Get Started
                        </Link>
                        <a href="tel:+917510060787" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 py-3 px-8 rounded-full font-semibold transition duration-300">
                            Call Us: +91 7510060787
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
} 