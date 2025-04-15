export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/private/'],
        },
        sitemap: 'https://serv.ufdevs.me/sitemap.xml',
    };
} 