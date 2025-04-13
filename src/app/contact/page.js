"use client";

import { useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                We&apos;d love to hear from you. Please fill out the form or contact us directly using the information below.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <FiPhone className="text-blue-600 mt-1 mr-4 text-xl" />
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <p className="text-gray-600">+1 (234) 567-890</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <FiMail className="text-blue-600 mt-1 mr-4 text-xl" />
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-gray-600">info@ufdev.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <FiMapPin className="text-blue-600 mt-1 mr-4 text-xl" />
                                    <div>
                                        <h3 className="font-medium">Address</h3>
                                        <p className="text-gray-600">IIT Patna, Bihar, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 