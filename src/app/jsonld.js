export const generateJsonLd = (baseUrl, path, title, description, ogImage, additionalData = {}) => {
    const isHome = path === '/';
    const isService = path.startsWith('/services/');
    const isBlog = path.startsWith('/blog/');

    const organizationData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${baseUrl}/#organization`,
                name: 'UFDev Agency',
                alternateName: 'UFDev India',
                description: 'Premier app development company in Mumbai, India. Full-stack development agency specializing in affordable web applications, mobile apps, and OTT platforms. Founded by Ramesh Vishwakarma, IIT Patna alumni.',
                url: baseUrl,
                logo: {
                    '@type': 'ImageObject',
                    url: `${baseUrl}/logo.png`,
                    width: '300',
                    height: '60'
                },
                founder: {
                    '@type': 'Person',
                    name: 'Ramesh Vishwakarma',
                    alumniOf: {
                        '@type': 'CollegeOrUniversity',
                        name: 'Indian Institute of Technology Patna',
                        sameAs: 'https://www.iitp.ac.in/'
                    },
                    sameAs: [
                        'https://github.com/ufdevs',
                        'https://www.linkedin.com/in/ramesh-vishwakarma-iitp/'
                    ]
                },
                foundingDate: '2022-01-01',
                email: 'contact@ufdevs.com',
                telephone: '+917510060787',
                vatID: 'ABCDE1234F',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Vasai West',
                    addressLocality: 'Mumbai',
                    addressRegion: 'Maharashtra',
                    postalCode: '401202',
                    addressCountry: 'IN'
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+917510060787',
                    contactType: 'customer service',
                    email: 'contact@ufdevs.com',
                    availableLanguage: ['English', 'Hindi', 'Marathi']
                },
                faxNumber: '+910123456789',
                areaServed: [
                    {
                        '@type': 'City',
                        name: 'Mumbai',
                        sameAs: 'https://en.wikipedia.org/wiki/Mumbai'
                    },
                    {
                        '@type': 'State',
                        name: 'Maharashtra',
                        sameAs: 'https://en.wikipedia.org/wiki/Maharashtra'
                    },
                    {
                        '@type': 'Country',
                        name: 'India',
                        sameAs: 'https://en.wikipedia.org/wiki/India'
                    }
                ],
                knowsAbout: [
                    'Web Application Development',
                    'Mobile App Development in Mumbai',
                    'React Native App Development India',
                    'Cross-Platform App Development',
                    'React',
                    'Next.js',
                    'Node.js',
                    'Flutter App Development',
                    'OTT Platform Development',
                    'Full Stack Development Mumbai'
                ],
                makesOffer: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Web Application Development',
                            description: 'Custom web application development using React, Next.js, and Node.js in Mumbai, India'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Mobile App Development Mumbai',
                            description: 'Affordable cross-platform mobile app development in Mumbai using React Native and Flutter'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'OTT Platform Development',
                            description: 'Custom OTT and video streaming platform development for Indian businesses'
                        }
                    }
                ],
                slogan: 'Mumbai\'s Leading Affordable App Development Company',
                numberOfEmployees: {
                    '@type': 'QuantitativeValue',
                    value: '25'
                },
                serviceArea: {
                    '@type': 'GeoCircle',
                    geoMidpoint: {
                        '@type': 'GeoCoordinates',
                        latitude: '19.2307',
                        longitude: '72.8567'
                    },
                    geoRadius: '100km'
                },
                location: {
                    '@type': 'Place',
                    name: 'UFDev Agency - Mumbai Office',
                    hasMap: 'https://goo.gl/maps/example',
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: '19.2307',
                        longitude: '72.8567'
                    }
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
                    name: 'Web and Mobile App Development Services in Mumbai',
                    itemListElement: [
                        {
                            '@type': 'OfferCatalogItem',
                            name: 'Web Development Services Mumbai',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Custom Website Development in Mumbai, India'
                            }
                        },
                        {
                            '@type': 'OfferCatalogItem',
                            name: 'Mobile App Development Mumbai',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Affordable Mobile App Development in Mumbai'
                            }
                        },
                        {
                            '@type': 'OfferCatalogItem',
                            name: 'OTT Platform Development India',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Custom Streaming Platform Development for Indian businesses'
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
                        name: 'Rajesh Sharma',
                        sameAs: 'https://twitter.com/rajeshsharma'
                    },
                    datePublished: '2023-09-15',
                    reviewBody: 'Ramesh Vishwakarma and his Mumbai-based team delivered an exceptional mobile app for our business. His IIT Patna education really shows in the quality of work. Best app developer in Mumbai!'
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
                name: 'UFDev Agency Mumbai - By Ramesh Vishwakarma',
                url: baseUrl,
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${baseUrl}/search?q={search_term_string}`,
                    'query-input': 'required name=search_term_string'
                }
            },
            {
                '@type': 'LocalBusiness',
                '@id': `${baseUrl}/#localbusiness`,
                name: 'UFDev - App Development Company Mumbai',
                image: `${baseUrl}/logo.png`,
                telephone: '+917510060787',
                email: 'contact@ufdevs.com',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Vasai West',
                    addressLocality: 'Mumbai',
                    addressRegion: 'Maharashtra',
                    postalCode: '401202',
                    addressCountry: 'IN'
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '19.2307',
                    longitude: '72.8567'
                },
                url: baseUrl,
                priceRange: '₹₹',
                openingHoursSpecification: [
                    {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        opens: '09:00',
                        closes: '18:00'
                    },
                    {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Saturday'],
                        opens: '10:00',
                        closes: '16:00'
                    }
                ],
                description: 'Top-rated app development company in Mumbai offering affordable cross-platform mobile apps, web applications, and digital solutions for businesses across India.'
            }
        ]
    };

    // Add blog article structured data if on a blog page
    if (isBlog && additionalData.publishedTime) {
        const articleData = {
            '@type': 'BlogPosting',
            '@id': `${baseUrl}${path}#article`,
            headline: title,
            description: description,
            image: ogImage || `${baseUrl}/og-image.png`,
            url: `${baseUrl}${path}`,
            datePublished: additionalData.publishedTime,
            dateModified: additionalData.modifiedTime || additionalData.publishedTime,
            author: {
                '@type': 'Person',
                name: additionalData.author || 'Ramesh Vishwakarma',
                url: additionalData.authorUrl || `${baseUrl}/about`
            },
            publisher: {
                '@type': 'Organization',
                name: 'UFDev Agency',
                logo: {
                    '@type': 'ImageObject',
                    url: `${baseUrl}/logo.png`,
                    width: '300',
                    height: '60'
                }
            },
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${baseUrl}${path}`
            }
        };

        // Add keywords if available
        if (additionalData.keywords && additionalData.keywords.length) {
            articleData.keywords = additionalData.keywords.join(', ');
        }

        // Add article sections if available
        if (additionalData.articleSections && additionalData.articleSections.length) {
            articleData.articleSection = additionalData.articleSections;
        }

        // Add the article data to the graph
        organizationData['@graph'].push(articleData);
    }

    // Add FAQ data if available
    if (additionalData.faqs && additionalData.faqs.length > 0) {
        const faqData = {
            '@type': 'FAQPage',
            '@id': `${baseUrl}${path}#faq`,
            mainEntity: additionalData.faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
        };

        // Add the FAQ data to the graph
        organizationData['@graph'].push(faqData);
    }

    return organizationData;
} 