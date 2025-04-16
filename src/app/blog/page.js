import Link from "next/link";
import { FiCalendar, FiTag, FiArrowRight } from "react-icons/fi";

export const metadata = {
    title: "Web & App Development Blog | Latest Guides & Tutorials",
    description: "Expert web development and app development articles, tutorials, and guides written by IIT Patna alumnus Ramesh Vishwakarma. Latest trends, best practices, and technical insights.",
    keywords: [
        "web development blog",
        "app development articles",
        "React tutorials",
        "Next.js guides",
        "Flutter development",
        "mobile app development",
        "JavaScript frameworks",
        "frontend development",
        "backend development",
        "full stack development",
        "IIT Patna developer",
        "Ramesh Vishwakarma blog",
        "software engineering articles",
        "coding tutorials",
        "tech stack selection"
    ],
    openGraph: {
        title: "Web & App Development Blog | UFDev Technologies",
        description: "Expert web and app development guides written by IIT Patna alumnus Ramesh Vishwakarma",
        url: "https://ufdevs.com/blog",
        siteName: "UFDev Technologies",
        images: [
            {
                url: "https://ufdevs.com/images/blog-og.jpg",
                width: 1200,
                height: 630,
                alt: "UFDev Blog"
            }
        ],
        locale: "en_US",
        type: "website"
    }
};

const blogPosts = [
    {
        id: 1,
        title: "Building High-Performance React Applications",
        slug: "building-high-performance-react-applications",
        excerpt:
            "Learn advanced techniques for optimizing React applications, including code splitting, memoization, and efficient state management strategies.",
        date: "June 15, 2023",
        category: "Web Development",
        tags: ["React", "Performance", "JavaScript"],
        coverImage: "/images/blog/react-performance.jpg"
    },
    {
        id: 2,
        title: "Flutter vs React Native: Choosing the Right Framework for Your Mobile App",
        slug: "flutter-vs-react-native-comparison",
        excerpt:
            "A comprehensive comparison of Flutter and React Native frameworks for cross-platform mobile app development. Analyze performance, developer experience, and use cases.",
        date: "May 22, 2023",
        category: "App Development",
        tags: ["Flutter", "React Native", "Mobile Development"],
        coverImage: "/images/blog/flutter-react-native.jpg"
    },
    {
        id: 3,
        title: "Next.js 13: Server Components and the App Router Explained",
        slug: "nextjs-13-server-components-app-router",
        excerpt:
            "Explore the revolutionary features in Next.js 13, including React Server Components, the new App Router, and how they transform web application architecture.",
        date: "April 10, 2023",
        category: "Web Development",
        tags: ["Next.js", "React", "Server Components"],
        coverImage: "/images/blog/nextjs-13.jpg"
    },
    {
        id: 4,
        title: "Building Scalable Backend Systems with Node.js and MongoDB",
        slug: "scalable-backend-nodejs-mongodb",
        excerpt:
            "Learn how to design and implement scalable backend architectures using Node.js and MongoDB that can handle millions of users and requests.",
        date: "March 5, 2023",
        category: "Backend Development",
        tags: ["Node.js", "MongoDB", "Scalability"],
        coverImage: "/images/blog/backend-scalability.jpg"
    },
    {
        id: 5,
        title: "Progressive Web Apps: The Future of Web and Mobile Integration",
        slug: "progressive-web-apps-future",
        excerpt:
            "Discover how Progressive Web Apps (PWAs) are bridging the gap between web and mobile experiences, offering offline capabilities, push notifications, and app-like interfaces.",
        date: "February 18, 2023",
        category: "Web Development",
        tags: ["PWA", "Mobile Web", "Service Workers"],
        coverImage: "/images/blog/pwa.jpg"
    },
    {
        id: 6,
        title: "Mastering State Management in Modern Web Applications",
        slug: "mastering-state-management",
        excerpt:
            "A deep dive into different state management approaches including Redux, Context API, Zustand, and Jotai. Learn which solution is best for different application scenarios.",
        date: "January 30, 2023",
        category: "Web Development",
        tags: ["State Management", "Redux", "React"],
        coverImage: "/images/blog/state-management.jpg"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-dark-800">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Web & App Development Blog
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Expert insights, tutorials, and best practices in web and mobile application development
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                href="/blog/category/web-development"
                                className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full hover:bg-emerald-600/30 transition-colors"
                            >
                                Web Development
                            </Link>
                            <Link
                                href="/blog/category/app-development"
                                className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full hover:bg-emerald-600/30 transition-colors"
                            >
                                App Development
                            </Link>
                            <Link
                                href="/blog/category/backend-development"
                                className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full hover:bg-emerald-600/30 transition-colors"
                            >
                                Backend Development
                            </Link>
                            <Link
                                href="/blog/category/frontend-development"
                                className="px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full hover:bg-emerald-600/30 transition-colors"
                            >
                                Frontend Development
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">
                        Latest Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
                                            {post.category}
                                        </div>
                                    </div>
                                </Link>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-400 mb-3">
                                        <FiCalendar className="mr-2" />
                                        <span>{post.date}</span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`}>
                                        <h3 className="text-xl font-bold text-white mb-3 hover:text-emerald-400 transition-colors">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.map((tag, i) => (
                                            <Link
                                                key={i}
                                                href={`/blog/tag/${tag.toLowerCase().replace(/ /g, "-")}`}
                                                className="text-xs px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded-full hover:bg-emerald-900/50 transition-colors"
                                            >
                                                <FiTag className="inline mr-1" /> {tag}
                                            </Link>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-emerald-400 hover:text-emerald-300 inline-flex items-center text-sm font-medium"
                                    >
                                        Read Full Article <FiArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-dark-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-2xl p-8 border border-emerald-800/50">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Subscribe to Our Development Newsletter
                            </h2>
                            <p className="text-gray-300">
                                Get the latest web and app development tips, tutorials, and resources directly in your inbox.
                            </p>
                        </div>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-3 bg-dark-800 border border-dark-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-900/30 font-medium whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-400 mt-4 text-center">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>

            {/* SEO Content */}
            <section className="py-16 bg-dark-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Expert Web and App Development Resources
                        </h2>
                        <div className="prose prose-invert prose-emerald max-w-none">
                            <p>
                                Welcome to UFDev's comprehensive blog on web and app development. Our articles are written by industry professionals led by Ramesh Vishwakarma, an IIT Patna alumnus with expertise in modern development technologies. Whether you're a beginner learning the fundamentals or an experienced developer looking to enhance your skills, our blog provides valuable insights and practical guidance.
                            </p>
                            <p>
                                We cover a wide range of topics including frontend frameworks like React, Angular, and Vue.js; backend technologies such as Node.js, Django, and Laravel; mobile app development with Flutter, React Native, and Swift; database management; cloud deployment; performance optimization; and much more. Our tutorials are detailed, easy to follow, and include real-world examples that you can apply to your own projects.
                            </p>
                            <p>
                                Stay updated with the latest trends, best practices, and emerging technologies in the rapidly evolving field of web and app development. Subscribe to our newsletter to receive notifications about new articles, tutorials, and resources to help you build better digital experiences.
                            </p>
                            <h3>Why Choose UFDev for Web and App Development?</h3>
                            <p>
                                At UFDev, we combine technical expertise with a deep understanding of business needs to deliver exceptional web and mobile applications. Our development approach focuses on creating scalable, maintainable, and high-performance solutions that provide real value to users and businesses alike.
                            </p>
                            <p>
                                Looking for professional web or app development services? <Link href="/contact" className="text-emerald-400 hover:text-emerald-300">Contact us</Link> today to discuss your project requirements and discover how we can help turn your ideas into reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 