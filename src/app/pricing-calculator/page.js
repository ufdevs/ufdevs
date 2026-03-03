"use client";

import React from 'react';
import { PriceCalculator } from 'ufdevs-ppc';

export default function PricingCalculatorPage() {
    return (
        <main className="min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Project Pricing Calculator</h1>
                <PriceCalculator
                    title="Custom Project Calculator"
                    description="Estimate the cost of your project based on your specific requirements"
                    whatsappNumber="+917510060787"
                />
            </div>
        </main>
    );
} 