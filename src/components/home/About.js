"use client";

import { motion } from 'framer-motion';
import { FiCheckCircle, FiCloud, FiClock, FiHeadphones } from 'react-icons/fi';
import Link from 'next/link';
import SectionReveal from '../common/SectionReveal';

const About = () => {
    const features = [
        {
            icon: <FiCloud className="text-emerald-400 text-2xl" />,
            title: 'PREMIUM SOLUTIONS',
            description: 'We deliver high-quality web and mobile applications with cutting-edge technologies including AI integration and cloud infrastructure.'
        },
        {
            icon: <FiClock className="text-emerald-400 text-2xl" />,
            title: 'FLEXIBLE PRICING',
            description: 'Starting from ₹30,000 for basic projects with custom pricing for advanced solutions. Projects range up to ₹8 Lakh+ for enterprise-grade applications.'
        },
        {
            icon: <FiCheckCircle className="text-emerald-400 text-2xl" />,
            title: 'TECH VERSATILITY',
            description: 'We work with any technology stack required for your project, from React and Next.js to Flutter, Node.js, and GenAI integrations.'
        },
        {
            icon: <FiHeadphones className="text-emerald-400 text-2xl" />,
            title: 'DEDICATED SUPPORT',
            description: 'Full-time technical support with maintenance packages to ensure your application runs smoothly after deployment.'
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
                                src="/ufdevsteam.jpeg"
                                alt="UFDevs Team - Unfiltered Developers"
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                            <div className="absolute -right-4 -bottom-4 bg-dark-800 rounded-lg shadow-lg p-4">
                                <div className="text-xl font-bold text-emerald-400">₹5 Crore</div>
                                <div className="text-gray-300 text-sm">Market Valuation</div>
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
                        <div className="mb-3 text-sm font-semibold text-emerald-400 uppercase tracking-wider">About UFDevs</div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Unfiltered Developers: Premium Solutions Without Limits</h2>
                        <p className="text-gray-300 mb-4 text-base">
                            UFDevs (Unfiltered Developers) delivers premium web and mobile development services with a focus on innovation and cutting-edge technology. Our projects start at ₹30,000 with some projects valued at ₹3 Lakh to ₹8 Lakh+, especially those integrating GenAI APIs and advanced features.
                        </p>
                        <p className="text-gray-300 mb-6 text-base">
                            Led by <Link href="/about/ramesh-vishwakarma-iit-patna" className="text-emerald-400 hover:underline">Ramesh Vishwakarma</Link>, a core developer and tech head from IIT Patna, we manage all services with uncompromising quality. With a market valuation of ₹5 Crore ($600,000 USD), our team's technical expertise speaks for itself through our portfolio of successful projects.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                <span className="text-gray-300 text-sm">GenAI Integration</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                <span className="text-gray-300 text-sm">Enterprise Solutions</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                <span className="text-gray-300 text-sm">Custom Development</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                <span className="text-gray-300 text-sm">Technical Excellence</span>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                href="/about"
                                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center justify-center font-medium shadow-lg shadow-emerald-900/20"
                            >
                                Learn More About Us
                            </Link>
                            <Link
                                href="/about/ramesh-vishwakarma-iit-patna"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center font-medium shadow-lg shadow-purple-900/20"
                            >
                                About Ramesh Vishwakarma
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

                {/* Company Metrics */}
                <SectionReveal
                    className="mt-16"
                    direction="up"
                    duration={0.7}
                    delay={0.4}
                    threshold={0.1}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            className="bg-dark-800 p-6 rounded-xl shadow-md text-center"
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)" }}
                        >
                            <h3 className="text-base font-semibold mb-2 text-white">Valuation</h3>
                            <p className="text-2xl font-bold text-emerald-400">₹5 Crore</p>
                            <p className="text-gray-400 text-sm mt-2">($600,000 USD)</p>
                        </motion.div>
                        <motion.div
                            className="bg-dark-800 p-6 rounded-xl shadow-md text-center"
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)" }}
                        >
                            <h3 className="text-base font-semibold mb-2 text-white">Projects Completed</h3>
                            <p className="text-2xl font-bold text-emerald-400">25+</p>
                            <p className="text-gray-400 text-sm mt-2">Across various industries</p>
                        </motion.div>
                        <motion.div
                            className="bg-dark-800 p-6 rounded-xl shadow-md text-center"
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)" }}
                        >
                            <h3 className="text-base font-semibold mb-2 text-white">Client Satisfaction</h3>
                            <p className="text-2xl font-bold text-emerald-400">98%</p>
                            <p className="text-gray-400 text-sm mt-2">Based on client feedback</p>
                        </motion.div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default About; 