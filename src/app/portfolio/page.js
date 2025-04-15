"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';

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
            link: 'https://www.imaxxtvdigital.com/'
        },
        {
            title: 'E-Commerce Platform',
            category: 'Web Development',
            description: 'A full-featured e-commerce solution with payment integration, inventory management, and an intuitive admin panel.',
            technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://via.placeholder.com/600x400',
            link: '#'
        },
        {
            title: 'Healthcare Mobile App',
            category: 'Mobile App Development',
            description: 'A patient management app that allows users to schedule appointments, view medical records, and communicate with healthcare providers.',
            technologies: ['React Native', 'Firebase', 'Redux', 'Express'],
            image: 'https://via.placeholder.com/600x400',
            link: '#'
        },
        {
            title: 'Travel Booking Platform',
            category: 'Web Development',
            description: 'A comprehensive travel booking system with hotel reservations, flight bookings, and tour packages.',
            technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
            image: 'https://via.placeholder.com/600x400',
            link: '#'
        },
        {
            title: 'Financial Dashboard',
            category: 'UI/UX Design',
            description: 'An intuitive financial dashboard that visualizes complex data and provides insights for investment decisions.',
            technologies: ['Figma', 'D3.js', 'React', 'TypeScript'],
            image: 'https://via.placeholder.com/600x400',
            link: '#'
        },
        {
            title: 'Property Management System',
            category: 'Web Application',
            description: 'A system for property managers to track maintenance requests, tenant information, and financial records.',
            technologies: ['Angular', 'Django', 'PostgreSQL', 'Docker'],
            image: 'https://via.placeholder.com/600x400',
            link: '#'
        },
        {
            title: 'Food Delivery App',
            category: 'Mobile App Development',
            description: 'A food delivery application with real-time order tracking, payment processing, and restaurant management.',
            technologies: ['Flutter', 'Firebase', 'Google Maps API'],
            image: 'https://via.placeholder.com/600x400',
            link: '#'
        }
    ];

    return (
        <main className="min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-4">Our Portfolio</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                    Explore our past projects and see how we&apos;ve helped businesses transform their digital presence
                    and achieve their goals through innovative solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div
                                className="h-48 bg-gray-200 bg-cover bg-center"
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>
                            <div className="p-6">
                                <div className="text-sm text-blue-600 mb-2">{project.category}</div>
                                <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={project.link}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    View Project <FiExternalLink className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg mb-4">Looking for a custom solution for your business?</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Discuss your project <FiArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>
        </main>
    );
} 