"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import SectionReveal from '../../components/common/SectionReveal';

export default function PortfolioPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            title: 'iMaxx TV OTT Platform',
            category: 'Web & Mobile App Development',
            description: 'A next-generation Global OTT platform with AVOD, SVOD & TVOD models. Built for content creators and audiences with seamless streaming across all devices. Features include user profiles, parental controls, and offline viewing.',
            technologies: ['React', 'Node.js', 'Firebase', 'AWS', 'Payment Gateway Integration'],
            image: '/imaxxtv.png',
            link: 'https://www.imaxxtvdigital.com/',
            value: '₹8 Lakh+'
        },
        {
            title: 'trishabose.in',
            category: 'Web Development',
            description: 'Personal portfolio and showcase website featuring a modern design, responsive layout, and optimized performance. Created with a focus on user experience and clean aesthetics.',
            technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
            image: '/trishain.png',
            link: 'https://trishabose.in',
            value: '₹1.5 Lakh+'
        },
        {
            title: 'PeekBI.com',
            category: 'Web Application',
            description: 'Business intelligence and analytics platform with interactive dashboards and data visualization tools. Enables companies to transform raw data into actionable insights through customizable reports.',
            technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Data Visualization'],
            image: '/peekbicom.png',
            link: 'https://peekbi.com',
            value: '₹3 Lakh+'
        },
        {
            title: 'BharatITS.com',
            category: 'Web Development',
            description: 'IT services and solutions provider website showcasing enterprise technology services and digital transformation expertise. Features service portfolio, case studies, and client testimonials.',
            technologies: ['React', 'Node.js', 'Bootstrap', 'Express', 'Responsive Design'],
            image: '/bitsin.png',
            link: 'https://bharatits.com',
            value: '₹2 Lakh+'
        },
        {
            title: 'School Management System',
            category: 'Web Application',
            description: 'Comprehensive school management platform for administrative tasks, student records, and academic performance tracking. Features include attendance management, grade reporting, and parent communication tools.',
            technologies: ['React', 'MongoDB', 'Express', 'Node.js', 'JWT Authentication'],
            image: '/school.png',
            link: 'https://school-management-weld-zeta.vercel.app/',
            value: '₹2.5 Lakh+'
        },
        {
            title: 'Sofico Financial Services',
            category: 'Web Development',
            description: 'Financial services platform with account management, transaction tracking, and financial reporting tools. Provides users with intuitive dashboards for monitoring financial performance and investment opportunities.',
            technologies: ['Next.js', 'Tailwind CSS', 'API Integration', 'Charts.js', 'Responsive Design'],
            image: '/sofico.png',
            link: 'https://sofico.ufdevs.me',
            value: '₹1.8 Lakh+'
        },
        {
            title: 'EmpowerHR Services',
            category: 'Web Application',
            description: 'HR management platform with employee records, performance tracking, and recruitment workflow automation. Streamlines HR processes and provides analytics for workforce management and planning.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Dashboard'],
            image: '/empowerhr.png',
            link: 'https://servs.ufdevs.me',
            value: '₹3 Lakh+'
        }
    ];

    return (
        <main className="min-h-screen pt-28 pb-16 bg-dark-900 text-white">
            <div className="container mx-auto px-4">
                <SectionReveal
                    direction="up"
                    duration={0.7}
                >
                    <h1 className="text-4xl font-bold text-center mb-4 text-white">Our Portfolio</h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
                        Explore our past projects and see how we&apos;ve helped businesses transform their digital presence
                        and achieve their goals through innovative solutions.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <SectionReveal
                            key={index}
                            direction="up"
                            duration={0.5}
                            delay={index * 0.1}
                            threshold={0.1}
                        >
                            <div className="bg-dark-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:bg-dark-700">
                                <div
                                    className="h-48 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                >
                                    <div className="h-full w-full bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="text-sm text-emerald-400 mb-2">{project.category}</div>
                                        <span className="bg-emerald-900/30 text-emerald-400 text-xs px-2 py-1 rounded">
                                            {project.value}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-semibold mb-3 text-white">{project.title}</h2>
                                    <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-emerald-900/30 text-emerald-400 text-xs px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium"
                                    >
                                        View Project <FiExternalLink className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

                <SectionReveal
                    direction="up"
                    duration={0.7}
                    delay={0.5}
                    className="text-center mt-12"
                >
                    <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-8 rounded-xl">
                        <p className="text-lg mb-4 text-white">Looking for a custom solution for your business?</p>
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center justify-center font-medium shadow-lg shadow-emerald-900/20"
                        >
                            Discuss your project <FiArrowRight className="ml-2" />
                        </Link>
                    </div>
                </SectionReveal>
            </div>
        </main>
    );
} 