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
            category: 'OTT & Media (Global)',
            description: 'A global OTT platform featuring AWS MediaConvert video pipeline, SVOD/AVOD models, and multi-platform support (Apple TV, Android TV).',
            technologies: ['React', 'Node.js', 'AWS', 'Firebase'],
            image: '/imaxxtv.png',
            link: 'https://www.imaxxtvdigital.com/',
            value: '₹8 Lakh+'
        },
        {
            title: "Bamon's Kitchen",
            category: 'US Startup - Food & Catering',
            description: 'Premium Indian Tiffin and Catering service platform for the US/Vancouver market, focusing on wholesome home-style meals.',
            technologies: ['Next.js', 'Tailwind CSS', 'SEO', 'Online Ordering'],
            image: '/bamons.png',
            link: 'https://www.bamonskitchen.com/',
            value: '₹3.5 Lakh+'
        },
        {
            title: 'Second Innings App',
            category: 'US Startup - Mobile App',
            description: 'A revolutionary mobile application for US-based startups focusing on social and service integration.',
            technologies: ['Flutter', 'Firebase', 'Mobile App'],
            image: '/secondinnings.png',
            link: 'https://play.google.com/store/apps/details?id=com.second.innings',
            value: '₹5 Lakh+'
        },
        {
            title: 'Mingle Entertainment V2',
            category: 'India Startup - Social App',
            description: 'A large-scale social entertainment app with 1,00,000+ downloads, featuring real-time interactions and media processing.',
            technologies: ['React Native', 'Node.js', 'MongoDB'],
            image: '/mingle.png',
            link: 'https://play.google.com/store/apps/details?id=com.mingleentertainment.mingle.v2',
            value: '₹12 Lakh+'
        },
        {
            title: 'Ask Your Doctor',
            category: 'Healthcare & SaaS',
            description: 'A comprehensive digital platform for doctors in India to manage their consultations and digital presence.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Telemedicine'],
            image: '/askyourdoctor.png',
            link: 'https://askyourdoctor.in/',
            value: '₹4 Lakh+'
        },
        {
            title: 'PinkTree Health',
            category: 'Healthcare Technology',
            description: 'Advanced lung health management platform focusing on remote monitoring and digital care for respiratory patients.',
            technologies: ['React', 'Next.js', 'Healthcare API'],
            image: '/pinktree.png',
            link: 'https://pinktreehealth.com/',
            value: '₹6 Lakh+'
        },
        {
            title: 'KolourSync Agency',
            category: 'Design & Agency Platform',
            description: 'A premium design and development agency platform showcase featuring high-end brand experiences.',
            technologies: ['PHP', 'MySQL', 'Brand Design'],
            image: '/koloursync.png',
            link: 'https://koloursyncc.com/',
            value: '₹3 Lakh+'
        },
        {
            title: 'INVIP RIDE',
            category: 'India Startup - EV Transport',
            description: 'Smart EV ride-sharing and sustainable transportation service platform with zero emission goals.',
            technologies: ['Flutter', 'Real-time Tracking', 'EV Integration'],
            image: '/invipride.png',
            link: 'https://invipride.com/',
            value: '₹5 Lakh+'
        },
        {
            title: 'DITRP India',
            category: 'EdTech & Assessment',
            description: 'Educational excellence and certification platform serving thousands of students across India.',
            technologies: ['React', 'EdTech', 'Enterprise Application'],
            image: '/ditrp.png',
            link: 'https://ditrpindia.org/',
            value: '₹4.5 Lakh+'
        },
        {
            title: 'Pitchers AI Platform',
            category: 'AI & SaaS - Lead Gen',
            description: 'AI-powered leads provider platform designed to connect business owners with potential high-value clients.',
            technologies: ['Next.js', 'AI APIs', 'Lead Generation'],
            image: '/pitchers.png',
            link: 'https://pitchers-ten.vercel.app/',
            value: '₹3 Lakh+'
        },
        {
            title: 'EmpowerHR Services',
            category: 'HR Tech & SaaS',
            description: 'Full-stack enterprise HR management system featuring geolocation, device-locked login, and photo verification.',
            technologies: ['Node.js', 'React', 'MongoDB', 'Enterprise'],
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