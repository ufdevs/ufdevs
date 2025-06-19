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
            title: "trishabose.in",
            description: "Personal portfolio and showcase website with modern design, responsive layout, and optimized performance.",
            image: "/trishain.png",
            tags: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
            demoLink: "https://trishabose.in",
            repoLink: "#",
            category: "Web Development"
        },
        {
            title: "PeekBI.com",
            description: "Business intelligence and analytics platform with interactive dashboards and data visualization tools.",
            image: "/peekbicom.png",
            tags: ["React.js", "D3.js", "Node.js", "Data Visualization"],
            demoLink: "https://peekbi.com",
            repoLink: "#",
            category: "Web Application"
        },
        {
            title: "BharatITS.com",
            description: "IT services and solutions provider website showcasing enterprise technology services and digital transformation expertise.",
            image: "/bitsin.png",
            tags: ["React.js", "Node.js", "Bootstrap", "Responsive Design"],
            demoLink: "https://bharatits.com",
            repoLink: "#",
            category: "Web Development"
        },
        {
            title: "School Management System",
            description: "Comprehensive school management platform for administrative tasks, student records, and academic performance tracking.",
            image: "/school.png",
            tags: ["React.js", "MongoDB", "Express", "Node.js"],
            demoLink: "https://school-management-weld-zeta.vercel.app/",
            repoLink: "#",
            category: "Web Application"
        },
        {
            title: "Sofico Financial Services",
            description: "Financial services platform with account management, transaction tracking, and financial reporting tools.",
            image: "/sofico.png",
            tags: ["Next.js", "Tailwind CSS", "API Integration", "Responsive Design"],
            demoLink: "https://sofico.ufdevs.me",
            repoLink: "#",
            category: "Web Development"
        },
        {
            title: "EmpowerHR Services",
            description: "HR management platform with employee records, performance tracking, and recruitment workflow automation.",
            image: "/empowerhr.png",
            tags: ["React.js", "Node.js", "MongoDB", "Dashboard"],
            demoLink: "https://servs.ufdevs.me",
            repoLink: "#",
            category: "Web Application"
        }
    ];

    // Only display the first 4 projects on the home page
    const displayedProjects = projects.slice(0, 4);

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
                    {displayedProjects.map((project, index) => (
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