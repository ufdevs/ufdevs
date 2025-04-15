export default function sitemap() {
    const baseUrl = 'https://serv.ufdevs.me';
    const currentDate = new Date().toISOString();

    // Main pages
    const routes = [
        '',
        '/about',
        '/about/ramesh-vishwakarma-iit-patna',
        '/services',
        '/services/web-development',
        '/services/mobile-apps',
        '/services/ui-ux-design',
        '/services/backend',
        '/services/cloud',
        '/services/devops',
        '/portfolio',
        '/portfolio/imaxx-tv-ott', // Dedicated iMaxx TV page
        '/pricing',
        '/contact',
        '/blog'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '/about/ramesh-vishwakarma-iit-patna' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route === '/about/ramesh-vishwakarma-iit-patna' ? 0.95 : route === '/portfolio/imaxx-tv-ott' ? 0.9 : 0.8,
    }));

    return [
        ...routes,
        // Additional project pages
        {
            url: `${baseUrl}/portfolio/imaxx-tv-ott`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // Explicitly list the Ramesh profile page with highest priority
        {
            url: `${baseUrl}/about/ramesh-vishwakarma-iit-patna`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.95,
        },
    ];
} 