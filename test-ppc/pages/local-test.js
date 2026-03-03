import React from 'react';
import Button from '../components/Button';

export default function LocalTestPage() {
    return (
        <div className="container mx-auto p-10">
            <h1 className="text-2xl font-bold mb-4">Local Button Component Test</h1>

            <Button
                variant="primary"
                size="lg"
            >
                Local Button Component
            </Button>

            <div className="mt-4">
                <a href="/" className="text-blue-500 hover:underline">Home</a> |
                <a href="/test" className="ml-2 text-blue-500 hover:underline">Package Button Test</a> |
                <a href="/direct-import" className="ml-2 text-blue-500 hover:underline">Direct Import Test</a>
            </div>
        </div>
    );
} 