"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { FiCheck, FiArrowLeft, FiCode, FiCpu, FiArchive, FiLayers, FiDatabase, FiLock, FiRepeat, FiBarChart } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function CustomSoftwarePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        'Custom Enterprise Software',
        'SaaS Product Development',
        'Automation & Workflow Optimization',
        'Internal Business Tooling',
        'Legacy System Modernization',
        'API & Third-party Integrations',
        'High-Performance Cloud Infrastructure',
        'Ongoing Maintenance & Support'
    ];

    const techHighlights = [
        { icon: <FiCpu />, name: 'Node.js/Go', desc: 'Scalable Backends' },
        { icon: <FiDatabase />, name: 'MongoDB/PostgreSQL', desc: 'Secure Data' },
        { icon: <FiArchive />, name: 'Docker/Kubernetes', desc: 'Global Deployment' },
        { icon: <FiLock />, name: 'Advanced Encryption', desc: 'Data Security' },
        { icon: <FiRepeat />, name: 'Continuous CI/CD', desc: 'Rapid Delivery' },
        { icon: <FiBarChart />, name: 'Real-time Analytics', desc: 'Data Insights' }
    ];

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Custom Software Development",
        "provider": {
            "@type": "LocalBusiness",
            "name": "UFDevs",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
            }
        },
        "areaServed": ["Mumbai", "India", "USA", "Global"],
        "description": "Premium custom software development for startups, specializing in scalable enterprise systems and automated workflow tools."
    };

    return (
        <main className="min-h-screen pt-28 pb-16 bg-dark-900 text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <div className="container mx-auto px-4">
                <Link href="/services" className="inline-flex items-center text-emerald-400 mb-8 hover:text-emerald-300 transition-colors">
                    <FiArrowLeft className="mr-2" />
                    Back to services
                </Link>

                <div className="mb-12">
                    <div className="rounded-2xl overflow-hidden relative h-72 md:h-96 mb-12 border border-emerald-900/30">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-transparent flex items-center">
                            <div className="p-8 md:p-16">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                                    Custom Software Development
                                </h1>
                                <p className="text-xl text-gray-300 max-w-2xl">
                                    Engineering high-performance software solutions for US and India startups. 
                                    Led by IIT Patna experts at UFDevs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold mb-8 flex items-center">
                                <span className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg mr-4"><FiLayers /></span>
                                Why Choose UFDevs for Software Engineering?
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                At UFDevs, founded by IIT Patna alumnus Ramesh Vishwakarma, we provide world-class software development (Software Dev) 
                                that helps startups in the US and India scale fast. We don't just write code; we build scalable 
                                systems that solve complex business challenges effectively and affordably. 
                            </p>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Whether you're a US-based startup looking for an offshore technical team or an Indian business 
                                needing a digital transformation partner, our custom software solutions are engineered 
                                for maximum ROI and performance.
                            </p>
                        </section>

                        <section className="mb-16">
                            <h2 className="text-3xl font-bold mb-8">Technical Excellence</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {techHighlights.map((tech, idx) => (
                                    <div key={idx} className="bg-dark-800 p-6 rounded-xl border border-emerald-900/20 hover:border-emerald-500/30 transition-all flex items-start group">
                                        <div className="text-3xl text-emerald-400 mr-4 group-hover:scale-110 transition-transform">{tech.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                                            <p className="text-gray-400 text-sm">{tech.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-2xl p-8 sticky top-32 border border-emerald-500/20 backdrop-blur-md">
                            <h3 className="text-xl font-bold mb-8 text-white">Software Dev Features</h3>
                            <ul className="space-y-5 mb-10">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <div className="bg-emerald-500 text-dark-900 rounded-full p-1 mr-4 mt-1">
                                            <FiCheck size={14} />
                                        </div>
                                        <span className="text-gray-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="bg-dark-900/50 rounded-xl p-5 mb-8 text-center">
                                <p className="text-emerald-400 font-bold text-lg mb-1 italic">Ramesh Vishwakarma UFDev Advantage</p>
                                <p className="text-gray-400 text-xs">Quality code with IIT Patna precision</p>
                            </div>

                            <Link
                                href="/contact"
                                className="block w-full bg-emerald-600 text-white text-center py-4 rounded-xl hover:bg-emerald-500 transition-all font-bold shadow-lg shadow-emerald-900/30"
                            >
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                </div>

                <section className="mt-20 pt-20 border-t border-dark-800 text-center">
                    <h2 className="text-4xl font-bold mb-6">Expert Software Solutions in Mumbai</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                        Ranked among the top software development agencies for startups. We deliver on-time, on-budget, and above-expectations.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/portfolio" className="bg-dark-800 px-8 py-3 rounded-xl border border-emerald-900/30 hover:bg-dark-700 transition-all">View Our Work</Link>
                        <Link href="/contact" className="bg-emerald-600 px-8 py-3 rounded-xl hover:bg-emerald-500 transition-all">Free Consultation</Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
