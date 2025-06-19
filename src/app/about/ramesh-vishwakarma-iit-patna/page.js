"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiLinkedin, FiGithub, FiMail, FiPhone, FiAward, FiCode, FiMonitor, FiSmartphone, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SectionReveal from '../../../components/common/SectionReveal';

export default function RameshVishwakarmaPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    const skills = [
        { name: 'Languages', items: ['Python', 'JavaScript', 'Dart', 'Java', 'XML'] },
        { name: 'Frameworks', items: ['Next.js', 'Tailwind CSS', 'React.js', 'Flutter (MVVM)', 'Node.js (MVC)'] },
        { name: 'Cloud & Database', items: ['MongoDB', 'Firebase', 'AWS', 'Docker'] },
        { name: 'Platforms', items: ['VS Code', 'Android Studio', 'IntelliJ IDEA', 'Cursor AI'] },
        { name: 'DevOps & Tools', items: ['GitHub', 'Prompt Engineering', 'Project Management', 'Coordination'] },
        { name: 'AI & Advanced', items: ['GenAI Integration', 'LLM APIs', 'AWS MediaConvert', 'Video Processing'] }
    ];

    const projects = [
        {
            title: "iMaxx TV OTT Platform",
            description: "Developed IMAXX TV OTT info site, implemented AWS MediaConvert for video transcoding, managed admin panel, collaborated on bug fixes, and deployed app to Google Play and Apple App Store.",
            link: "/portfolio/imaxx-tv-ott",
            technologies: ["React", "Node.js", "Firebase", "AWS"],
            value: "₹8 Lakh+"
        },
        {
            title: "Employee Management Service",
            description: "Developed EmpowerHR backend using Node.js, Express, and MongoDB. Implemented RBA, JWT, secure login with device lock, and integrated geolocation, photo verification, and Stripe payments.",
            link: "https://servs.ufdevs.me",
            technologies: ["Node.js", "React.js", "MongoDB", "Express"],
            value: "₹3 Lakh+"
        },
        {
            title: "Video Processing Pipeline (SaaS)",
            description: "Developed a video transcoding app with RESTful API integration and dynamic configuration for AWS, Docker, Ffmpeg.",
            link: "https://drive.google.com/file/d/1-CRCZvmJ-kW_NVJbj0zx6-0aGC24Up0r/view",
            technologies: ["Node.js", "Next.js", "AWS", "Docker"],
            value: "₹2.5 Lakh+"
        },
        {
            title: "Employee Management System",
            description: "Built an employee management system with dynamic routing and responsive UI. Focused on maintainability with clean code and refactoring, MVVM Architecture.",
            link: "https://drive.google.com/file/d/1-AuxAmq4-4ZOim1BvaTdmL-2OmNDc6Nh/view",
            technologies: ["Flutter", "Firebase"],
            value: "₹1.5 Lakh+"
        }
    ];

    const experiences = [
        {
            position: "Core Developer & Tech Head",
            company: "UFDevs (Unfiltered Developers)",
            period: "2022 - Present",
            description: "Leading all technical aspects of development at UFDevs, managing services and overseeing project implementation. Specializing in premium web and mobile applications with GenAI integration and advanced features."
        },
        {
            position: "Training Sub Coordinator Web Dev",
            company: "GigX IITP",
            period: "April 2025 - Present (Freelancing)",
            description: "Assist in training delivery, assign tasks, track student progress, resolve doubts, ensure engagement, and coordinate with the core team for effective web development program execution."
        },
        {
            position: "Technical Specialist",
            company: "Imaxx Tv Digital PVT LTD",
            period: "Feb 2025 - April 2025",
            description: "Developed IMAXX TV info site, used AWS MediaConvert, managed admin panel, fixed bugs, and deployed apps to Play Store & App Store, coordinated with the CEO."
        },
        {
            position: "Technical Support & Data Entry",
            company: "DITRP OPC PVT LTD",
            period: "May 2024 - Sep 2024",
            description: "Trained 2000+ users, updated website data, resolved client issues, coordinated with the CEO, and supported software testing."
        },
        {
            position: "Participant",
            company: "IIT Patna, CEP",
            period: "2025",
            description: "Active member of the Technology Club at IIT Patna's Continuing Education Program. Recognized for technical excellence, winning 2nd place in the Hack4बिहार hackathon for developing functionality described as 'smooth as poetry in code'."
        }
    ];

    const education = [
        {
            degree: "BS in Computer Science & Data Analytics",
            institution: "Indian Institute of Technology Patna",
            period: "Dec 2024 - Dec 2028",
            details: "Currently enrolled in the BS program at IIT Patna. Student ID: IITP/UG/2024-25/16956."
        },
        {
            degree: "BSc (Hons) in Mathematics",
            institution: "Viva College, Mumbai",
            period: "Apr 2023 - Apr 2026",
            details: "Pursuing honors degree in Mathematics with focus on computational mathematics and statistics."
        }
    ];

    const achievements = [
        "2nd Place in Web Development Competition at IIT Patna, Mar 2025 - Certificate: <a href='https://drive.google.com/file/d/1-EuIRlb_dzSNFMGtFYjjfMG6-lwblqb9/view' target='_blank' rel='noopener noreferrer' class='text-emerald-600 hover:underline'>View Certificate</a>",
        "2nd Place in Full Stack Web Dev Competition at IIT Patna, May 2025 - Certificate: <a href='https://drive.google.com/file/d/1zGZx9w3B-H29oKb3MigIy1qKinDH4lw0/view' target='_blank' rel='noopener noreferrer' class='text-emerald-600 hover:underline'>View Certificate</a>",
        "2nd Place in Hack4बिहार Hackathon - Recognized for 'functionality so smooth, it's like poetry in code'",
        "Featured in Technology Club IIT Patna's showcase of top developers",
        "Developed multiple high-profile projects with valuations exceeding industry standards"
    ];

    return (
        <main className="min-h-screen pt-28 pb-16 bg-dark-900 text-white">
            <div className="container mx-auto px-4">
                {/* Back link */}
                <Link href="/about" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
                    <FiArrowLeft className="mr-2" /> Back to About
                </Link>

                {/* Profile Header */}
                <SectionReveal
                    direction="up"
                    duration={0.7}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="md:col-span-1">
                            <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 p-3 rounded-xl shadow-lg">
                                <div className="relative h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg overflow-hidden">
                                    <img 
                                        src="/rameshvishwakarma.jpeg" 
                                        alt="Ramesh Vishwakarma - IIT Patna" 
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-40"></div>
                                </div>
                            </div>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center">
                                    <FiMail className="text-emerald-400 mr-3" />
                                    <a href="mailto:rameshnda09@gmail.com" className="text-gray-300 hover:text-emerald-400">rameshnda09@gmail.com</a>
                                </div>
                                <div className="flex items-center">
                                    <FiPhone className="text-emerald-400 mr-3" />
                                    <a href="tel:+917510060787" className="text-gray-300 hover:text-emerald-400">+91 751 006 0787</a>
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <a
                                        href="https://www.linkedin.com/in/ramesh-vishwakarma-957355234/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-dark-800 hover:bg-dark-700 text-emerald-400 p-2 rounded-full transition"
                                    >
                                        <FiLinkedin size={20} />
                                    </a>
                                    <a
                                        href="https://ufdevs.me"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-dark-800 hover:bg-dark-700 text-emerald-400 p-2 rounded-full transition"
                                    >
                                        <FiExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <div className="mb-6">
                                <h1 className="text-4xl font-bold mb-2 text-white">Ramesh Vishwakarma</h1>
                                <p className="text-xl text-emerald-400 mb-4">Core Developer & Tech Head | IIT Patna</p>
                                <p className="text-gray-300 mb-6">
                                    Experienced full-stack developer and technical leader at UFDevs (Unfiltered Developers), managing all aspects of development services. 
                                    Currently pursuing BS in Computer Science & Data Analytics at the prestigious Indian Institute of Technology Patna, 
                                    with expertise in building premium web and mobile applications.
                                </p>
                                <p className="text-gray-300 mb-6">
                                    As the core developer and tech head at UFDevs, I oversee the development of high-value projects starting at ₹30,000, with 
                                    some projects valued at ₹3 Lakh to ₹8 Lakh. My specialization includes GenAI integration, creating scalable architectures, 
                                    and implementing cutting-edge technologies across various platforms.
                                </p>
                                <p className="text-gray-300">
                                    Recognized for technical excellence at IIT Patna, including multiple 2nd place finishes in web development competitions and hackathons. 
                                    My work has been described as having "functionality so smooth, it's like poetry in code." I bring academic rigor and practical expertise to every project.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-emerald-900/30 text-emerald-400 text-sm px-3 py-1 rounded-full">React</span>
                                <span className="bg-emerald-900/30 text-emerald-400 text-sm px-3 py-1 rounded-full">Node.js</span>
                                <span className="bg-emerald-900/30 text-emerald-400 text-sm px-3 py-1 rounded-full">GenAI</span>
                                <span className="bg-emerald-900/30 text-emerald-400 text-sm px-3 py-1 rounded-full">AWS</span>
                                <span className="bg-emerald-900/30 text-emerald-400 text-sm px-3 py-1 rounded-full">MongoDB</span>
                                <span className="bg-emerald-900/30 text-emerald-400 text-sm px-3 py-1 rounded-full">Flutter</span>
                                <span className="bg-emerald-900/30 text-emerald-400 text-sm px-3 py-1 rounded-full">IIT Patna</span>
                                <span className="bg-emerald-900/30 text-emerald-400 text-sm px-3 py-1 rounded-full">Python</span>
                            </div>

                            <div className="mb-8">
                                <Link
                                    href="/contact"
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center justify-center font-medium shadow-lg shadow-emerald-900/20"
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                    </div>
                </SectionReveal>

                {/* Secondary Image */}
                <SectionReveal
                    direction="up"
                    duration={0.7}
                    delay={0.1}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 p-3 rounded-xl shadow-lg">
                        <div className="h-96 overflow-hidden rounded-lg relative">
                            <img 
                                src="/ramesh2.jpeg" 
                                alt="Ramesh Vishwakarma - Working" 
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-30"></div>
                        </div>
                        <div className="text-center mt-3 text-gray-300 text-sm">
                            Ramesh Vishwakarma working on a high-value enterprise project at UFDevs
                        </div>
                    </div>
                </SectionReveal>

                {/* Achievements Section */}
                <SectionReveal
                    direction="up"
                    duration={0.7}
                    delay={0.2}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold mb-6 border-b border-dark-700 pb-2 text-white">Achievements & Recognition</h2>
                    <div className="bg-dark-800 p-6 rounded-xl">
                        <ul className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start">
                                    <FiAward className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-300" dangerouslySetInnerHTML={{ __html: achievement }}></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </SectionReveal>

                {/* Experience Section */}
                <SectionReveal
                    direction="up"
                    duration={0.7}
                    delay={0.3}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold mb-6 border-b border-dark-700 pb-2 text-white">Professional Experience</h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="md:col-span-1">
                                    <p className="text-gray-400 text-sm">{exp.period}</p>
                                </div>
                                <div className="md:col-span-3">
                                    <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                                    <p className="text-emerald-400 mb-2">{exp.company}</p>
                                    <p className="text-gray-300">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionReveal>

                {/* Education Section */}
                <SectionReveal
                    direction="up"
                    duration={0.7}
                    delay={0.4}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold mb-6 border-b border-dark-700 pb-2 text-white">Education</h2>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="md:col-span-1">
                                    <p className="text-gray-400 text-sm">{edu.period}</p>
                                </div>
                                <div className="md:col-span-3">
                                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                                    <p className="text-emerald-400 mb-2">{edu.institution}</p>
                                    <p className="text-gray-300">{edu.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionReveal>

                {/* Skills Section */}
                <SectionReveal
                    direction="up"
                    duration={0.7}
                    delay={0.5}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold mb-6 border-b border-dark-700 pb-2 text-white">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div key={index} className="bg-dark-800 p-6 rounded-xl shadow-sm border border-dark-700">
                                <h3 className="text-lg font-semibold mb-4 text-white">{skillGroup.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, i) => (
                                        <span key={i} className="bg-emerald-900/30 text-emerald-400 text-xs px-2 py-1 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionReveal>

                {/* Featured Projects */}
                <SectionReveal
                    direction="up"
                    duration={0.7}
                    delay={0.6}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold mb-6 border-b border-dark-700 pb-2 text-white">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-dark-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-dark-700"
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)" }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                    <span className="bg-emerald-900/30 text-emerald-400 text-xs px-2 py-1 rounded">
                                        {project.value}
                                    </span>
                                </div>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-emerald-900/30 text-emerald-400 text-xs px-2 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300"
                                >
                                    View Project <FiExternalLink className="ml-1" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </SectionReveal>

                {/* CTA Section */}
                <SectionReveal
                    direction="up"
                    duration={0.7}
                    delay={0.7}
                >
                    <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4 text-white">Work with an IIT Patna graduate on your next project</h2>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Looking for a developer with the technical expertise of an IIT education and practical industry experience?
                            Contact Ramesh Vishwakarma to discuss how he can help bring your project to life.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center justify-center font-medium shadow-lg shadow-emerald-900/20"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </SectionReveal>

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
                            रमेश विश्वकर्मा आईआईटी पटना के एक प्रतिष्ठित पूर्व छात्र हैं, जहां उन्होंने कंप्यूटर साइंस में बैचलर ऑफ टेक्नॉलॉजी पूरा किया। भारत के प्रमुख तकनीकी संस्थानों में से एक में उनकी शैक्षिक पृष्ठभूमि ने उन्हें कंप्यूटर साइंस के सिद्धांतों, एल्गोरिदम, डेटा स्ट्रक्चर और सिस्टम डिज़ाइन में मजबूत आधार प्रदान किया है।
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