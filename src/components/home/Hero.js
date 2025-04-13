"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle, FiUsers, FiClock, FiAward } from 'react-icons/fi';
import { useEffect, useState, useMemo } from 'react';
import SectionReveal from '../common/SectionReveal';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hasMounted, setHasMounted] = useState(false);

    // Generate stable particle positions using useMemo with a fixed seed
    const particles = useMemo(() => {
        // Use fixed seed values to avoid hydration mismatches
        return Array(8).fill().map((_, i) => ({
            id: i,
            width: 5 + (i * 1.2),
            height: 5 + ((i + 2) * 0.8),
            top: 10 + (i * 12),
            left: 5 + (i * 11),
            animX: -25 + (i * 10),
            animY: -25 + (i * 10),
            duration: 10 + (i * 2)
        }));
    }, []);

    useEffect(() => {
        setHasMounted(true);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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

    const stats = [
        {
            icon: <FiCheckCircle className="text-emerald-400 text-2xl mb-2" />,
            count: "100+",
            label: "Projects Completed"
        },
        {
            icon: <FiUsers className="text-emerald-400 text-2xl mb-2" />,
            count: "50+",
            label: "Happy Clients"
        },
        {
            icon: <FiClock className="text-emerald-400 text-2xl mb-2" />,
            count: "5+",
            label: "Years Experience"
        },
        {
            icon: <FiAward className="text-emerald-400 text-2xl mb-2" />,
            count: "20+",
            label: "Awards Won"
        }
    ];

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-dark-900" id="hero">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                {/* Fixed gradient background instead of animated one to prevent flickering */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-900/20 via-transparent to-transparent"></div>
                <div
                    className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl will-change-transform"
                    style={{
                        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                ></div>
                <div
                    className="absolute top-40 -left-20 w-80 h-80 bg-emerald-700/20 rounded-full blur-3xl will-change-transform"
                    style={{
                        transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                ></div>

                {/* Animated particles with stable server-side rendering */}
                {hasMounted && particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-emerald-500 rounded-full opacity-20"
                        style={{
                            width: `${particle.width}px`,
                            height: `${particle.height}px`,
                            top: `${particle.top}%`,
                            left: `${particle.left}%`,
                            willChange: 'transform, opacity'
                        }}
                        animate={{
                            y: [0, particle.animY],
                            x: [0, particle.animX],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="flex flex-col lg:flex-row items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Hero Text */}
                    <SectionReveal
                        className="w-full lg:w-1/2 lg:pr-12"
                        direction="left"
                        duration={0.7}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <div className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 will-change-transform">
                                Your Partner in
                            </div>
                            <div className="block mt-2 text-white">
                                <span className="text-emerald-400">Scalable</span> App Development
                            </div>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-xl">
                            At UFDev.LLC, we specialize in providing high-quality digital solutions at affordable prices. Whether you're looking for custom mobile apps or web services, we've got you covered.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/contact"
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center justify-center font-medium shadow-lg shadow-emerald-900/30"
                                >
                                    Get Started
                                    <FiArrowRight className="ml-2" />
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/services"
                                    className="bg-dark-800 border border-emerald-800/40 text-gray-300 px-8 py-3 rounded-lg hover:bg-dark-700 hover:border-emerald-700/60 transition-all duration-300 inline-flex items-center justify-center font-medium shadow-lg shadow-emerald-900/10"
                                >
                                    Our Services
                                </Link>
                            </motion.div>
                        </div>
                    </SectionReveal>

                    {/* Hero Image */}
                    <SectionReveal
                        className="w-full lg:w-1/2 mt-10 lg:mt-0"
                        direction="right"
                        duration={0.7}
                        delay={0.2}
                    >
                        <motion.div
                            className="relative"
                            animate={{
                                y: [0, 10, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-emerald-900/30 blur-xl rounded-full"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg mix-blend-overlay"></div>
                            <img
                                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Digital Development Services"
                                className="w-full h-auto rounded-lg shadow-xl border border-emerald-900/20"
                            />
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-dark-800/90 backdrop-blur p-4 rounded-lg shadow-lg">
                                <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 w-full h-full rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-emerald-400 font-bold text-xl">100+</div>
                                        <div className="text-gray-300 text-sm">Projects</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </SectionReveal>
                </motion.div>

                {/* Stats Section */}
                <div className="mt-16">
                    <SectionReveal
                        duration={0.8}
                        delay={0.4}
                        direction="up"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-dark-800/80 backdrop-blur p-6 rounded-xl shadow-lg hover:shadow-emerald-900/20 hover:bg-dark-700 transition-all duration-300 text-center border border-emerald-900/20"
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)"
                                    }}
                                >
                                    <div className="flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">{stat.count}</h3>
                                    <p className="text-gray-400">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
};

export default Hero; 