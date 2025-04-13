"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiLayout, FiServer, FiCloud, FiSettings, FiUsers, FiCode, FiShoppingBag, FiTrendingUp, FiDatabase, FiShield } from 'react-icons/fi';

export default function ServicesPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    // Featured services (same as homepage)
    const featuredServices = [
        {
            icon: <FiMonitor className="text-emerald-400 text-3xl mb-4" />,
            title: 'Web Development',
            description: 'Responsive, engaging, and scalable websites built with modern technologies that drive business growth.',
            link: '/services/web-development',
        },
        {
            icon: <FiSmartphone className="text-emerald-400 text-3xl mb-4" />,
            title: 'Android App Development',
            description: 'Custom Android solutions tailored to your business needs with intuitive interfaces.',
            link: '/services/mobile-apps/android',
        },
        {
            icon: <FiSmartphone className="text-emerald-400 text-3xl mb-4" />,
            title: 'iOS App Development',
            description: 'Sleek iOS applications designed for optimal performance and user experience.',
            link: '/services/mobile-apps/ios',
        },
        {
            icon: <FiServer className="text-emerald-400 text-3xl mb-4" />,
            title: 'Backend Services',
            description: 'Secure and scalable backend management systems that handle complex business logic.',
            link: '/services/backend',
        },
        {
            icon: <FiTrendingUp className="text-emerald-400 text-3xl mb-4" />,
            title: 'SEO & Digital Marketing',
            description: 'Boost visibility, drive traffic, and increase conversions with effective digital strategies.',
            link: '/services/digital-marketing',
        },
        {
            icon: <FiCloud className="text-emerald-400 text-3xl mb-4" />,
            title: 'Cloud Integration',
            description: 'Leverage cloud technology for flexibility, scalability, and enhanced efficiency.',
            link: '/services/cloud',
        }
    ];

    // Additional services
    const additionalServices = [
        {
            icon: <FiUsers className="text-emerald-400 text-3xl mb-4" />,
            title: 'UI/UX Design',
            description: 'User-centered, intuitive, and attractive designs that enhance user experience and satisfaction.',
            link: '/services/ui-ux-design',
        },
        {
            icon: <FiCode className="text-emerald-400 text-3xl mb-4" />,
            title: 'Custom Software',
            description: 'Tailored software solutions designed to address your unique business challenges.',
            link: '/services/custom-software',
        },
        {
            icon: <FiSettings className="text-emerald-400 text-3xl mb-4" />,
            title: 'DevOps & Automation',
            description: 'Streamlined development and deployment processes that increase productivity.',
            link: '/services/devops',
        },
        {
            icon: <FiShoppingBag className="text-emerald-400 text-3xl mb-4" />,
            title: 'E-commerce Solutions',
            description: 'Launch, manage, and grow your online store with powerful e-commerce platforms.',
            link: '/services/ecommerce',
        },
        {
            icon: <FiDatabase className="text-emerald-400 text-3xl mb-4" />,
            title: 'Data Analytics',
            description: 'Transform data into actionable insights for smarter business decisions.',
            link: '/services/data-analytics',
        },
        {
            icon: <FiShield className="text-emerald-400 text-3xl mb-4" />,
            title: 'Security Audits',
            description: 'Comprehensive security assessments to identify and address vulnerabilities.',
            link: '/services/security-audits',
        }
    ];

    // Combine both service lists
    const allServices = [...featuredServices, ...additionalServices];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <main className="min-h-screen pt-28 pb-16 bg-dark-900">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-4 text-white">Our Services</h1>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
                    We provide comprehensive digital solutions to help businesses transform, innovate, and grow in today&apos;s competitive marketplace.
                    Explore our services below to find the right match for your needs.
                </p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                >
                    {allServices.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-dark-800 hover:bg-dark-700 rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-lg border border-emerald-900/20"
                            variants={itemVariants}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)"
                            }}
                        >
                            <div className="flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white text-center">{service.title}</h3>
                            <p className="text-gray-400 mb-4 text-center">{service.description}</p>
                            <div className="text-center">
                                <Link
                                    href={service.link}
                                    className="text-emerald-400 font-medium hover:underline inline-flex items-center"
                                >
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-20">
                    <div className="bg-dark-800 rounded-xl p-8 lg:p-12 border border-emerald-900/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Digital Presence?</h2>
                                <p className="text-gray-300 mb-6">
                                    Whatever your digital needs may be, our team of experts is ready to help you bring your vision to life.
                                    Let&apos;s discuss how we can help your business grow with our tailored solutions.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-900/30 font-medium"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-full max-w-md h-64 bg-cover bg-center rounded-lg shadow-lg"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 