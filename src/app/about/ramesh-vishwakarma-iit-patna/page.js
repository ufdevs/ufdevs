"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiLinkedin, FiGithub, FiMail, FiPhone, FiAward, FiCode, FiMonitor, FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function RameshVishwakarmaPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    const skills = [
        { name: 'Frontend Development', items: ['React', 'Next.js', 'Vue.js', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
        { name: 'Backend Development', items: ['Node.js', 'Express', 'Django', 'PHP', 'Java', 'Python', 'RESTful APIs', 'GraphQL'] },
        { name: 'Database & Cloud', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'AWS', 'Google Cloud', 'Azure', 'Vercel'] },
        { name: 'Mobile Development', items: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Expo', 'Ionic'] },
        { name: 'DevOps & Tools', items: ['Git', 'Docker', 'CI/CD', 'Kubernetes', 'Jenkins', 'Jira', 'Figma', 'Adobe XD'] }
    ];

    const projects = [
        {
            title: "iMaxx TV OTT Platform",
            description: "A cutting-edge OTT platform with multiple monetization models, supporting content creators and viewers with seamless multi-device streaming.",
            link: "/portfolio/imaxx-tv-ott",
            technologies: ["React", "Node.js", "Firebase", "AWS"]
        },
        {
            title: "E-Commerce Solutions",
            description: "Built scalable e-commerce platforms with secure payment processing, inventory management, and analytics dashboards.",
            link: "/portfolio",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"]
        },
        {
            title: "Mobile App Development",
            description: "Developed cross-platform mobile applications for iOS and Android with seamless performance and native feel.",
            link: "/portfolio",
            technologies: ["Flutter", "React Native", "Firebase", "REST APIs"]
        }
    ];

    const experiences = [
        {
            position: "Founder & Lead Developer",
            company: "UFDev Agency",
            period: "2020 - Present",
            description: "Founded and leading a development agency that specializes in web and mobile application development, with a focus on OTT platforms, e-commerce solutions, and custom software."
        },
        {
            position: "Software Engineer",
            company: "Tech Innovations Ltd.",
            period: "2018 - 2020",
            description: "Led the development of multiple web and mobile applications using React, Node.js, and AWS. Implemented CI/CD pipelines and improved system architecture."
        },
        {
            position: "Student Researcher",
            company: "IIT Patna",
            period: "2016 - 2018",
            description: "Conducted research on distributed systems and cloud computing. Published a paper on efficient resource allocation in cloud environments."
        }
    ];

    const education = [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Indian Institute of Technology Patna",
            period: "2014 - 2018",
            details: "Graduated with honors. Specialized in Distributed Systems and Cloud Computing."
        }
    ];

    return (
        <main className="min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4">
                {/* Back link */}
                <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
                    <FiArrowLeft className="mr-2" /> Back to About
                </Link>

                {/* Profile Header */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-1">
                        <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-2 rounded-xl">
                            <div className="relative h-80 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg overflow-hidden">
                                {/* Replace with actual image */}
                                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                                    Ramesh Vishwakarma
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center">
                                <FiMail className="text-blue-500 mr-3" />
                                <a href="mailto:info@ufdev.com" className="text-gray-700 hover:text-blue-600">info@ufdev.com</a>
                            </div>
                            <div className="flex items-center">
                                <FiPhone className="text-blue-500 mr-3" />
                                <a href="tel:+917510060787" className="text-gray-700 hover:text-blue-600">+91 751 006 0787</a>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href="https://linkedin.com/in/ramesh-vishwakarma-iitp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition"
                                >
                                    <FiLinkedin size={20} />
                                </a>
                                <a
                                    href="https://github.com/ufdevs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition"
                                >
                                    <FiGithub size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <div className="mb-6">
                            <h1 className="text-4xl font-bold mb-2">Ramesh Vishwakarma</h1>
                            <p className="text-xl text-blue-600 mb-4">Full Stack Developer & IIT Patna Alumnus</p>
                            <p className="text-gray-700 mb-6">
                                Experienced full-stack developer with a strong background in web and mobile application development.
                                Alumnus of the prestigious Indian Institute of Technology Patna, with expertise in building scalable,
                                high-performance applications, particularly OTT platforms, e-commerce solutions, and custom software.
                            </p>
                            <p className="text-gray-700 mb-6">
                                As the founder of UFDev Agency, I lead a team of talented developers in creating innovative digital
                                solutions for clients across various industries. My approach combines technical excellence with a
                                deep understanding of business needs to deliver products that exceed expectations.
                            </p>
                            <p className="text-gray-700">
                                I specialize in React, Node.js, Firebase, and AWS, with a strong focus on creating seamless user
                                experiences across web and mobile platforms. My IIT Patna education has provided a solid foundation
                                in computer science principles that informs my practical development work.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">React</span>
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Node.js</span>
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Firebase</span>
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">AWS</span>
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">MongoDB</span>
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Flutter</span>
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">IIT Patna</span>
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Full Stack</span>
                        </div>

                        <div className="mb-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Professional Experience</h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="md:col-span-1">
                                    <p className="text-gray-500 text-sm">{exp.period}</p>
                                </div>
                                <div className="md:col-span-3">
                                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                                    <p className="text-blue-600 mb-2">{exp.company}</p>
                                    <p className="text-gray-700">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Education</h2>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="md:col-span-1">
                                    <p className="text-gray-500 text-sm">{edu.period}</p>
                                </div>
                                <div className="md:col-span-3">
                                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                    <p className="text-blue-600 mb-2">{edu.institution}</p>
                                    <p className="text-gray-700">{edu.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-semibold mb-4">{skillGroup.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={project.link}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                                >
                                    View Details <FiArrowLeft className="ml-1 transform rotate-180" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Additional content for SEO */}
                <section className="mb-16 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">About Ramesh Vishwakarma - IIT Patna Graduate</h2>
                    <p>
                        Ramesh Vishwakarma is a distinguished alumnus of the Indian Institute of Technology Patna (IIT Patna), where he completed his Bachelor of Technology in Computer Science. His academic background at one of India's premier technical institutions has provided him with a strong foundation in computer science principles, algorithms, data structures, and system design.
                    </p>
                    <p>
                        Following his graduation from IIT Patna, Ramesh has built a remarkable career in software development, specializing in web and mobile applications. His expertise spans the entire development stack, from frontend technologies like React and Vue.js to backend frameworks such as Node.js and Django. He is particularly skilled in building cloud-native applications using AWS, Firebase, and other modern cloud platforms.
                    </p>
                    <p>
                        As the founder of UFDev Agency, Ramesh leads a team of talented developers in creating innovative digital solutions for businesses across various sectors. The agency has gained recognition for its work on the iMaxx TV OTT platform, a comprehensive streaming solution that supports multiple monetization models.
                    </p>
                    <p>
                        Ramesh's approach to development combines technical excellence with a deep understanding of business needs. He believes in creating not just functional applications, but ones that provide exceptional user experiences and add genuine value to businesses and their customers.
                    </p>
                    <p>
                        Based in Mumbai, Maharashtra, Ramesh and his team at UFDev Agency offer their services to clients throughout India and globally. Whether you're looking to build a streaming platform, e-commerce site, or any custom software solution, Ramesh's IIT Patna education and extensive industry experience make him an ideal partner for your development needs.
                    </p>

                    {/* Hindi/Hinglish content for SEO */}
                    <div lang="hi" className="mt-8 pt-8 border-t border-gray-200">
                        <h3 className="text-xl font-bold mb-4">रमेश विश्वकर्मा - आईआईटी पटना से स्नातक (IIT Patna से Graduate)</h3>
                        <p>
                            रमेश विश्वकर्मा आईआईटी पटना के एक प्रतिष्ठित पूर्व छात्र हैं, जहां उन्होंने कंप्यूटर साइंस में बैचलर ऑफ टेक्नोलॉजी पूरा किया। भारत के प्रमुख तकनीकी संस्थानों में से एक में उनकी शैक्षिक पृष्ठभूमि ने उन्हें कंप्यूटर साइंस के सिद्धांतों, एल्गोरिदम, डेटा स्ट्रक्चर और सिस्टम डिज़ाइन में मजबूत आधार प्रदान किया है।
                        </p>
                        <p>
                            आईआईटी पटना से स्नातक होने के बाद, रमेश ने सॉफ्टवेयर डेवलपमेंट में एक उल्लेखनीय करियर बनाया है, जिसमें वेब और मोबाइल एप्लिकेशन में विशेषज्ञता हासिल की है। उनकी विशेषज्ञता पूरे डेवलपमेंट स्टैक में फैली हुई है, जिसमें React और Vue.js जैसी फ्रंटएंड टेक्नोलॉजीज से लेकर Node.js और Django जैसे बैकएंड फ्रेमवर्क शामिल हैं। वे विशेष रूप से AWS, Firebase और अन्य आधुनिक क्लाउड प्लेटफॉर्म का उपयोग करके क्लाउड-नेटिव एप्लिकेशन बनाने में कुशल हैं।
                        </p>
                        <p>
                            UFDev Agency के संस्थापक के रूप में, रमेश विभिन्न क्षेत्रों के व्यवसायों के लिए अभिनव डिजिटल समाधान बनाने में प्रतिभाशाली डेवलपर्स की एक टीम का नेतृत्व करते हैं। एजेंसी ने iMaxx TV OTT प्लेटफॉर्म पर अपने काम के लिए मान्यता प्राप्त की है, जो एक व्यापक स्ट्रीमिंग समाधान है जो कई मुद्रीकरण मॉडल का समर्थन करता है।
                        </p>
                        <p>
                            मुंबई, महाराष्ट्र में स्थित, रमेश और उनकी टीम UFDev Agency में पूरे भारत और वैश्विक स्तर पर क्लाइंट्स को अपनी सेवाएं प्रदान करते हैं। चाहे आप एक स्ट्रीमिंग प्लेटफॉर्म, ई-कॉमर्स साइट, या कोई भी कस्टम सॉफ्टवेयर सॉल्यूशन बनाना चाहते हों, रमेश की आईआईटी पटना की शिक्षा और व्यापक उद्योग अनुभव उन्हें आपकी डेवलपमेंट आवश्यकताओं के लिए एक आदर्श पार्टनर बनाते हैं।
                        </p>
                    </div>

                    {/* FAQ section for SEO */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold">Who is Ramesh Vishwakarma?</h4>
                                <p>Ramesh Vishwakarma is an IIT Patna alumnus, full stack developer, and founder of UFDev Agency. He specializes in web and mobile application development, with particular expertise in OTT platforms, e-commerce solutions, and custom software development.</p>
                            </div>

                            <div>
                                <h4 className="font-bold">Which IIT did Ramesh Vishwakarma attend?</h4>
                                <p>Ramesh Vishwakarma attended IIT Patna (Indian Institute of Technology Patna), where he completed his Bachelor of Technology in Computer Science.</p>
                            </div>

                            <div>
                                <h4 className="font-bold">What services does Ramesh Vishwakarma offer?</h4>
                                <p>Through his company UFDev Agency, Ramesh offers a range of development services including web application development, mobile app development, OTT platform development, e-commerce solutions, UI/UX design, and custom software development.</p>
                            </div>

                            <div>
                                <h4 className="font-bold">Where is Ramesh Vishwakarma based?</h4>
                                <p>Ramesh Vishwakarma is based in Vasai West, Mumbai, Maharashtra, India. However, he provides services to clients throughout India and globally.</p>
                            </div>

                            <div>
                                <h4 className="font-bold">How can I contact Ramesh Vishwakarma?</h4>
                                <p>You can contact Ramesh through the UFDev Agency website's contact form, by email at info@ufdev.com, or by phone at +91 751 006 0787.</p>
                            </div>

                            <div>
                                <h4 className="font-bold">Is Ramesh Vishwakarma available for freelance work?</h4>
                                <p>Ramesh primarily works through his agency, UFDev Agency, but is available for select projects based on availability and project requirements.</p>
                            </div>

                            <div>
                                <h4 className="font-bold">What technologies does Ramesh Vishwakarma specialize in?</h4>
                                <p>Ramesh specializes in React, Node.js, Firebase, AWS, MongoDB, Flutter, and other modern web and mobile development technologies.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-blue-50 p-8 rounded-xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Work with an IIT Patna graduate on your next project</h2>
                    <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                        Looking for a developer with the technical expertise of an IIT education and practical industry experience?
                        Contact Ramesh Vishwakarma to discuss how he can help bring your project to life.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </section>

                {/* Schema.org Person markup for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Ramesh Vishwakarma",
                            "jobTitle": "Full Stack Developer & Founder",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "UFDev Agency"
                            },
                            "alumniOf": {
                                "@type": "CollegeOrUniversity",
                                "name": "Indian Institute of Technology Patna",
                                "sameAs": "https://www.iitp.ac.in/"
                            },
                            "description": "IIT Patna alumnus, full stack developer specializing in OTT platforms, web and mobile applications.",
                            "knowsAbout": ["Web Development", "Mobile App Development", "OTT Platforms", "React", "Node.js", "Firebase", "AWS"],
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Mumbai",
                                "addressRegion": "Maharashtra",
                                "postalCode": "402108",
                                "addressCountry": "IN"
                            },
                            "email": "info@ufdev.com",
                            "telephone": "+917510060787",
                            "url": "https://serv.ufdevs.me/about/ramesh-vishwakarma-iit-patna",
                            "sameAs": [
                                "https://linkedin.com/in/ramesh-vishwakarma-iitp",
                                "https://github.com/ufdevs"
                            ]
                        })
                    }}
                />

                {/* LocalBusiness Schema for Local SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "UFDev Agency",
                            "founder": {
                                "@type": "Person",
                                "name": "Ramesh Vishwakarma",
                                "alumniOf": "Indian Institute of Technology Patna"
                            },
                            "description": "Premium web and mobile app development agency founded by IIT Patna alumnus Ramesh Vishwakarma. We specialize in OTT platforms, custom web applications, and mobile app development.",
                            "url": "https://serv.ufdevs.me",
                            "telephone": "+917510060787",
                            "email": "info@ufdev.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Vasai West",
                                "addressLocality": "Mumbai",
                                "addressRegion": "Maharashtra",
                                "postalCode": "402108",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "19.3920",
                                "longitude": "72.8262"
                            },
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    "opens": "09:00",
                                    "closes": "18:00"
                                }
                            ],
                            "priceRange": "₹₹",
                            "currenciesAccepted": "INR",
                            "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
                            "areaServed": ["Mumbai", "Maharashtra", "India", "Global"],
                            "serviceType": ["Web Development", "Mobile App Development", "OTT Platform Development", "E-commerce Solutions"],
                            "sameAs": [
                                "https://linkedin.com/company/ufdev",
                                "https://github.com/ufdevs"
                            ]
                        })
                    }}
                />

                {/* BlogPosting Schema for the About content */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": "About Ramesh Vishwakarma - IIT Patna Graduate & Full Stack Developer",
                            "description": "Ramesh Vishwakarma is an experienced full-stack developer with a degree from IIT Patna, specializing in web applications, mobile apps, and OTT platforms.",
                            "keywords": ["Ramesh Vishwakarma", "IIT Patna", "Web Developer", "App Developer", "Full Stack Developer", "UFDev Agency", "OTT Platform Developer", "रमेश विश्वकर्मा", "आईआईटी पटना"],
                            "wordCount": "1200",
                            "datePublished": "2024-04-01",
                            "dateModified": new Date().toISOString().split('T')[0],
                            "author": {
                                "@type": "Person",
                                "name": "Ramesh Vishwakarma"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "UFDev Agency",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://serv.ufdevs.me/ufdev.llc.png"
                                }
                            },
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://serv.ufdevs.me/about/ramesh-vishwakarma-iit-patna"
                            }
                        })
                    }}
                />
            </div>
        </main>
    );
} 