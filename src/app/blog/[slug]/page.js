import Link from 'next/link';
import { FiCalendar, FiUser, FiTag, FiArrowLeft, FiShare2 } from 'react-icons/fi';

// This would normally come from a CMS or data source
const getBlogPostBySlug = (slug) => {
    // Sample data - in a real app, this would fetch from an API or database
    const posts = {
        "building-high-performance-react-applications": {
            title: "Building High-Performance React Applications",
            date: "June 15, 2023",
            author: "Ramesh Vishwakarma",
            authorImage: "/images/team/ramesh.jpg",
            category: "Web Development",
            tags: ["React", "Performance", "JavaScript"],
            coverImage: "/images/blog/react-performance.jpg",
            content: `
        <h2>Introduction to React Performance Optimization</h2>
        <p>As React applications grow in complexity, performance optimization becomes increasingly important. In this comprehensive guide, we'll explore advanced techniques for improving the speed and responsiveness of your React applications.</p>
        
        <h3>Understanding React's Rendering Process</h3>
        <p>Before diving into optimization techniques, it's crucial to understand how React's rendering process works. React uses a virtual DOM to efficiently update the UI. When state or props change, React creates a new virtual DOM tree, compares it with the previous one (a process called "diffing"), and then updates only the parts of the actual DOM that have changed.</p>
        
        <p>However, this process can become expensive for complex components or when updates happen frequently. That's where optimization comes in.</p>
        
        <h3>1. Code Splitting with React.lazy and Suspense</h3>
        <p>Code splitting is a technique that allows you to split your code into smaller chunks that can be loaded on demand. This reduces the initial load time of your application by only loading the code that's needed for the current view.</p>
        
        <pre><code>
        // Before code splitting
        import HeavyComponent from './HeavyComponent';
        
        // After code splitting
        const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
        
        function MyComponent() {
          return (
            &lt;React.Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
              &lt;HeavyComponent /&gt;
            &lt;/React.Suspense&gt;
          );
        }
        </code></pre>
        
        <h3>2. Memoization with React.memo, useMemo, and useCallback</h3>
        <p>Memoization is a technique used to prevent unnecessary re-renders by caching the results of expensive function calls and only recomputing them when the inputs change.</p>
        
        <p>React provides several APIs for memoization:</p>
        
        <ul>
          <li><strong>React.memo</strong>: A higher-order component that memoizes component renders</li>
          <li><strong>useMemo</strong>: A hook that memoizes computed values</li>
          <li><strong>useCallback</strong>: A hook that memoizes callback functions</li>
        </ul>
        
        <pre><code>
        // Using React.memo
        const MemoizedComponent = React.memo(function MyComponent(props) {
          // Only re-renders if props change
          return &lt;div&gt;{props.value}&lt;/div&gt;;
        });
        
        // Using useMemo
        function MyComponent({ data }) {
          const processedData = useMemo(() => {
            // Expensive calculation
            return data.map(item => item * 2).filter(item => item > 10);
          }, [data]); // Only recalculate when data changes
          
          return &lt;div&gt;{processedData.length} items processed&lt;/div&gt;;
        }
        
        // Using useCallback
        function ParentComponent() {
          const [count, setCount] = useState(0);
          
          const handleClick = useCallback(() => {
            setCount(c => c + 1);
          }, []); // Function is created once and reused
          
          return &lt;ChildComponent onClick={handleClick} /&gt;;
        }
        </code></pre>
        
        <h3>3. Virtualization for Large Lists</h3>
        <p>When rendering large lists or tables, consider using virtualization to only render items that are currently visible in the viewport. Libraries like react-window and react-virtualized can help implement this technique.</p>
        
        <h3>4. Optimizing Context API Usage</h3>
        <p>While Context API is a powerful tool for state management, it can cause unnecessary re-renders if not used correctly. Split your contexts based on how frequently they change, and use multiple smaller contexts instead of a single large one.</p>
        
        <h3>5. Debouncing and Throttling Event Handlers</h3>
        <p>For events that fire frequently (like resize, scroll, or input changes), use debouncing or throttling to limit how often your handlers are called.</p>
        
        <h2>Measuring Performance</h2>
        <p>Before and after applying optimizations, it's important to measure performance to ensure your changes are actually improving the user experience. Use tools like React DevTools Profiler, Lighthouse, and Chrome Performance tab to identify bottlenecks and verify improvements.</p>
        
        <h2>Conclusion</h2>
        <p>Optimizing React applications is an ongoing process that requires a good understanding of how React works under the hood. By applying these techniques thoughtfully and measuring their impact, you can create React applications that are both feature-rich and performant.</p>
        
        <p>Remember that premature optimization can lead to more complex, harder-to-maintain code. Always measure first, optimize where necessary, and keep the code readable and maintainable.</p>
      `,
            metadata: {
                title: "Building High-Performance React Applications | Web Development Guide",
                description: "Learn advanced techniques for optimizing React applications, including code splitting, memoization, and efficient state management strategies for better performance.",
                keywords: [
                    "React performance optimization",
                    "React memoization",
                    "React code splitting",
                    "useMemo useCallback",
                    "React rendering optimization",
                    "React virtual DOM",
                    "optimize React application",
                    "React performance tips",
                    "frontend optimization",
                    "JavaScript performance"
                ],
                openGraph: {
                    title: "Building High-Performance React Applications",
                    description: "Advanced techniques for optimizing React apps by IIT Patna alumnus Ramesh Vishwakarma",
                    url: "https://ufdevs.com/blog/building-high-performance-react-applications",
                    type: "article",
                    publishedTime: "2023-06-15T10:00:00Z",
                    authors: ["Ramesh Vishwakarma"],
                    tags: ["React", "Performance", "JavaScript", "Frontend Development"]
                }
            },
            relatedPosts: [
                "nextjs-13-server-components-app-router",
                "mastering-state-management",
                "progressive-web-apps-future"
            ]
        },
        // Other blog posts would be defined here
    };

    return posts[slug] || null;
};

export async function generateMetadata({ params }) {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Blog Post Not Found"
        };
    }

    return post.metadata;
}

export default function BlogPostPage({ params }) {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark-800">
                <div className="text-center p-8">
                    <h1 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>
                    <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
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
            <div className="relative h-96 bg-dark-900">
                <div className="absolute inset-0">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-800"></div>
                </div>
                <div className="container mx-auto px-4 h-full flex items-end pb-16 relative z-10">
                    <div className="max-w-4xl">
                        <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-4">
                            <FiArrowLeft className="mr-2" /> Back to Blog
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-gray-300">
                            <div className="flex items-center">
                                <FiCalendar className="mr-2" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                                <FiUser className="mr-2" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                                <FiTag className="mr-2" />
                                <span>{post.category}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="bg-dark-900 rounded-xl p-8 shadow-xl mb-12">
                            <div className="flex items-center mb-8 border-b border-dark-700 pb-6">
                                <img
                                    src={post.authorImage}
                                    alt={post.author}
                                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-emerald-500"
                                />
                                <div>
                                    <p className="font-medium text-white">{post.author}</p>
                                    <p className="text-sm text-gray-400">IIT Patna Alumnus, Full Stack Developer</p>
                                </div>
                                <div className="ml-auto">
                                    <button className="flex items-center text-emerald-400 hover:text-emerald-300">
                                        <FiShare2 className="mr-2" /> Share
                                    </button>
                                </div>
                            </div>

                            <article className="prose prose-invert prose-emerald max-w-none lg:prose-lg">
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </article>

                            <div className="mt-12 pt-8 border-t border-dark-700">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <Link
                                            key={index}
                                            href={`/blog/tag/${tag.toLowerCase().replace(/ /g, "-")}`}
                                            className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full hover:bg-emerald-900/50 transition-colors text-sm"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="bg-dark-900 rounded-xl p-8 shadow-xl mb-12">
                            <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
                            <div className="flex items-start">
                                <img
                                    src={post.authorImage}
                                    alt={post.author}
                                    className="w-20 h-20 rounded-full object-cover mr-6 border-2 border-emerald-500"
                                />
                                <div>
                                    <h4 className="text-lg font-medium text-white mb-2">{post.author}</h4>
                                    <p className="text-gray-300 mb-4">
                                        Ramesh Vishwakarma is an alumnus of IIT Patna with extensive experience in web and mobile application development.
                                        He specializes in React, Next.js, Flutter, and backend technologies.
                                    </p>
                                    <Link
                                        href="/about/ramesh-vishwakarma-iit-patna"
                                        className="text-emerald-400 hover:text-emerald-300 inline-flex items-center"
                                    >
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        {/* Related Posts */}
                        <div className="bg-dark-900 rounded-xl p-6 shadow-xl mb-8">
                            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
                            <div className="space-y-6">
                                {post.relatedPosts.map((slug, index) => {
                                    const relatedPost = getBlogPostBySlug(slug);
                                    if (!relatedPost) return null;

                                    return (
                                        <div key={index} className="flex items-start">
                                            <img
                                                src={relatedPost.coverImage}
                                                alt={relatedPost.title}
                                                className="w-20 h-16 object-cover rounded-md mr-4"
                                            />
                                            <div>
                                                <Link
                                                    href={`/blog/${slug}`}
                                                    className="text-white hover:text-emerald-400 transition-colors font-medium line-clamp-2"
                                                >
                                                    {relatedPost.title}
                                                </Link>
                                                <p className="text-xs text-gray-400 mt-1">{relatedPost.date}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl p-6 border border-emerald-800/50 shadow-xl mb-8">
                            <h3 className="text-xl font-bold text-white mb-3">Subscribe to Our Newsletter</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Get the latest web and app development articles delivered to your inbox.
                            </p>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 bg-dark-800 border border-dark-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-900/30 font-medium"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        {/* Categories */}
                        <div className="bg-dark-900 rounded-xl p-6 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/blog/category/web-development"
                                        className="flex items-center justify-between text-gray-300 hover:text-emerald-400 transition-colors"
                                    >
                                        <span>Web Development</span>
                                        <span className="bg-dark-800 text-xs px-2 py-1 rounded-md">12</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog/category/app-development"
                                        className="flex items-center justify-between text-gray-300 hover:text-emerald-400 transition-colors"
                                    >
                                        <span>App Development</span>
                                        <span className="bg-dark-800 text-xs px-2 py-1 rounded-md">8</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog/category/backend-development"
                                        className="flex items-center justify-between text-gray-300 hover:text-emerald-400 transition-colors"
                                    >
                                        <span>Backend Development</span>
                                        <span className="bg-dark-800 text-xs px-2 py-1 rounded-md">10</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog/category/frontend-development"
                                        className="flex items-center justify-between text-gray-300 hover:text-emerald-400 transition-colors"
                                    >
                                        <span>Frontend Development</span>
                                        <span className="bg-dark-800 text-xs px-2 py-1 rounded-md">15</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog/category/mobile-development"
                                        className="flex items-center justify-between text-gray-300 hover:text-emerald-400 transition-colors"
                                    >
                                        <span>Mobile Development</span>
                                        <span className="bg-dark-800 text-xs px-2 py-1 rounded-md">7</span>
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