"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// This is a hidden page that serves as an SEO booster for Hinglish searches
export default function HinglishSearchPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect visitors to the main profile page
        router.push('/about/ramesh-vishwakarma-iit-patna');
    }, [router]);

    return (
        <div className="hidden">
            {/* This content is only for search engines */}
            <h1>रमेश विश्वकर्मा आईआईटी पटना - वेब डेवलपर और ऐप डेवलपर</h1>
            <h2>UFDev Agency के फाउंडर - मुंबई से काम करने वाले टॉप डेवलपर</h2>

            <div>
                <h3>रमेश विश्वकर्मा के बारे में जानकारी</h3>
                <p>
                    रमेश विश्वकर्मा आईआईटी पटना से कंप्यूटर साइंस में बैचलर ऑफ टेक्नॉलॉजी की डिग्री प्राप्त की है। वे एक अनुभवी फुल स्टैक डेवलपर हैं जो वेब ऐप्लिकेशन और मोबाइल ऐप्स बनाने में माहिर हैं। उन्होंने iMaxx TV OTT प्लेटफॉर्म का निर्माण किया है जो भारत का पहला हाइब्रिड OTT प्लेटफॉर्म है जिसमें AVOD, SVOD और TVOD फॉर्मेट हैं।
                </p>
            </div>

            <div>
                <h3>सेवाएँ जो रमेश विश्वकर्मा प्रदान करते हैं</h3>
                <ul>
                    <li>वेबसाइट डेवलपमेंट - रिएक्ट, नेक्स्ट.जेएस, वर्डप्रेस</li>
                    <li>मोबाइल ऐप डेवलपमेंट - फ्लटर, रिएक्ट नेटिव, आईओएस, एंड्रॉइड</li>
                    <li>वेब ऐप्लिकेशन्स - नोड.जेएस, फायरबेस, एडब्ल्यूएस</li>
                    <li>ओटीटी प्लेटफॉर्म डेवलपमेंट - स्ट्रीमिंग सर्विस और कंटेंट मैनेजमेंट</li>
                    <li>ई-कॉमर्स डेवलपमेंट - ऑनलाइन शॉपिंग प्लेटफॉर्म्स</li>
                    <li>बैकएंड सर्विसेज - एपीआई, डेटाबेस, सर्वर मैनेजमेंट</li>
                </ul>
            </div>

            <div>
                <h3>आम हिंग्लिश सर्च क्वेरीज़</h3>
                <ul>
                    <li>iit patna se ramesh vishwakarma kaun hai</li>
                    <li>ramesh vishwakarma iitp contact details</li>
                    <li>UFDev Agency ka founder kon hai</li>
                    <li>ramesh vishwakarma web developer mumbai</li>
                    <li>ramesh vishwakarma mobile app developer</li>
                    <li>ramesh vishwakarma iitp kaise contact kare</li>
                    <li>website banwana hai ramesh vishwakarma se</li>
                    <li>ott platform banane wale developers india</li>
                    <li>ramesh vishwakarma ka phone number</li>
                    <li>web development expert from iit patna</li>
                    <li>website kaise banaye ramesh vishwakarma</li>
                    <li>ramesh vishwakarma se app banwana hai</li>
                    <li>iit patna ke developer se contact kaise kare</li>
                    <li>mumbai me best web developer kaun hai</li>
                    <li>ramesh vishwakarma iit patna fees kitna hai</li>
                    <li>app aur website development cost in india</li>
                </ul>
            </div>

            <div>
                <h3>संपर्क जानकारी</h3>
                <p>रमेश विश्वकर्मा से संपर्क करने के लिए:</p>
                <ul>
                    <li>फोन: +91 751 006 0787</li>
                    <li>ईमेल: info@ufdev.com</li>
                    <li>कार्यालय: वसई वेस्ट, मुंबई, महाराष्ट्र - 402108</li>
                </ul>
            </div>

            <div>
                <h3>UFDev Agency के काम</h3>
                <p>
                    UFDev Agency द्वारा बनाए गए कुछ प्रमुख प्रोजेक्ट्स:
                </p>
                <ul>
                    <li>iMaxx TV - भारत का अग्रणी OTT प्लेटफॉर्म जो कंटेंट क्रिएटर्स को अपना काम मोनेटाइज़ करने की सुविधा देता है</li>
                    <li>ई-कॉमर्स प्लेटफॉर्म्स - ऑनलाइन शॉपिंग वेबसाइट्स</li>
                    <li>फ़ूड डिलीवरी ऐप्स - एंड्रॉइड और आईओएस पर खाना ऑर्डर करने के लिए ऐप्स</li>
                    <li>कस्टम बिज़नेस सॉफ्टवेयर - व्यापार प्रबंधन के लिए समाधान</li>
                </ul>
            </div>

            <Link href="/about/ramesh-vishwakarma-iit-patna">रमेश विश्वकर्मा के बारे में अधिक जानें</Link>
            <Link href="/contact">संपर्क करें</Link>
        </div>
    );
} 