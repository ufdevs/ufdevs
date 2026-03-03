import React from 'react';
import Head from 'next/head';
import Button from '../components/Button';

export default function Home() {
    return (
        <div>
            <Head>
                <title>UFDevs Price Calculator Test</title>
                <meta name="description" content="Testing the UFDevs Price Calculator package" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">
                    UFDevs Price Calculator Test
                </h1>

                <p className="text-center mb-8">
                    Testing the package components
                </p>

                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <Button
                        variant="primary"
                        size="lg"
                    >
                        Local Button Component
                    </Button>

                    <div className="mt-8 flex flex-col gap-4">
                        <a href="/local-test" className="text-blue-500 hover:underline">Local Button Component Test</a>
                        <a href="/test" className="text-blue-500 hover:underline">Package Button Test</a>
                        <a href="/direct-import" className="text-blue-500 hover:underline">Direct Import Test</a>
                    </div>
                </div>
            </main>
        </div>
    );
} 