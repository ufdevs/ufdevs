/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    devIndicators: false,
    images: {
        domains: ['images.unsplash.com'],
        formats: ['image/webp'],
    },
    experimental: {
        optimizeCss: true,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },
    // Explicitly configure webpack
    webpack: (config, { isServer }) => {
        // Ensure tailwindcss is available
        config.resolve.alias['@'] = path.join(__dirname, 'src');
        return config;
    },
};

module.exports = nextConfig; 