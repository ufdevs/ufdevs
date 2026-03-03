export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/', '/*?q=*', '/admin/', '/login/', '/dashboard/'],
            },
            {
                userAgent: 'Googlebot',
                allow: [
                    '/services/web-development',
                    '/services/mobile-apps',
                    '/blog/web-app-development-guide',
                    '/blog/how-much-does-app-development-cost',
                    '/blog/web-development-technologies-comparison',
                    '/blog/category/web-development',
                    '/blog/category/app-development',
                ],
                disallow: ['/api/', '/private/'],
            },
        ],
        sitemap: `${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com'}/sitemap.xml`,
    };
}