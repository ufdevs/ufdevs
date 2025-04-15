"use client";

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import SectionReveal from '../common/SectionReveal';

const Projects = () => {
    const projects = [
        {
            title: "iMaxx TV OTT Platform",
            description: "Next-generation Global OTT platform with AVOD, SVOD & TVOD models for content creators and audiences.",
            image: "/imaxxtv.png",
            tags: ["React", "Node.js", "Firebase", "AWS"],
            demoLink: "https://www.imaxxtvdigital.com/",
            repoLink: "#"
        },
        {
            title: "E-Commerce Platform",
            description: "A fully responsive e-commerce website with product catalog, cart functionality, and secure payment processing.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            demoLink: "#",
            repoLink: "#"
        },
        {
            title: "Food Delivery App",
            description: "Cross-platform mobile application for food ordering and delivery with real-time order tracking. Android , iOS and Web",
            image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1022&q=80",
            tags: ["Flutter", "Firebase", "Google Maps API"],
            demoLink: "#",
            repoLink: "#"
        },
        // {
        //     title: "Healthcare Management System",
        //     description: "Comprehensive platform for healthcare providers to manage patient records, appointments, and billing.",
        //     image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        //     tags: ["Angular", "Express.js", "PostgreSQL", "AWS"],
        //     demoLink: "#",
        //     repoLink: "#"
        // }
    ];

    return (
        <section className="py-16 bg-dark-800" id="portfolio">
            <div className="container mx-auto px-4">
                <SectionReveal
                    direction="up"
                    duration={0.6}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Our Portfolio</h2>
                        <p className="text-base text-gray-300 max-w-2xl mx-auto">
                            Explore our portfolio of successful projects delivered with excellence and client satisfaction.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                        alt={project.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
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
                                        >
                                            <FiExternalLink className="mr-1" /> Live Demo
                                        </a>
                                        <a
                                            href={project.repoLink}
                                            className="text-emerald-400 hover:text-emerald-300 flex items-center text-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
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
                    <Link
                        href="/portfolio"
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-900/30 inline-flex items-center justify-center font-medium"
                    >
                        View All Projects
                    </Link>
                </SectionReveal>
            </div>
        </section>
    );
};

export default Projects; 