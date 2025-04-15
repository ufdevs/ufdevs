export default function sitemap() {
    const baseUrl = 'https://ufdevs.com';
    const currentDate = new Date().toISOString();

    // Main pages with improved priorities
    const routes = [
        // Core pages with highest priorities
        { route: '', priority: 1.0, changeFrequency: 'weekly' },
        { route: '/about', priority: 0.9, changeFrequency: 'weekly' },
        { route: '/services', priority: 0.95, changeFrequency: 'weekly' },
        { route: '/portfolio', priority: 0.9, changeFrequency: 'weekly' },
        { route: '/pricing', priority: 0.9, changeFrequency: 'weekly' },
        { route: '/contact', priority: 0.95, changeFrequency: 'weekly' },
        { route: '/blog', priority: 0.85, changeFrequency: 'weekly' },

        // Profile page with very high priority - this is your key differentiator
        { route: '/about/ramesh-vishwakarma-iit-patna', priority: 0.98, changeFrequency: 'daily' },

        // Service pages with detailed priorities - boost web and app development pages
        { route: '/services/web-development', priority: 0.98, changeFrequency: 'weekly' },
        { route: '/services/mobile-apps', priority: 0.98, changeFrequency: 'weekly' },
        { route: '/services/ott-development', priority: 0.95, changeFrequency: 'weekly' },
        { route: '/services/ui-ux-design', priority: 0.90, changeFrequency: 'weekly' },
        { route: '/services/backend', priority: 0.92, changeFrequency: 'weekly' },
        { route: '/services/cloud', priority: 0.88, changeFrequency: 'weekly' },
        { route: '/services/devops', priority: 0.88, changeFrequency: 'weekly' },

        // Featured project page
        { route: '/portfolio/imaxx-tv-ott', priority: 0.93, changeFrequency: 'monthly' },

        // Blog posts - give higher priority to web/app development content
        { route: '/blog/web-app-development-guide', priority: 0.98, changeFrequency: 'weekly' },
        { route: '/blog/how-much-does-app-development-cost', priority: 0.97, changeFrequency: 'weekly' },
        { route: '/blog/web-development-technologies-comparison', priority: 0.97, changeFrequency: 'weekly' },
        { route: '/blog/ramesh-vishwakarma-iit-patna-journey-to-tech-success', priority: 0.92, changeFrequency: 'weekly' },
    ];

    // Map routes to the format expected by Next.js
    return routes.map(({ route, priority, changeFrequency }) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency,
        priority,
    }));
} 