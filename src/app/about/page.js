"use client";

import { useEffect } from 'react';
import { FaCode, FaMobile, FaLaptopCode, FaUsers, FaChartLine, FaAward, FaRobot, FaMoneyBillWave } from 'react-icons/fa';
import Link from 'next/link';
import SectionReveal from '../../components/common/SectionReveal';

export default function AboutPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen pt-28 pb-16 bg-dark-900 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <SectionReveal
                        direction="up"
                        duration={0.7}
                    >
                        <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">About UFDevs</h1>
                    </SectionReveal>

                    <SectionReveal
                        direction="up"
                        duration={0.7}
                        delay={0.1}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-white">Our Story</h2>
                        <div className="bg-dark-800 p-6 rounded-xl shadow-md">
                            <p className="text-gray-300 mb-4">
                                UFDevs (Unfiltered Developers) represents a premium development agency focused on delivering high-quality web and mobile solutions without compromise. Our name reflects our approach: unfiltered excellence in every aspect of development.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Led by <Link href="/about/ramesh-vishwakarma-iit-patna" className="text-emerald-400 hover:underline">Ramesh Vishwakarma</Link>, a core developer and tech head from IIT Patna, our team manages all aspects of development with meticulous attention to detail. While our founder and primary investor remains undisclosed, our technical expertise speaks through our portfolio of successful projects.
                            </p>
                            <p className="text-gray-300">
                                With a current market valuation of ₹5 Crore (approximately $600,000 USD), UFDevs has established itself as a rising force in the premium development space. Our growth trajectory continues to accelerate as we expand our services to include cutting-edge technologies like GenAI integration, enterprise-level applications, and custom development solutions.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal
                        direction="up"
                        duration={0.7}
                        delay={0.2}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-white">Company Metrics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-dark-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg hover:bg-dark-700 transition-all">
                                <h3 className="text-xl font-semibold mb-2 text-white">Valuation</h3>
                                <p className="text-3xl font-bold text-emerald-400">₹5 Crore</p>
                                <p className="text-gray-400 mt-2">($600,000 USD)</p>
                            </div>
                            <div className="bg-dark-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg hover:bg-dark-700 transition-all">
                                <h3 className="text-xl font-semibold mb-2 text-white">Projects Completed</h3>
                                <p className="text-3xl font-bold text-emerald-400">25+</p>
                                <p className="text-gray-400 mt-2">Across various industries</p>
                            </div>
                            <div className="bg-dark-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg hover:bg-dark-700 transition-all">
                                <h3 className="text-xl font-semibold mb-2 text-white">Client Satisfaction</h3>
                                <p className="text-3xl font-bold text-emerald-400">98%</p>
                                <p className="text-gray-400 mt-2">Based on client feedback</p>
                            </div>
                        </div>
                    </SectionReveal>

                    <SectionReveal
                        direction="up"
                        duration={0.7}
                        delay={0.3}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-white">Our Mission</h2>
                        <div className="border-l-4 border-emerald-500 pl-6 py-2">
                            <p className="text-xl italic text-gray-300">
                                "To deliver uncompromising technical excellence through innovative solutions that transform businesses and create exceptional digital experiences."
                            </p>
                        </div>
                        <p className="text-gray-300 mt-6">
                            At UFDevs, we believe in providing premium development services that truly reflect the value they bring to businesses. Our pricing starts at ₹30,000 for basic projects, with no upper limit for enterprise-grade solutions, especially those incorporating advanced technologies like GenAI APIs.
                        </p>
                    </SectionReveal>

                    <SectionReveal
                        direction="up"
                        duration={0.7}
                        delay={0.4}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-semibold mb-8 text-white">Core Services</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-dark-800 p-6 rounded-xl shadow-md transition-transform hover:scale-105 hover:bg-dark-700">
                                <div className="flex items-center mb-4">
                                    <FaCode className="text-emerald-400 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-white">Web Development</h3>
                                </div>
                                <p className="text-gray-300">Custom websites, web applications, and e-commerce solutions built with React, Next.js, and other modern technologies. Pricing starts at ₹30,000.</p>
                            </div>

                            <div className="bg-dark-800 p-6 rounded-xl shadow-md transition-transform hover:scale-105 hover:bg-dark-700">
                                <div className="flex items-center mb-4">
                                    <FaMobile className="text-emerald-400 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-white">Mobile App Development</h3>
                                </div>
                                <p className="text-gray-300">Cross-platform mobile applications using React Native and Flutter, delivering native-like experiences on both iOS and Android platforms.</p>
                            </div>

                            <div className="bg-dark-800 p-6 rounded-xl shadow-md transition-transform hover:scale-105 hover:bg-dark-700">
                                <div className="flex items-center mb-4">
                                    <FaRobot className="text-emerald-400 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-white">GenAI Integration</h3>
                                </div>
                                <p className="text-gray-300">Advanced AI integration services using the latest language models and AI APIs to create intelligent, responsive applications with enhanced capabilities.</p>
                            </div>

                            <div className="bg-dark-800 p-6 rounded-xl shadow-md transition-transform hover:scale-105 hover:bg-dark-700">
                                <div className="flex items-center mb-4">
                                    <FaLaptopCode className="text-emerald-400 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-white">Full-Stack Development</h3>
                                </div>
                                <p className="text-gray-300">End-to-end solutions using Node.js, Express, MongoDB, and various backend technologies to power robust, scalable applications.</p>
                            </div>
                        </div>
                    </SectionReveal>

                    <SectionReveal
                        direction="up"
                        duration={0.7}
                        delay={0.5}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-white">Our Pricing Philosophy</h2>
                        <div className="bg-dark-800 p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <FaMoneyBillWave className="text-emerald-400 text-2xl mr-3" />
                                <h3 className="text-xl font-semibold text-white">Value-Based Pricing</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Our pricing reflects the true value our solutions bring to your business. Basic projects start at ₹30,000, while more complex implementations with advanced features are priced according to their scope and complexity.
                            </p>
                            <p className="text-gray-300 mb-4">
                                For enterprise solutions and applications requiring GenAI integration, we provide custom quotes based on specific requirements. Our projects have ranged from ₹30,000 to ₹8 Lakh+, depending on complexity and features required.
                            </p>
                            <p className="text-gray-300">
                                We believe in transparent pricing with no hidden costs. Each project is evaluated individually to ensure you receive the most value for your investment.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal
                        direction="up"
                        duration={0.7}
                        delay={0.6}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-white">Technology Stack</h2>
                        <p className="text-gray-300 mb-6">
                            At UFDevs, we work with any technology required to meet your project's needs. Our expertise spans across:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-dark-800 p-4 rounded-lg text-center hover:bg-dark-700 transition-all">
                                <span className="font-semibold text-gray-300">React.js</span>
                            </div>
                            <div className="bg-dark-800 p-4 rounded-lg text-center hover:bg-dark-700 transition-all">
                                <span className="font-semibold text-gray-300">Next.js</span>
                            </div>
                            <div className="bg-dark-800 p-4 rounded-lg text-center hover:bg-dark-700 transition-all">
                                <span className="font-semibold text-gray-300">Node.js</span>
                            </div>
                            <div className="bg-dark-800 p-4 rounded-lg text-center hover:bg-dark-700 transition-all">
                                <span className="font-semibold text-gray-300">MongoDB</span>
                            </div>
                            <div className="bg-dark-800 p-4 rounded-lg text-center hover:bg-dark-700 transition-all">
                                <span className="font-semibold text-gray-300">Flutter</span>
                            </div>
                            <div className="bg-dark-800 p-4 rounded-lg text-center hover:bg-dark-700 transition-all">
                                <span className="font-semibold text-gray-300">React Native</span>
                            </div>
                            <div className="bg-dark-800 p-4 rounded-lg text-center hover:bg-dark-700 transition-all">
                                <span className="font-semibold text-gray-300">GenAI APIs</span>
                            </div>
                            <div className="bg-dark-800 p-4 rounded-lg text-center hover:bg-dark-700 transition-all">
                                <span className="font-semibold text-gray-300">AWS</span>
                            </div>
                        </div>
                        <p className="text-gray-300">
                            Our versatility allows us to adapt to your specific requirements, whether you need a particular framework, language, or integration with third-party services.
                        </p>
                    </SectionReveal>

                    <SectionReveal
                        direction="up"
                        duration={0.7}
                        delay={0.7}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-white">Why Choose UFDevs</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-dark-800 rounded-xl hover:bg-dark-700 transition-all">
                                <FaUsers className="text-4xl text-emerald-400 mx-auto mb-3" />
                                <h3 className="text-xl font-semibold mb-2 text-white">Technical Excellence</h3>
                                <p className="text-gray-300">Led by IIT Patna talent with proven expertise in cutting-edge development technologies.</p>
                            </div>
                            <div className="text-center p-4 bg-dark-800 rounded-xl hover:bg-dark-700 transition-all">
                                <FaLaptopCode className="text-4xl text-emerald-400 mx-auto mb-3" />
                                <h3 className="text-xl font-semibold mb-2 text-white">Technology Versatility</h3>
                                <p className="text-gray-300">We work with any technology stack required to meet your specific project needs.</p>
                            </div>
                            <div className="text-center p-4 bg-dark-800 rounded-xl hover:bg-dark-700 transition-all">
                                <FaAward className="text-4xl text-emerald-400 mx-auto mb-3" />
                                <h3 className="text-xl font-semibold mb-2 text-white">Premium Quality</h3>
                                <p className="text-gray-300">Uncompromising attention to detail and quality in every aspect of development.</p>
                            </div>
                        </div>
                    </SectionReveal>

                    <SectionReveal
                        direction="up"
                        duration={0.7}
                        delay={0.8}
                    >
                        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-8 rounded-xl text-center">
                            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Digital Presence?</h2>
                            <p className="text-xl mb-6 text-gray-300">
                                Let's discuss how UFDevs can help you achieve your technology goals with premium development solutions.
                            </p>
                            <Link href="/contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center justify-center font-medium shadow-lg shadow-emerald-900/20">
                                Contact Us Today
                            </Link>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </main>
    );
} 