import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

export const metadata = {
    title: 'Web & App Development Blog | Latest Guides & Tutorials',
    description: 'Expert web development and app development articles, tutorials, and guides written by IIT Patna alumnus Ramesh Vishwakarma. Latest trends, best practices, and technical insights.',
    keywords: 'web development blog, app development articles, web development guides, mobile app tutorials, React tutorials, Node.js guides, Flutter tutorials, frontend development blog, web dev best practices, app development resources, website development tips, tech blog, programming articles, coding tutorials, software development blog',
};

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: 'Complete Guide to Web & App Development in 2024',
            slug: 'web-app-development-guide',
            excerpt: 'Learn everything about web and mobile app development, from planning to deployment. Compare technologies, understand costs, and discover best practices.',
            date: 'April 15, 2024',
            category: 'Development Guides',
            readTime: '15 min read',
            image: '/images/blog/web-app-development.jpg',
            gradient: 'from-blue-500 to-emerald-500',
            featured: true
        },
        {
            id: 2,
            title: 'How Much Does App Development Cost in 2024?',
            slug: 'how-much-does-app-development-cost',
            excerpt: 'A detailed breakdown of mobile app development costs based on complexity, features, platforms, and design requirements. Get accurate estimates for your project.',
            date: 'April 18, 2024',
            category: 'Cost Guides',
            readTime: '12 min read',
            image: '/images/blog/app-development-cost.jpg',
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            id: 3,
            title: 'React vs Angular vs Vue: Complete Frontend Framework Comparison',
            slug: 'web-development-technologies-comparison',
            excerpt: 'Compare the most popular frontend frameworks to determine which is right for your next project. Comprehensive analysis of features, performance, and use cases.',
            date: 'April 20, 2024',
            category: 'Technology Comparison',
            readTime: '14 min read',
            image: '/images/blog/framework-comparison.jpg',
            gradient: 'from-green-500 to-blue-600'
        },
        {
            id: 4,
            title: 'The Journey of Ramesh Vishwakarma: From IIT Patna to Tech Success',
            slug: 'ramesh-vishwakarma-iit-patna-journey-to-tech-success',
            excerpt: 'Learn about Ramesh Vishwakarma\'s journey from IIT Patna to becoming a successful tech entrepreneur and developer, creating innovative solutions like iMaxx TV.',
            date: 'March 25, 2024',
            category: 'Success Stories',
            readTime: '10 min read',
            image: '/images/blog/ramesh-journey.jpg',
            gradient: 'from-yellow-400 to-orange-500'
        }
    ];

    return (
        <main className="pt-28 pb-16 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Web & App Development Blog</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Expert guides, tutorials and insights on web development, mobile app development, and the latest technologies from our team led by IIT Patna alumnus Ramesh Vishwakarma.
                    </p>
                </div>

                {/* Featured Post */}
                {blogPosts.filter(post => post.featured).map(post => (
                    <div key={post.id} className="mb-20">
                        <div className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl overflow-hidden shadow-xl">
                            <div className="p-8 md:p-12 text-white">
                                <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm mb-6">
                                    Featured Article
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h2>
                                <p className="text-xl opacity-90 mb-6 max-w-3xl">{post.excerpt}</p>
                                <div className="flex flex-wrap items-center gap-6 mb-8">
                                    <span className="flex items-center">
                                        <FiCalendar className="mr-2" /> {post.date}
                                    </span>
                                    <span className="flex items-center">
                                        <FiClock className="mr-2" /> {post.readTime}
                                    </span>
                                    <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm">
                                        {post.category}
                                    </span>
                                </div>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
                                >
                                    Read Full Article <FiArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Other Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.filter(post => !post.featured).map(post => (
                        <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                                <div className={`h-48 bg-gradient-to-r ${post.gradient} flex items-center justify-center p-6`}>
                                    <h3 className="text-white text-xl font-bold text-center">{post.title}</h3>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <span className="flex items-center mr-4">
                                            <FiCalendar className="mr-1" /> {post.date}
                                        </span>
                                        <span className="flex items-center">
                                            <FiClock className="mr-1" /> {post.readTime}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700">
                                            {post.category}
                                        </span>
                                        <span className="text-blue-600 group-hover:text-blue-800 font-medium flex items-center">
                                            Read more <FiArrowRight className="ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-gray-50 rounded-xl p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help With Your Web or App Development Project?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Our team of expert developers led by IIT Patna alumnus Ramesh Vishwakarma can help bring your vision to life with cutting-edge technology and best practices.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Get a Free Consultation <FiArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>

                {/* SEO-friendly footer section with keyword-rich links */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-6">Explore Our Development Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Web Development</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/services/web-development" className="text-blue-600 hover:text-blue-800">
                                        Custom Website Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/web-development#react" className="text-blue-600 hover:text-blue-800">
                                        React.js Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/web-development#ecommerce" className="text-blue-600 hover:text-blue-800">
                                        E-commerce Website Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/web-development#frontend" className="text-blue-600 hover:text-blue-800">
                                        Frontend Development Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Mobile App Development</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/services/mobile-apps" className="text-blue-600 hover:text-blue-800">
                                        iOS App Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/mobile-apps#android" className="text-blue-600 hover:text-blue-800">
                                        Android App Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/mobile-apps#flutter" className="text-blue-600 hover:text-blue-800">
                                        Flutter App Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/mobile-apps#react-native" className="text-blue-600 hover:text-blue-800">
                                        React Native Development
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Other Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/services/ott-development" className="text-blue-600 hover:text-blue-800">
                                        OTT Platform Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ui-ux-design" className="text-blue-600 hover:text-blue-800">
                                        UI/UX Design Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/backend" className="text-blue-600 hover:text-blue-800">
                                        Backend Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/cloud" className="text-blue-600 hover:text-blue-800">
                                        Cloud Integration Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 