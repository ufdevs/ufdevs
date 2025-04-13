"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMonitor, FiSmartphone, FiUsers, FiServer, FiCloud, FiCode, FiSettings, FiShoppingBag, FiTrendingUp, FiDatabase, FiShield, FiLayers } from 'react-icons/fi';
import SectionReveal from '../common/SectionReveal';

const Services = () => {
    // Main featured services to display on homepage
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

    // We no longer need to manage "showAll" state or additionalServices since we'll navigate to Services page

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

    const getCardBgClass = (color) => {
        return 'bg-dark-800 hover:bg-dark-700';
    };

    const getTextColorClass = (color) => {
        return 'text-emerald-400';
    };

    return (
        <section className="py-16 bg-dark-900" id="services">
            <div className="container mx-auto px-4">
                <SectionReveal
                    direction="up"
                    duration={0.6}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
                        <p className="text-base text-gray-300 max-w-2xl mx-auto">
                            We provide comprehensive digital solutions to help businesses transform, innovate, and grow in today's competitive marketplace.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredServices.map((service, index) => (
                        <SectionReveal
                            key={index}
                            direction="up"
                            duration={0.5}
                            delay={index * 0.1}
                        >
                            <motion.div
                                className={`rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-lg bg-dark-800 hover:bg-dark-700 border border-emerald-900/20`}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 15px 30px -10px rgba(16, 185, 129, 0.15)"
                                }}
                            >
                                <div className="mb-2">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 mb-4">{service.description}</p>
                                <Link
                                    href={service.link}
                                    className={`text-emerald-400 font-medium hover:underline inline-flex items-center`}
                                >
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </SectionReveal>
                    ))}
                </div>

                <SectionReveal
                    className="text-center mt-12"
                    direction="up"
                    duration={0.5}
                    delay={0.6}
                >
                    <Link
                        href="/services"
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-900/30 inline-flex items-center justify-center font-medium"
                    >
                        View All Services
                        <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </SectionReveal>
            </div>
        </section>
    );
};

export default Services; 