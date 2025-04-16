import Link from 'next/link';
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';

// This would normally come from a CMS or data source
const getBlogPostsByCategory = (category) => {
    // Sample data - in a real app, this would fetch from an API or database
    const categoryMap = {
        "web-development": {
            title: "Web Development",
            description: "Articles about frontend and backend web development technologies, frameworks, and best practices.",
            posts: [
                {
                    id: 1,
                    title: "Building High-Performance React Applications",
                    slug: "building-high-performance-react-applications",
                    excerpt: "Learn advanced techniques for optimizing React applications, including code splitting, memoization, and efficient state management strategies.",
                    date: "June 15, 2023",
                    category: "Web Development",
                    tags: ["React", "Performance", "JavaScript"],
                    coverImage: "/images/blog/react-performance.jpg"
                },
                {
                    id: 2,
                    title: "Next.js 13: Server Components and the App Router",
                    slug: "nextjs-13-server-components-app-router",
                    excerpt: "Exploring the new server components and app directory structure in Next.js 13 and how they can improve your web application's performance and developer experience.",
                    date: "August 3, 2023",
                    category: "Web Development",
                    tags: ["Next.js", "React", "Server Components"],
                    coverImage: "/images/blog/nextjs-13.jpg"
                },
                {
                    id: 3,
                    title: "Mastering State Management in Modern Web Applications",
                    slug: "mastering-state-management",
                    excerpt: "A comprehensive guide to different state management solutions in web development, from React Context and Redux to Zustand and Jotai.",
                    date: "July 21, 2023",
                    category: "Web Development",
                    tags: ["State Management", "React", "Redux", "Zustand"],
                    coverImage: "/images/blog/state-management.jpg"
                },
                {
                    id: 4,
                    title: "Progressive Web Apps: The Future of Web Development",
                    slug: "progressive-web-apps-future",
                    excerpt: "How PWAs are changing the landscape of web development by providing app-like experiences with the reach of the web.",
                    date: "May 18, 2023",
                    category: "Web Development",
                    tags: ["PWA", "JavaScript", "Service Workers"],
                    coverImage: "/images/blog/pwa.jpg"
                }
            ]
        },
        "app-development": {
            title: "App Development",
            description: "Articles about mobile and cross-platform app development, Flutter, React Native, and native iOS/Android development.",
            posts: [
                {
                    id: 5,
                    title: "Flutter vs React Native in 2023: Which One to Choose?",
                    slug: "flutter-vs-react-native-2023",
                    excerpt: "A detailed comparison of the two most popular cross-platform mobile development frameworks in 2023.",
                    date: "April 10, 2023",
                    category: "App Development",
                    tags: ["Flutter", "React Native", "Mobile Development"],
                    coverImage: "/images/blog/flutter-vs-react-native.jpg"
                },
                {
                    id: 6,
                    title: "Building Beautiful UI Animations in Flutter",
                    slug: "flutter-beautiful-animations",
                    excerpt: "Learn how to create smooth, engaging animations in Flutter apps using built-in animation controllers and packages.",
                    date: "March 5, 2023",
                    category: "App Development",
                    tags: ["Flutter", "Animations", "UI/UX"],
                    coverImage: "/images/blog/flutter-animations.jpg"
                }
            ]
        },
        "backend-development": {
            title: "Backend Development",
            description: "Articles about server-side technologies, databases, APIs, and cloud services for modern web and app development.",
            posts: [
                {
                    id: 7,
                    title: "Building Scalable APIs with Node.js and Express",
                    slug: "scalable-apis-nodejs-express",
                    excerpt: "A comprehensive guide to creating robust, scalable RESTful APIs using Node.js and Express with best practices for production.",
                    date: "February 20, 2023",
                    category: "Backend Development",
                    tags: ["Node.js", "Express", "API", "REST"],
                    coverImage: "/images/blog/nodejs-express.jpg"
                }
            ]
        }
    };

    return categoryMap[category] || null;
};

export async function generateMetadata({ params }) {
    const categoryData = getBlogPostsByCategory(params.category);

    if (!categoryData) {
        return {
            title: "Category Not Found"
        };
    }

    return {
        title: `${categoryData.title} Articles | Web & App Development Blog`,
        description: categoryData.description,
        keywords: [
            `${categoryData.title.toLowerCase()} articles`,
            `${categoryData.title.toLowerCase()} blog`,
            `${categoryData.title.toLowerCase()} tutorials`,
            "web development",
            "app development",
            "programming resources",
            "coding tutorials"
        ],
        openGraph: {
            title: `${categoryData.title} - Web & App Development Articles`,
            description: categoryData.description,
            url: `https://ufdevs.com/blog/category/${params.category}`,
            type: "website"
        }
    };
}

export default function CategoryPage({ params }) {
    const categoryData = getBlogPostsByCategory(params.category);

    if (!categoryData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark-800">
                <div className="text-center p-8">
                    <h1 className="text-3xl font-bold text-white mb-4">Category Not Found</h1>
                    <p className="text-gray-400 mb-6">The category you're looking for doesn't exist or has been moved.</p>
                    <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                        <FiArrowLeft className="mr-2" /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-dark-800">
            {/* Hero Section */}
            <div className="bg-dark-900 py-16 border-b border-dark-700">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-6">
                            <FiArrowLeft className="mr-2" /> Back to All Articles
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {categoryData.title} Articles
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            {categoryData.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                href="/blog"
                                className="px-4 py-2 border border-dark-700 rounded-lg text-gray-300 hover:bg-dark-800 hover:text-white transition-colors"
                            >
                                All Topics
                            </Link>
                            <Link
                                href="/blog/category/web-development"
                                className={`px-4 py-2 border rounded-lg transition-colors ${params.category === 'web-development'
                                        ? 'border-emerald-500 bg-emerald-900/20 text-emerald-400'
                                        : 'border-dark-700 text-gray-300 hover:bg-dark-800 hover:text-white'
                                    }`}
                            >
                                Web Dev
                            </Link>
                            <Link
                                href="/blog/category/app-development"
                                className={`px-4 py-2 border rounded-lg transition-colors ${params.category === 'app-development'
                                        ? 'border-emerald-500 bg-emerald-900/20 text-emerald-400'
                                        : 'border-dark-700 text-gray-300 hover:bg-dark-800 hover:text-white'
                                    }`}
                            >
                                App Dev
                            </Link>
                            <Link
                                href="/blog/category/backend-development"
                                className={`px-4 py-2 border rounded-lg transition-colors ${params.category === 'backend-development'
                                        ? 'border-emerald-500 bg-emerald-900/20 text-emerald-400'
                                        : 'border-dark-700 text-gray-300 hover:bg-dark-800 hover:text-white'
                                    }`}
                            >
                                Backend
                            </Link>
                            <Link
                                href="/blog/category/frontend-development"
                                className={`px-4 py-2 border rounded-lg transition-colors ${params.category === 'frontend-development'
                                        ? 'border-emerald-500 bg-emerald-900/20 text-emerald-400'
                                        : 'border-dark-700 text-gray-300 hover:bg-dark-800 hover:text-white'
                                    }`}
                            >
                                Frontend
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryData.posts.map((post) => (
                        <div key={post.id} className="bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </Link>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center text-gray-400 text-sm ml-auto">
                                        <FiCalendar className="mr-1" size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <Link href={`/blog/${post.slug}`}>
                                    <h2 className="text-xl font-bold text-white mb-3 hover:text-emerald-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-gray-300 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                        <Link
                                            key={tagIndex}
                                            href={`/blog/tag/${tag.toLowerCase().replace(/ /g, "-")}`}
                                            className="text-xs text-gray-400 hover:text-emerald-400 transition-colors"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-block text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                                >
                                    Read Article →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {categoryData.posts.length === 0 && (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-bold text-white mb-4">No Articles Found</h2>
                        <p className="text-gray-400 mb-8">There are currently no articles in this category.</p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                            <FiArrowLeft className="mr-2" /> Browse All Articles
                        </Link>
                    </div>
                )}
            </div>

            {/* SEO Content */}
            <div className="container mx-auto px-4 py-12 border-t border-dark-700">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        {categoryData.title} Expertise by Ramesh Vishwakarma
                    </h2>
                    <div className="prose prose-invert prose-emerald max-w-none">
                        <p>
                            Our {categoryData.title.toLowerCase()} articles are written by industry experts with years of hands-on experience.
                            Led by Ramesh Vishwakarma, an IIT Patna alumnus and seasoned developer, our team provides in-depth tutorials,
                            best practices, and industry insights to help you stay ahead in your development journey.
                        </p>
                        <p>
                            Whether you're a beginner looking to learn the fundamentals or an experienced developer seeking advanced techniques,
                            our comprehensive guides cover everything from basic concepts to cutting-edge technologies in the field of {categoryData.title.toLowerCase()}.
                        </p>
                        <p>
                            Explore our collection of articles to enhance your skills, solve complex problems, and build better software applications.
                            Each article is carefully crafted to provide practical, actionable information that you can apply to your projects immediately.
                        </p>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 py-16 border-y border-emerald-800/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated on {categoryData.title}</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Get the latest {categoryData.title.toLowerCase()} articles, tutorials, and resources delivered to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 bg-dark-800 border border-dark-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-900/30 font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-sm text-gray-400 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
} 