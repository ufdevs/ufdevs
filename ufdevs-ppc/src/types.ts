import { ReactNode } from 'react';

export interface PriceStage {
    id: string;
    title: string;
    description: string;
    basePrice: number;
    baseDays: number;
    icon: ReactNode;
}

export interface SelectionOption {
    id: string;
    label: string;
    icon: ReactNode;
    multiplier: number;
}

export interface PriceCalculatorProps {
    /**
     * Initial stages that are available to select
     */
    stages?: PriceStage[];

    /**
     * Platform options (web, android, ios, etc.)
     */
    platformOptions?: SelectionOption[];

    /**
     * Frontend framework options (React, Angular, etc.)
     */
    frontendOptions?: SelectionOption[];

    /**
     * Backend options (Node.js, Django, etc.)
     */
    backendOptions?: SelectionOption[];

    /**
     * Complexity multiplier options
     */
    complexityMultipliers?: {
        simple: number;
        medium: number;
        complex: number;
    };

    /**
     * Budget options
     */
    budgetOptions?: SelectionOption[];

    /**
     * Industry options
     */
    industryOptions?: SelectionOption[];

    /**
     * WhatsApp phone number for negotiation
     */
    whatsappNumber?: string;

    /**
     * Title for the calculator section
     */
    title?: string;

    /**
     * Description text for the calculator
     */
    description?: string;

    /**
     * CSS class name for custom styling
     */
    className?: string;
} 