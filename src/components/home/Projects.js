"use client";

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import SectionReveal from '../common/SectionReveal';

const Projects = () => {
    const projects = [
        {
            title: "iMaxx TV OTT Platform",
            description: "Next-generation Global OTT platform with AVOD, SVOD & TVOD models for content creators and audiences. Built with React.js, Node.js, and AWS infrastructure.",
            image: "/imaxxtv.png",
            tags: ["React.js", "Node.js", "AWS", "OTT Development"],
            demoLink: "https://www.imaxxtvdigital.com/",
            repoLink: "#",
            category: "Web Development"
        },
        {
            title: "E-Commerce Web Application",
            description: "A full-stack e-commerce platform with responsive design, product catalog, shopping cart, secure payment integration, and admin dashboard. Optimized for performance and SEO.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tags: ["React.js", "Node.js", "MongoDB", "Stripe API"],
            demoLink: "#",
            repoLink: "#",
            category: "Web Development"
        },
        {
            title: "Food Delivery Mobile App",
            description: "Cross-platform mobile application for food ordering and delivery with real-time tracking, payment processing, and push notifications. Available on Android, iOS, and Web.",
            image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1022&q=80",
            tags: ["Flutter", "Firebase", "Google Maps API", "Cross-platform"],
            demoLink: "#",
            repoLink: "#",
            category: "App Development"
        },
        {
            title: "Healthcare Management System",
            description: "Comprehensive web and mobile platform for healthcare providers to manage patient records, appointments, and billing. Features HIPAA-compliant data security and integration with medical devices.",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tags: ["Angular", "Express.js", "PostgreSQL", "AWS"],
            demoLink: "#",
            repoLink: "#",
            category: "Web & App Development"
        }
    ];

    return (
        <section className="py-16 bg-dark-800" id="portfolio">
            <div className="container mx-auto px-4">
                <SectionReveal
                    direction="up"
                    duration={0.6}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Web & App Development Portfolio</h2>
                        <p className="text-base text-gray-300 max-w-2xl mx-auto">
                            Explore our showcase of custom web applications and mobile apps built with cutting-edge technologies and best development practices.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <SectionReveal
                            key={index}
                            direction="up"
                            duration={0.5}
                            delay={index * 0.1}
                            threshold={0.2}
                        >
                            <motion.div
                                className="bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 15px 30px -10px rgba(16, 185, 129, 0.15)"
                                }}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} - ${project.category} by UFDev`}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
                                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between">
                                        <a
                                            href={project.demoLink}
                                            className="text-emerald-400 hover:text-emerald-300 flex items-center text-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View live demo of ${project.title}`}
                                        >
                                            <FiExternalLink className="mr-1" /> Live Demo
                                        </a>
                                        <a
                                            href={project.repoLink}
                                            className="text-emerald-400 hover:text-emerald-300 flex items-center text-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View source code of ${project.title}`}
                                        >
                                            <FiGithub className="mr-1" /> Source Code
                                        </a>
                                    </div>
                                </div>
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
                    <div className="bg-dark-700 p-6 rounded-xl mb-8">
                        <h3 className="text-xl font-bold text-white mb-4">Need a Custom Web or Mobile App?</h3>
                        <p className="text-gray-300 mb-4">
                            Our team specializes in building high-performance web applications and mobile apps for businesses of all sizes. From e-commerce to enterprise solutions, we deliver cutting-edge technology with exceptional user experience.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-900/30 inline-flex items-center justify-center font-medium mr-4"
                        >
                            Get a Free Quote
                        </Link>
                        <Link
                            href="/portfolio"
                            className="bg-transparent border border-emerald-500 text-emerald-400 px-6 py-2 rounded-lg hover:bg-emerald-900/20 transition-all duration-300 inline-flex items-center justify-center font-medium"
                        >
                            View All Projects
                        </Link>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default Projects; 