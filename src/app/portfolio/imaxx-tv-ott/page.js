"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink, FiArrowLeft, FiServer, FiMonitor, FiSmartphone, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';

// SEO metadata
export const metadata = {
    title: 'iMaxx TV OTT Platform | UFDev Agency by Ramesh Vishwakarma IIT Patna',
    description: 'Case study of iMaxx TV, a next-generation OTT platform with AVOD, SVOD & TVOD models developed by Ramesh Vishwakarma from IIT Patna. Features user profiles, parental controls, and multi-device streaming.',
    keywords: 'iMaxx TV, OTT platform, streaming service, AVOD, SVOD, TVOD, Ramesh Vishwakarma, IIT Patna, IITP, React, Node.js, Firebase, AWS, OTT development, video streaming platform, content monetization, UFDev, streaming app development, best OTT platform India, streaming app kaise banaye, OTT platform developer India, iMaxx TV Digital Private Limited, रमेश विश्वकर्मा आईआईटी पटना, ओटीटी प्लेटफॉर्म डेवलपर, स्ट्रीमिंग ऐप, video streaming app, Netflix jaisa app, YouTube clone, streaming platform development cost, OTT platform price in India, movie streaming app, web series app, iMaxx TV alternatives, iMaxx TV features, iMaxx TV app download, iMaxx TV subscription, OTT platform for content creators, sell videos online, monetize video content, video streaming business, digital content platform',
    alternates: {
        canonical: 'https://serv.ufdevs.me/portfolio/imaxx-tv-ott',
    },
    openGraph: {
        title: 'iMaxx TV OTT Platform | Developed by Ramesh Vishwakarma (IIT Patna)',
        description: 'Full case study of iMaxx TV streaming platform with technical details, features, and development process by IIT Patna alumnus.',
        url: 'https://serv.ufdevs.me/portfolio/imaxx-tv-ott',
        type: 'article',
        images: [
            {
                url: '/imaxxtv.png',
                width: 1200,
                height: 630,
                alt: 'iMaxx TV OTT Platform',
            }
        ],
    }
};

export default function ImaxxTvPage() {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <FiMonitor className="text-2xl mb-2 text-blue-500" />,
            title: "Multi-Device Streaming",
            description: "Seamless streaming across smart TVs, Android TVs, iOS, Android, and web browsers with synchronized user experience."
        },
        {
            icon: <FiSmartphone className="text-2xl mb-2 text-blue-500" />,
            title: "Offline Viewing",
            description: "Download feature for on-the-go entertainment without internet connection, with efficient storage management."
        },
        {
            icon: <FiUsers className="text-2xl mb-2 text-blue-500" />,
            title: "User Profiles",
            description: "Personalized profiles for different family members with individual recommendations and watch history."
        },
        {
            icon: <FiServer className="text-2xl mb-2 text-blue-500" />,
            title: "Triple Monetization",
            description: "AVOD (Free with Ads), SVOD (Subscription), and TVOD (Pay-Per-View) models for maximum revenue potential."
        }
    ];

    const techStack = [
        { name: "React", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "Firebase", category: "Database/Auth" },
        { name: "AWS", category: "Cloud Infrastructure" },
        { name: "Redux", category: "State Management" },
        { name: "Express", category: "API Server" },
        { name: "MongoDB", category: "Content Database" },
        { name: "HLS Streaming", category: "Video Delivery" },
        { name: "Payment Gateway", category: "Monetization" }
    ];

    return (
        <main className="min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4">
                {/* Project Header */}
                <div className="mb-8">
                    <Link href="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
                        <FiArrowLeft className="mr-2" /> Back to Portfolio
                    </Link>
                    <h1 className="text-4xl font-bold mb-4">iMaxx TV OTT Platform</h1>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        A next-generation Global OTT platform with AVOD, SVOD & TVOD models, built for content creators and audiences with seamless streaming across all devices.
                    </p>
                </div>

                {/* Project Image */}
                <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/imaxxtv.png"
                        alt="iMaxx TV OTT Platform"
                        width={1200}
                        height={630}
                        className="w-full h-auto"
                    />
                </div>

                {/* Project Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                        <div className="prose max-w-none">
                            <p>
                                iMaxx TV Digital is a cutting-edge OTT (Over-The-Top) platform designed to revolutionize content distribution and consumption. The platform enables content creators, filmmakers, and artists to monetize their work while providing viewers with a diverse library of entertainment options.
                            </p>
                            <p>
                                As the lead developer on this project, Ramesh Vishwakarma (IIT Patna alumnus) architected a robust, scalable solution that could handle multiple monetization models simultaneously. The platform supports AVOD (advertising-based), SVOD (subscription-based), and TVOD (transactional/pay-per-view) models, allowing for flexible revenue generation.
                            </p>
                            <p>
                                The platform's architecture was designed with a focus on performance, scalability, and user experience. Advanced caching strategies, load balancing, and optimized content delivery networks ensure smooth streaming even during peak usage times. The content recommendation engine uses machine learning algorithms to analyze user preferences and viewing patterns, delivering personalized suggestions that increase engagement.
                            </p>
                            <p>
                                For content creators, the platform offers comprehensive analytics, revenue tracking, and audience insights. The content management system is intuitive and powerful, allowing for easy uploading, metadata management, and content protection.
                            </p>

                            <h3 className="text-xl font-bold mt-6 mb-2">Key Challenges & Solutions</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Challenge:</strong> Handling multiple monetization models simultaneously.<br />
                                    <strong>Solution:</strong> Custom-built payment processing system integrated with various gateways and subscription management tools.</li>

                                <li><strong>Challenge:</strong> Ensuring high-quality streaming on variable network conditions.<br />
                                    <strong>Solution:</strong> Implemented adaptive bitrate streaming with HLS/DASH protocols and multi-CDN strategy.</li>

                                <li><strong>Challenge:</strong> Content protection and DRM implementation.<br />
                                    <strong>Solution:</strong> Multi-layered security with encryption, tokenized playback, and watermarking.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-4">Project Details</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-gray-700">Client</h4>
                                <p>iMaxx TV Digital Private Limited</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700">Duration</h4>
                                <p>6 months</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700">Lead Developer</h4>
                                <p>Ramesh Vishwakarma (IIT Patna)</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700">Technology Stack</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {techStack.map((tech, index) => (
                                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700">Website</h4>
                                <a
                                    href="https://www.imaxxtvdigital.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 flex items-center"
                                >
                                    imaxxtvdigital.com <FiExternalLink className="ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center">{feature.title}</h3>
                                <p className="text-gray-600 text-center">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Technology Details */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Technology Details</h2>
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {techStack.map((tech, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-md mr-4">
                                        <FiServer className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{tech.name}</h3>
                                        <p className="text-sm text-gray-600">{tech.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SEO-rich technical details section - hidden visually but available for search engines */}
                <div className="mb-16 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">Technical Implementation Details</h2>
                    <p>
                        The iMaxx TV OTT platform was built using a modern tech stack centered around React for the front-end and Node.js for the back-end services. The application architecture follows a microservices pattern to ensure modularity, scalability, and ease of maintenance.
                    </p>

                    <h3 className="text-xl font-bold mt-6 mb-2">Frontend Architecture</h3>
                    <p>
                        The user interface was developed using React.js with Redux for state management. The responsive design ensures optimal viewing experiences across devices from mobile phones to smart TVs. Key frontend technologies include:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>React.js for component-based UI development</li>
                        <li>Redux for centralized state management</li>
                        <li>Styled-components for CSS-in-JS styling</li>
                        <li>React Router for navigation</li>
                        <li>Video.js for cross-browser video playback</li>
                        <li>Progressive Web App (PWA) capabilities for offline access</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-6 mb-2">Backend Architecture</h3>
                    <p>
                        The backend services were built using Node.js with Express.js, with content metadata stored in MongoDB and user data in Firebase. The video content is stored in AWS S3 and delivered through CloudFront CDN with HLS adaptive streaming. Key backend technologies include:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Node.js with Express for RESTful API services</li>
                        <li>MongoDB for content metadata, categories, and relationships</li>
                        <li>Firebase Authentication for user management and access control</li>
                        <li>Firebase Firestore for real-time user data and preferences</li>
                        <li>AWS S3 for video storage with multi-region replication</li>
                        <li>AWS CloudFront for global content delivery</li>
                        <li>AWS MediaConvert for transcoding to multiple formats and resolutions</li>
                        <li>Stripe and PayPal integrations for payment processing</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-6 mb-2">Content Delivery Optimization</h3>
                    <p>
                        To ensure smooth video playback across varying network conditions, the platform implements:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>HTTP Live Streaming (HLS) with adaptive bitrate streaming</li>
                        <li>Multiple quality renditions from 240p to 4K</li>
                        <li>Smart buffering and preloading of content</li>
                        <li>Bandwidth detection and automatic quality adjustment</li>
                        <li>Content-aware encoding to optimize file sizes</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-6 mb-2">Analytics and Recommendation Engine</h3>
                    <p>
                        The platform includes sophisticated analytics and a machine learning-based recommendation system:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>User behavior tracking for personalized recommendations</li>
                        <li>A/B testing framework for UI and feature optimization</li>
                        <li>Content popularity and engagement metrics</li>
                        <li>Revenue analytics across different monetization models</li>
                        <li>Predictive analytics for content acquisition decisions</li>
                    </ul>
                </div>

                {/* Contact CTA */}
                <div className="bg-blue-50 p-8 rounded-xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Interested in a similar solution?</h2>
                    <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                        Whether you're looking to build a streaming platform, e-commerce site, or any other digital product, our team led by Ramesh Vishwakarma (IIT Patna) has the expertise to deliver exceptional results.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Discuss Your Project
                    </Link>
                </div>

                {/* FAQ Section for SEO */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                                <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Schema.org FAQ markup for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer.replace(/<\/?[^>]+(>|$)/g, "") // Strip HTML tags
                                }
                            }))
                        })
                    }}
                />
            </div>
        </main>
    );
}

// FAQ data for SEO targeting common queries in English and Hinglish
const faqs = [
    {
        question: "What is iMaxx TV OTT platform?",
        answer: "iMaxx TV is a next-generation OTT (Over-The-Top) platform that enables content creators, filmmakers, and artists to showcase and monetize their work. It was developed by Ramesh Vishwakarma, an IIT Patna alumnus and founder of UFDev Agency. The platform supports multiple monetization models including AVOD (advertising), SVOD (subscription), and TVOD (pay-per-view)."
    },
    {
        question: "Who developed the iMaxx TV platform?",
        answer: "The iMaxx TV platform was developed by <strong>Ramesh Vishwakarma</strong>, an alumnus of IIT Patna and founder of UFDev Agency. As the lead developer, Ramesh architected the entire platform from concept to deployment, implementing advanced features like multi-device streaming, user profiles, and a sophisticated recommendation engine."
    },
    {
        question: "How much does it cost to develop an OTT platform like iMaxx TV?",
        answer: "The cost of developing an OTT platform like iMaxx TV typically ranges from ₹15-50 lakhs, depending on the features, scale, and complexity required. Factors affecting the cost include the number of platforms supported (web, iOS, Android, smart TVs), customization level, content delivery requirements, and monetization models. At UFDev Agency, we offer tailored solutions that balance quality and cost-effectiveness. Contact us for a personalized quote."
    },
    {
        question: "OTT platform kaise banaye? (How to build an OTT platform?)",
        answer: "OTT platform banane ke liye aapko technical expertise ki zaroorat hoti hai. Main steps include: 1) Content strategy planning, 2) Technology stack selection (like React, Node.js, and AWS), 3) UI/UX design, 4) Development of front-end and back-end systems, 5) Content management system creation, 6) Payment gateway integration, 7) Deployment and testing. UFDev Agency provides end-to-end development services for OTT platforms with expertise from IIT Patna alumnus Ramesh Vishwakarma."
    },
    {
        question: "What technologies were used to build iMaxx TV?",
        answer: "iMaxx TV was built using a modern technology stack including: <ul><li>Frontend: React.js with Redux</li><li>Backend: Node.js with Express</li><li>Database: MongoDB for content and Firebase for user data</li><li>Cloud Infrastructure: AWS S3, CloudFront, and MediaConvert</li><li>Video Streaming: HLS (HTTP Live Streaming) with adaptive bitrate</li><li>Authentication: Firebase Auth</li><li>Payment Processing: Custom implementation with multiple gateways</li></ul>"
    },
    {
        question: "Can I hire Ramesh Vishwakarma from IIT Patna for my project?",
        answer: "Yes, Ramesh Vishwakarma (IIT Patna alumnus) is available for select development projects through UFDev Agency. With expertise in OTT platforms, e-commerce solutions, and custom software development, Ramesh and his team provide end-to-end development services. To discuss your project requirements, simply <a href='/contact' class='text-blue-600 hover:underline'>contact us</a> through our website."
    },
    {
        question: "What features does the iMaxx TV platform offer?",
        answer: "iMaxx TV offers a comprehensive set of features including: <ul><li>Multi-device streaming across web, mobile, and smart TVs</li><li>Personalized user profiles and content recommendations</li><li>Parental controls and content filtering</li><li>Offline viewing capabilities</li><li>Multiple monetization models (AVOD, SVOD, TVOD)</li><li>Content analytics for creators</li><li>Adaptive bitrate streaming for optimal viewing</li><li>Content protection and DRM</li><li>Payment processing and subscription management</li></ul>"
    },
    {
        question: "Netflix jaisa app kitne mein banega? (How much would it cost to build an app like Netflix?)",
        answer: "Netflix jaisa app banane ka cost features aur scale par depend karta hai. Basic OTT platform ₹15-30 lakhs mein ban sakta hai, lekin advanced features aur scale ke saath cost ₹40-80 lakhs tak ja sakta hai. Netflix ke complete ecosystem (including AI recommendations, global CDN, etc.) ke liye ₹1 crore se zyada lag sakta hai. UFDev Agency mein, hum aapke budget ke anusaar custom solutions provide karte hain. Humse contact karein personalized quote ke liye."
    },
    {
        question: "How long does it take to develop an OTT platform?",
        answer: "The development timeline for an OTT platform typically ranges from 4-8 months, depending on the complexity and feature set. A basic platform with essential features can be developed in 3-4 months, while a more comprehensive solution with advanced features might take 6-8 months. The development process includes planning, design, development, testing, and deployment phases."
    },
    {
        question: "रमेश विश्वकर्मा IIT पटना से कौन हैं? (Who is Ramesh Vishwakarma from IIT Patna?)",
        answer: "रमेश विश्वकर्मा IIT पटना के पूर्व छात्र हैं और UFDev Agency के संस्थापक हैं। वे एक अनुभवी फुल-स्टैक डेवलपर हैं जिन्होंने iMaxx TV जैसे OTT प्लेटफॉर्म और कई अन्य डिजिटल प्रोडक्ट्स का निर्माण किया है। उनके पास वेब और मोबाइल ऐप डेवलपमेंट में 5+ वर्षों का अनुभव है, और वे React, Node.js, Firebase, AWS जैसी तकनीकों में विशेषज्ञ हैं। वे अपनी टीम के साथ मुंबई से काम करते हैं और अफोर्डेबल दरों पर हाई-क्वालिटी सॉफ्टवेयर सॉल्यूशंस प्रदान करते हैं।"
    }
]; 