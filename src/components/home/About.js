"use client";

import { motion } from 'framer-motion';
import { FiCheckCircle, FiCloud, FiClock, FiHeadphones } from 'react-icons/fi';
import Link from 'next/link';
import SectionReveal from '../common/SectionReveal';

const About = () => {
    const features = [
        {
            icon: <FiCloud className="text-emerald-400 text-2xl" />,
            title: 'CLOUD BASED APP',
            description: 'SaaS-based solution hosted on secure cloud, accessible from anywhere anytime. Secured through multiple firewalls from top cloud provider.'
        },
        {
            icon: <FiClock className="text-emerald-400 text-2xl" />,
            title: '24X7 AVAILABILITY',
            description: 'Solution is highly available across the globe over the internet with proven connectivity backbone.'
        },
        {
            icon: <FiCheckCircle className="text-emerald-400 text-2xl" />,
            title: 'INSTANT SETUP',
            description: 'Start using your LMS Solution in just 3 Hours. Learn app usage in just 1 day and become an expert.'
        },
        {
            icon: <FiHeadphones className="text-emerald-400 text-2xl" />,
            title: 'TECH SUPPORT',
            description: 'Full-time tech support available via phone, email, remote access, and video conferencing.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
        <section className="py-16 bg-dark-900" id="about">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    {/* Left Column - Image */}
                    <SectionReveal
                        className="w-full lg:w-1/2"
                        direction="left"
                        duration={0.7}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-700/20 rounded-lg transform translate-x-3 translate-y-3 -z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Ramesh Vishwakarma - Founder"
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                            <div className="absolute -right-4 -bottom-4 bg-dark-800 rounded-lg shadow-lg p-4">
                                <div className="text-xl font-bold text-emerald-400">5+ Years</div>
                                <div className="text-gray-300 text-sm">of Experience</div>
                            </div>
                        </div>
                    </SectionReveal>

                    {/* Right Column - Text */}
                    <SectionReveal
                        className="w-full lg:w-1/2"
                        direction="right"
                        duration={0.7}
                        delay={0.1}
                    >
                        <div className="mb-3 text-sm font-semibold text-emerald-400 uppercase tracking-wider">About UFDev.LLC</div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Driven by Innovation, Built by Experts</h2>
                        <p className="text-gray-300 mb-4 text-base">
                            Founded by IIT Patna alumni, Unfiltered 😏 Developers (UFDev.LLC) brings cutting-edge digital solutions to your doorstep. I am Ramesh Vishwakarma, a passionate full-stack app developer, and we are here to help transform your offline business into an online powerhouse.
                        </p>
                        <p className="text-gray-300 mb-6 text-base">
                            Our focus is on providing scalable, affordable, and efficient services that cater to your unique needs. From custom apps to backend management, we're committed to providing the best digital experiences.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                <span className="text-gray-300 text-sm">Innovative Solutions</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                <span className="text-gray-300 text-sm">Scalable Architecture</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                <span className="text-gray-300 text-sm">Affordable Pricing</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                <span className="text-gray-300 text-sm">Timely Delivery</span>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/about"
                                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center justify-center font-medium shadow-lg shadow-emerald-900/20"
                            >
                                Learn More About Us
                            </Link>
                        </motion.div>
                    </SectionReveal>
                </div>

                {/* Feature Cards */}
                <SectionReveal
                    className="mt-16"
                    direction="up"
                    duration={0.7}
                    delay={0.3}
                    threshold={0.1}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-dark-800 p-5 rounded-xl shadow-md hover:shadow-lg hover:bg-dark-700 transition-all"
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)" }}
                            >
                                <div className="mb-3">
                                    {feature.icon}
                                </div>
                                <h3 className="text-base font-semibold mb-2 text-white">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default About; 