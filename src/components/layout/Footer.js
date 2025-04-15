"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';

const Footer = () => {
    const year = new Date().getFullYear();

    const services = [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'App Development', path: '/services/mobile-apps' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'Backend Services', path: '/services/backend' },
        { name: 'Cloud Integration', path: '/services/cloud' },
        { name: 'DevOps & Automation', path: '/services/devops' },
    ];

    const company = [
        { name: 'About Us', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const resources = [
        { name: 'Blog', path: '/blog' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Support', path: '/support' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
    ];

    return (
        <footer className="bg-dark-900 text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="mb-4">
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/ufdev.llc.png"
                                    alt="UFDev.LLC Logo"
                                    width={180}
                                    height={50}
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Delivering innovative, scalable, and affordable solutions for businesses worldwide.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <FiPhone className="text-emerald-400 mt-1 mr-3" />
                                <a href="tel:+917510060787" className="text-gray-300 hover:text-emerald-400">
                                    +91 7510060787
                                </a>
                            </div>
                            <div className="flex items-start">
                                <FiMail className="text-emerald-400 mt-1 mr-3" />
                                <a href="mailto:info@ufdev.com" className="text-gray-300 hover:text-emerald-400">
                                    info@ufdev.com
                                </a>
                            </div>
                            <div className="flex items-start">
                                <FiMapPin className="text-emerald-400 mt-1 mr-3" />
                                <span className="text-gray-300">
                                    Vasai West, Mumbai, Maharashtra - 402108
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link href={service.path} className="text-gray-400 hover:text-emerald-400 transition-colors">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                        <ul className="space-y-3">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.path} className="text-gray-400 hover:text-emerald-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
                        <ul className="space-y-3">
                            {resources.map((resource, index) => (
                                <li key={index}>
                                    <Link href={resource.path} className="text-gray-400 hover:text-emerald-400 transition-colors">
                                        {resource.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 mb-4 md:mb-0">
                        &copy; {year} UFDev.LLC. All rights reserved.
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                            <FiLinkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                            <FiTwitter size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                            <FiInstagram size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                            <FiGithub size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 