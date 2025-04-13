"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiPhone, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        services: []
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const serviceOptions = [
        'Web Development',
        'App Development',
        'UI/UX Design',
        'Backend Services',
        'Cloud Integration',
        'E-commerce Solutions'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleServiceToggle = (service) => {
        const services = [...formData.services];

        if (services.includes(service)) {
            // Remove service if already selected
            const index = services.indexOf(service);
            services.splice(index, 1);
        } else {
            // Add service if not selected
            services.push(service);
        }

        setFormData({ ...formData, services });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Send data to our API route
            const response = await axios.post('/api/contact', formData);

            if (response.status === 201) {
                setIsSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    services: []
                });
            }
        } catch (err) {
            console.error('Error submitting form:', err);

            const errorMessage = err.response?.data?.error ||
                'There was an error submitting your message. Please try again.';

            setError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-dark-900" id="contact">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? Contact us today for a free consultation and let's discuss how we can help your business grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Details Column */}
                    <div className="bg-emerald-800 text-white rounded-2xl p-8 shadow-xl lg:col-span-1">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <p className="mb-8 text-emerald-100">
                            Fill up the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <FiPhone className="text-xl mr-4 mt-1" />
                                <div>
                                    <h4 className="font-medium mb-1">Call Us</h4>
                                    <a href="tel:+1234567890" className="text-emerald-100 hover:text-white transition">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiMail className="text-xl mr-4 mt-1" />
                                <div>
                                    <h4 className="font-medium mb-1">Email Us</h4>
                                    <a href="mailto:info@ufdev.com" className="text-emerald-100 hover:text-white transition">
                                        info@ufdev.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FiMapPin className="text-xl mr-4 mt-1" />
                                <div>
                                    <h4 className="font-medium mb-1">Visit Us</h4>
                                    <address className="text-emerald-100 not-italic">
                                        IIT Patna, Bihar, India
                                    </address>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-emerald-700">
                            <h4 className="font-medium mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-emerald-700 hover:bg-emerald-600 p-2 rounded-full transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="#" className="bg-emerald-700 hover:bg-emerald-600 p-2 rounded-full transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="bg-emerald-700 hover:bg-emerald-600 p-2 rounded-full transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                <a href="#" className="bg-emerald-700 hover:bg-emerald-600 p-2 rounded-full transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-2">
                        {isSubmitted ? (
                            <motion.div
                                className="bg-dark-800 shadow-lg rounded-2xl p-10 text-center h-full flex flex-col justify-center items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-emerald-500 text-6xl mb-6">
                                    <FiCheckCircle />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Thank You!</h3>
                                <p className="text-gray-300 mb-6">
                                    Your message has been sent successfully. We'll get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <div className="bg-dark-800 shadow-lg rounded-2xl p-8">
                                {error && (
                                    <div className="bg-red-900/30 border border-red-600 text-red-400 rounded-lg p-4 mb-6">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name" className="block text-white font-medium mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 bg-dark-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-white"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-white font-medium mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 bg-dark-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-white"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 bg-dark-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-white"
                                                placeholder="+1 234 567 890"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 bg-dark-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-white"
                                                placeholder="Project Inquiry"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-white font-medium mb-2">Services You're Interested In</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                                            {serviceOptions.map((service, index) => (
                                                <div key={index} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={`service-${index}`}
                                                        checked={formData.services.includes(service)}
                                                        onChange={() => handleServiceToggle(service)}
                                                        className="w-4 h-4 text-emerald-600 bg-dark-900 border-gray-600 rounded focus:ring-emerald-500"
                                                    />
                                                    <label htmlFor={`service-${index}`} className="ml-2 text-sm text-gray-300">
                                                        {service}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-white font-medium mb-2">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-2 bg-dark-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-white"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors ${isSubmitting ? 'bg-emerald-800 cursor-not-allowed' : 'hover:bg-emerald-700'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <FiSend className="ml-2" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm; 