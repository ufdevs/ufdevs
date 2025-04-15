export default function generateJsonLd() {
    const baseUrl = 'https://serv.ufdevs.me';

    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'UFDev Agency',
        url: baseUrl,
        logo: `${baseUrl}/ufdev.llc.png`,
        description: 'Professional web and mobile app development services led by IIT Patna alumnus Ramesh Vishwakarma. Specializing in OTT platforms, React.js, Node.js applications, and custom software development.',
        founder: {
            '@type': 'Person',
            name: 'Ramesh Vishwakarma',
            jobTitle: 'Founder & Lead Developer',
            alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Indian Institute of Technology Patna'
            },
            url: `${baseUrl}/about/ramesh-vishwakarma-iit-patna`
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '402108',
            addressCountry: 'IN'
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-7510060787',
            email: 'info@ufdev.com',
            contactType: 'customer service'
        },
        sameAs: [
            'https://github.com/ufdevs',
            'https://www.linkedin.com/company/ufdev-agency'
        ],
        // Services offered by the company
        services: [
            {
                '@type': 'Service',
                name: 'Web Application Development',
                description: 'Professional web app development using React.js, Next.js, and modern web technologies',
                url: `${baseUrl}/services/web-development`,
                provider: {
                    '@type': 'Organization',
                    name: 'UFDev Agency',
                    url: baseUrl
                }
            },
            {
                '@type': 'Service',
                name: 'Mobile App Development',
                description: 'Cross-platform mobile applications using React Native, Flutter, and native technologies',
                url: `${baseUrl}/services/mobile-apps`,
                provider: {
                    '@type': 'Organization',
                    name: 'UFDev Agency',
                    url: baseUrl
                }
            },
            {
                '@type': 'Service',
                name: 'OTT Platform Development',
                description: 'Custom streaming platforms with multiple monetization models (AVOD, SVOD & TVOD)',
                url: `${baseUrl}/portfolio/imaxx-tv-ott`,
                provider: {
                    '@type': 'Organization',
                    name: 'UFDev Agency',
                    url: baseUrl
                }
            },
            {
                '@type': 'Service',
                name: 'Backend Development Services',
                description: 'Scalable backend solutions using Node.js, Express, MongoDB, Firebase, and AWS',
                url: `${baseUrl}/services/backend`,
                provider: {
                    '@type': 'Organization',
                    name: 'UFDev Agency',
                    url: baseUrl
                }
            }
        ],
        // Featured project as a CreativeWork
        makesOffer: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'CreativeWork',
                    name: 'iMaxx TV OTT Platform',
                    description: 'Next-generation Global OTT platform with AVOD, SVOD & TVOD models for content creators and audiences',
                    url: `${baseUrl}/portfolio/imaxx-tv-ott`,
                    creator: {
                        '@type': 'Person',
                        name: 'Ramesh Vishwakarma',
                        jobTitle: 'Lead Developer',
                        alumniOf: 'IIT Patna'
                    }
                }
            }
        ],
        // Local business info for local SEO
        '@graph': [
            {
                '@type': 'LocalBusiness',
                name: 'UFDev Agency',
                image: `${baseUrl}/ufdev.llc.png`,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Vasai West',
                    addressLocality: 'Mumbai',
                    addressRegion: 'Maharashtra',
                    postalCode: '402108',
                    addressCountry: 'IN'
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '19.3920',
                    longitude: '72.8262'
                },
                openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
                    ],
                    opens: '09:00',
                    closes: '18:00'
                },
                telephone: '+91-7510060787',
                priceRange: '₹₹'
            }
        ]
    };
} 