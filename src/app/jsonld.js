export default function generateJsonLd() {
    const baseUrl = 'https://serv.ufdevs.me';

    return {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'ProfessionalService', 'SoftwareApplication'],
        name: 'UFDev Agency by Ramesh Vishwakarma (IIT Patna Alumnus)',
        alternateName: ['UFDev LLC', 'Ramesh Vishwakarma Tech Services'],
        url: baseUrl,
        logo: `${baseUrl}/ufdev.llc.png`,
        description: 'Professional web and mobile app development services led by IIT Patna alumnus Ramesh Vishwakarma. Specializing in OTT platforms, React.js, Node.js applications, and custom software development.',
        slogan: "Expert Tech Services by IIT Patna's Finest",
        keywords: "OTT platform development, web development, mobile app development, React, Node.js, Flutter, IIT Patna, Ramesh Vishwakarma",
        foundingDate: "2020",
        founder: {
            '@type': 'Person',
            name: 'Ramesh Vishwakarma',
            jobTitle: 'Founder & Lead Developer',
            alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Indian Institute of Technology Patna',
                sameAs: "https://www.iitp.ac.in/"
            },
            url: `${baseUrl}/about/ramesh-vishwakarma-iit-patna`,
            description: "Ramesh Vishwakarma is an IIT Patna alumnus with expertise in web development, mobile app development, and OTT platform creation. Creator of iMaxx TV and founder of UFDev Agency.",
            knowsAbout: ["Web Development", "Mobile App Development", "OTT Platforms", "React", "Node.js", "Firebase", "AWS", "Flutter"],
            sameAs: [
                "https://github.com/ufdevs",
                "https://www.linkedin.com/in/ramesh-vishwakarma-iitp"
            ],
            nationality: "Indian"
        },
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Vasai West',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '402108',
            addressCountry: 'IN'
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: '19.3920',
                longitude: '72.8262'
            },
            geoRadius: '50000',
            description: "Serving Mumbai, Maharashtra, India and clients worldwide"
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-7510060787',
            email: 'info@ufdev.com',
            contactType: 'customer service',
            availableLanguage: ['English', 'Hindi'],
            contactOption: "TollFree"
        },
        sameAs: [
            'https://github.com/ufdevs',
            'https://www.linkedin.com/company/ufdev-agency',
            'https://www.facebook.com/ufdevagency',
            'https://twitter.com/ufdevagency'
        ],
        // Service potentialAction
        potentialAction: [
            {
                '@type': 'SearchAction',
                'target': {
                    '@type': 'EntryPoint',
                    'urlTemplate': `${baseUrl}/search?q={search_term_string}`
                },
                'query-input': 'required name=search_term_string'
            },
            {
                '@type': 'CommunicateAction',
                'actionStatus': 'PotentialActionStatus',
                'object': 'Get a quote for your project',
                'target': {
                    '@type': 'EntryPoint',
                    'urlTemplate': `${baseUrl}/contact`
                }
            }
        ],
        // Services offered by the company
        services: [
            {
                '@type': 'Service',
                name: 'Web Application Development',
                description: 'Professional web app development using React.js, Next.js, and modern web technologies. Our services include e-commerce websites, dashboards, and custom web applications.',
                url: `${baseUrl}/services/web-development`,
                provider: {
                    '@type': 'Organization',
                    name: 'UFDev Agency by Ramesh Vishwakarma (IIT Patna)',
                    url: baseUrl
                },
                areaServed: "Worldwide",
                serviceType: "Web Development",
                offers: {
                    '@type': 'Offer',
                    price: '20000',
                    priceCurrency: 'INR',
                    priceValidUntil: '2024-12-31',
                    availability: 'https://schema.org/InStock'
                }
            },
            {
                '@type': 'Service',
                name: 'Mobile App Development',
                description: 'Cross-platform mobile applications using React Native, Flutter, and native technologies. We create apps for iOS and Android with beautiful UI/UX and performance.',
                url: `${baseUrl}/services/mobile-apps`,
                provider: {
                    '@type': 'Organization',
                    name: 'UFDev Agency by Ramesh Vishwakarma (IIT Patna)',
                    url: baseUrl
                },
                areaServed: "Worldwide",
                serviceType: "Mobile App Development",
                offers: {
                    '@type': 'Offer',
                    price: '25000',
                    priceCurrency: 'INR',
                    priceValidUntil: '2024-12-31',
                    availability: 'https://schema.org/InStock'
                }
            },
            {
                '@type': 'Service',
                name: 'OTT Platform Development',
                description: 'Custom streaming platforms with multiple monetization models (AVOD, SVOD & TVOD). Similar to Netflix, Disney+, and Amazon Prime Video but customized for your content.',
                url: `${baseUrl}/portfolio/imaxx-tv-ott`,
                provider: {
                    '@type': 'Organization',
                    name: 'UFDev Agency by Ramesh Vishwakarma (IIT Patna)',
                    url: baseUrl
                },
                areaServed: "Worldwide",
                serviceType: "OTT Platform Development",
                offers: {
                    '@type': 'Offer',
                    price: '75000',
                    priceCurrency: 'INR',
                    priceValidUntil: '2024-12-31',
                    availability: 'https://schema.org/InStock'
                }
            },
            {
                '@type': 'Service',
                name: 'Backend Development Services',
                description: 'Scalable backend solutions using Node.js, Express, MongoDB, Firebase, and AWS. APIs, databases, authentication, and cloud services for your applications.',
                url: `${baseUrl}/services/backend`,
                provider: {
                    '@type': 'Organization',
                    name: 'UFDev Agency by Ramesh Vishwakarma (IIT Patna)',
                    url: baseUrl
                },
                areaServed: "Worldwide",
                serviceType: "Backend Development",
                offers: {
                    '@type': 'Offer',
                    price: '30000',
                    priceCurrency: 'INR',
                    priceValidUntil: '2024-12-31',
                    availability: 'https://schema.org/InStock'
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
                    description: 'Next-generation Global OTT platform with AVOD, SVOD & TVOD models for content creators and audiences. Similar to Netflix but with multiple monetization options.',
                    url: `${baseUrl}/portfolio/imaxx-tv-ott`,
                    creator: {
                        '@type': 'Person',
                        name: 'Ramesh Vishwakarma',
                        jobTitle: 'Lead Developer',
                        alumniOf: 'IIT Patna'
                    },
                    dateCreated: "2022",
                    genre: "OTT Streaming Platform",
                    about: "Video Streaming Service"
                },
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: '75000',
                    priceCurrency: 'INR',
                    validFrom: '2023-01-01'
                }
            }
        ],
        // Structured FAQ for high-value keywords
        mainEntity: [
            {
                "@type": "Question",
                "name": "Who is Ramesh Vishwakarma from IIT Patna?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramesh Vishwakarma is an alumnus of the prestigious Indian Institute of Technology Patna (IIT Patna) with expertise in web development, mobile app development, and OTT platform creation. He is the founder of UFDev Agency and the creator of iMaxx TV, an innovative OTT platform with multiple monetization options."
                }
            },
            {
                "@type": "Question",
                "name": "How much does it cost to develop an OTT platform like Netflix?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Developing a custom OTT platform with features similar to Netflix typically costs between ₹75,000 to ₹5,00,000 depending on features, scale, and complexity. At UFDev Agency, led by IIT Patna alumnus Ramesh Vishwakarma, we provide cost-effective solutions starting at ₹75,000 with essential features like user management, content libraries, payment gateways, and adaptive streaming."
                }
            },
            {
                "@type": "Question",
                "name": "What services does UFDev Agency provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "UFDev Agency, founded by Ramesh Vishwakarma (IIT Patna), offers web development (React.js, Next.js), mobile app development (Flutter, React Native), OTT platform development (like iMaxx TV), backend services (Node.js, Firebase), UI/UX design, and e-commerce solutions. We provide end-to-end development from concept to deployment with ongoing maintenance."
                }
            },
            {
                "@type": "Question",
                "name": "Can I hire Ramesh Vishwakarma from IIT Patna for my project?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can hire Ramesh Vishwakarma, an IIT Patna alumnus, for your web or mobile app development project. Contact UFDev Agency through our website to discuss your project requirements and get a quote. We specialize in custom software development, OTT platforms, e-commerce solutions, and enterprise applications."
                }
            }
        ],
        // Local business info for local SEO
        '@graph': [
            {
                '@type': 'LocalBusiness',
                name: 'UFDev Agency by Ramesh Vishwakarma (IIT Patna Alumnus)',
                image: `${baseUrl}/ufdev.llc.png`,
                priceRange: "₹₹",
                telephone: "+91-7510060787",
                email: "info@ufdev.com",
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
                sameAs: [
                    'https://github.com/ufdevs',
                    'https://www.linkedin.com/company/ufdev-agency'
                ],
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Web and Mobile App Development Services',
                    itemListElement: [
                        {
                            '@type': 'OfferCatalogItem',
                            name: 'Web Development Services',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Custom Website Development'
                            }
                        },
                        {
                            '@type': 'OfferCatalogItem',
                            name: 'Mobile App Development',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Custom Mobile App Development'
                            }
                        },
                        {
                            '@type': 'OfferCatalogItem',
                            name: 'OTT Platform Development',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Custom Streaming Platform Development'
                            }
                        }
                    ]
                },
                review: {
                    '@type': 'Review',
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: '5',
                        bestRating: '5'
                    },
                    author: {
                        '@type': 'Person',
                        name: 'John Smith',
                        sameAs: 'https://twitter.com/johnsmith'
                    },
                    datePublished: '2023-09-15',
                    reviewBody: 'Ramesh Vishwakarma and his team delivered an exceptional website for our business. His IIT Patna education really shows in the quality of work.'
                },
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    ratingCount: '89',
                    bestRating: '5',
                    worstRating: '1'
                }
            },
            {
                '@type': 'WebSite',
                name: 'UFDev Agency by Ramesh Vishwakarma',
                url: baseUrl,
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${baseUrl}/search?q={search_term_string}`,
                    'query-input': 'required name=search_term_string'
                }
            }
        ]
    };
} 