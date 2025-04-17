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
                alternateName: 'UFDev',
                description: 'Full-stack development agency specializing in web applications, mobile apps, and OTT platforms. Founded by Ramesh Vishwakarma, IIT Patna alumni.',
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
                telephone: '+919876543210',
                vatID: 'ABCDE1234F',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '123 Tech Hub',
                    addressLocality: 'Mumbai',
                    addressRegion: 'Maharashtra',
                    postalCode: '400001',
                    addressCountry: 'IN'
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+919876543210',
                    contactType: 'customer service',
                    email: 'contact@ufdevs.com',
                    availableLanguage: ['English', 'Hindi']
                },
                faxNumber: '+910123456789',
                areaServed: {
                    '@type': 'GeoCircle',
                    geoMidpoint: {
                        '@type': 'GeoCoordinates',
                        latitude: '19.0760',
                        longitude: '72.8777'
                    },
                    geoRadius: '50000'
                },
                knowsAbout: [
                    'Web Application Development',
                    'Mobile App Development',
                    'React',
                    'Next.js',
                    'Node.js',
                    'React Native',
                    'OTT Platform Development',
                    'Full Stack Development'
                ],
                makesOffer: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Web Application Development',
                            description: 'Custom web application development using React, Next.js, and Node.js'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Mobile App Development',
                            description: 'Cross-platform mobile app development using React Native'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'OTT Platform Development',
                            description: 'Custom OTT and video streaming platform development'
                        }
                    }
                ],
                slogan: 'Transforming Ideas into Digital Reality',
                numberOfEmployees: {
                    '@type': 'QuantitativeValue',
                    value: '25'
                },
                serviceArea: {
                    '@type': 'GeoCircle',
                    geoMidpoint: {
                        '@type': 'GeoCoordinates',
                        latitude: '19.0760',
                        longitude: '72.8262'
                    },
                    geoRadius: 'Global'
                },
                location: {
                    '@type': 'Place',
                    name: 'UFDev Agency Headquarters',
                    hasMap: 'https://goo.gl/maps/example',
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: '19.0760',
                        longitude: '72.8262'
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