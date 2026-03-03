import React from 'react';
import { Button } from 'ufdevs-ppc';

export default function TestPage() {
    return (
        <div className="container mx-auto p-10">
            <h1 className="text-2xl font-bold mb-4">Testing Button Component</h1>

            {Button && (
                <Button
                    variant="primary"
                    size="lg"
                >
                    Test Button
                </Button>
            )}

            {!Button && (
                <p className="text-red-500">Button component not loaded!</p>
            )}

            <div className="mt-4">
                <a href="/" className="text-blue-500 hover:underline">Home</a> |
                <a href="/local-test" className="ml-2 text-blue-500 hover:underline">Local Button Test</a> |
                <a href="/direct-import" className="ml-2 text-blue-500 hover:underline">Direct Import Test</a>
            </div>
        </div>
    );
} 