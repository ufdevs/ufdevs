"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Define closeMenu function before it's used in useCallback
    const closeMenu = () => {
        setIsOpen(false);
        setServicesOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close menu when route changes
    useEffect(() => {
        closeMenu();
    }, [pathname]);

    const scrollToSection = useCallback((e, sectionId) => {
        e.preventDefault();
        closeMenu();

        // If we're already on the home page, scroll to the section with animation
        if (pathname === '/') {
            const section = document.getElementById(sectionId);
            if (section) {
                // Create flicker effect by briefly fading the target section
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    // Add flicker effect class
                    sectionElement.classList.add('section-transition-flicker');

                    // Scroll with smooth behavior
                    window.scrollTo({
                        top: section.offsetTop - 100, // Offset for navbar height
                        behavior: 'smooth'
                    });

                    // Remove flicker class after animation completes
                    setTimeout(() => {
                        sectionElement.classList.remove('section-transition-flicker');
                    }, 1000);
                }
            }
        } else {
            // If we're on another page, navigate to home then scroll
            router.push(`/#${sectionId}`);
        }
    }, [pathname, router]); // Remove closeMenu from dependencies

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (servicesOpen) setServicesOpen(false);
    };

    const toggleServices = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setServicesOpen(!servicesOpen);
    };

    const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-800 shadow-lg py-2' : 'bg-transparent py-4'
        }`;

    const navLinks = [
        { name: 'Home', path: '/', sectionId: 'hero' },
        { name: 'About', path: '/#about', sectionId: 'about' },
        {
            name: 'Services',
            path: '/services',
            dropdown: true,
            subItems: [
                { name: 'Web Development', path: '/services/web-development' },
                { name: 'Mobile Apps', path: '/services/mobile-apps' },
                { name: 'UI/UX Design', path: '/services/ui-ux-design' },
                { name: 'Backend Services', path: '/services/backend' },
                { name: 'Cloud Integration', path: '/services/cloud' },
            ]
        },
        { name: 'Portfolio', path: '/#portfolio', sectionId: 'portfolio' },
        { name: 'Pricing', path: '/#pricing', sectionId: 'pricing' },
        { name: 'Contact', path: '/#contact', sectionId: 'contact' },
    ];

    return (
        <nav className={navbarClasses}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center" onClick={closeMenu}>
                        <Image
                            src="/ufdev.llc.png"
                            alt="UFDev.LLC Logo"
                            width={150}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <div key={index} className="relative group">
                                {link.dropdown ? (
                                    <div className="flex items-center cursor-pointer">
                                        <Link href={link.path}>
                                            <span className={`text-white hover:text-emerald-400 font-medium ${pathname === link.path ? 'text-emerald-400' : ''}`}>{link.name}</span>
                                        </Link>
                                        <FiChevronDown className="ml-1 text-gray-300 group-hover:text-emerald-400" />

                                        {/* Dropdown */}
                                        <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                            <div className="bg-dark-800 rounded-lg shadow-xl py-2 border border-gray-700">
                                                {link.subItems.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.path}
                                                        className={`block px-4 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-emerald-400 ${pathname === subItem.path ? 'bg-dark-700 text-emerald-400' : ''}`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    link.sectionId ? (
                                        <a
                                            href={link.path}
                                            className={`text-white hover:text-emerald-400 font-medium ${pathname === link.path ? 'text-emerald-400' : ''}`}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.path}
                                            className={`text-white hover:text-emerald-400 font-medium ${pathname === link.path ? 'text-emerald-400' : ''}`}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white p-2 focus:outline-none"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? (
                                <FiX className="h-6 w-6 text-emerald-400" />
                            ) : (
                                <FiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden bg-dark-800 border-t border-gray-700 mt-2"
                        >
                            <div className="px-4 py-3 space-y-2">
                                {navLinks.map((link, index) => (
                                    <div key={index}>
                                        {link.dropdown ? (
                                            <div>
                                                <button
                                                    onClick={toggleServices}
                                                    className="flex items-center justify-between w-full py-2 text-white hover:text-emerald-400"
                                                >
                                                    <span className={`${pathname === link.path ? 'text-emerald-400' : ''}`}>{link.name}</span>
                                                    <FiChevronDown className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                                                </button>

                                                <AnimatePresence>
                                                    {servicesOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="pl-4 space-y-1 overflow-hidden"
                                                        >
                                                            {link.subItems.map((subItem, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subItem.path}
                                                                    className={`block py-2 text-sm text-gray-300 hover:text-emerald-400 ${pathname === subItem.path ? 'text-emerald-400' : ''
                                                                        }`}
                                                                    onClick={closeMenu}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            link.sectionId ? (
                                                <a
                                                    href={link.path}
                                                    onClick={(e) => scrollToSection(e, link.sectionId)}
                                                    className={`block py-2 text-white hover:text-emerald-400 ${pathname === link.path ? 'text-emerald-400' : ''
                                                        }`}
                                                >
                                                    {link.name}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={link.path}
                                                    className={`block py-2 text-white hover:text-emerald-400 ${pathname === link.path ? 'text-emerald-400' : ''
                                                        }`}
                                                    onClick={closeMenu}
                                                >
                                                    {link.name}
                                                </Link>
                                            )
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;