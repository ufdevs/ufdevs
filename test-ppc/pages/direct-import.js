import React from 'react';
import Button from 'ufdevs-ppc/dist/components/Button';

export default function DirectImportPage() {
    return (
        <div className="container mx-auto p-10">
            <h1 className="text-2xl font-bold mb-4">Direct Import Test</h1>

            {Button && (
                <Button
                    variant="primary"
                    size="lg"
                >
                    Direct Import Button
                </Button>
            )}

            {!Button && (
                <p className="text-red-500">Button component not loaded!</p>
            )}

            <pre className="mt-4 p-4 bg-gray-100 rounded">
                {JSON.stringify(Button, null, 2)}
            </pre>

            <div className="mt-4">
                <a href="/" className="text-blue-500 hover:underline">Home</a> |
                <a href="/test" className="ml-2 text-blue-500 hover:underline">Package Button Test</a> |
                <a href="/local-test" className="ml-2 text-blue-500 hover:underline">Local Button Test</a>
            </div>
        </div>
    );
} 