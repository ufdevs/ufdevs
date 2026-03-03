import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'gradient';
    size?: 'sm' | 'md' | 'lg';
    animate?: boolean;
    icon?: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    animate = false,
    icon,
    className = '',
    onClick,
}) => {
    // Base styles
    let baseClasses = 'rounded-md font-medium flex items-center justify-center transition-colors ';

    // Variant styles
    const variantClasses = {
        primary: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
        gradient: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white',
    };

    // Size styles
    const sizeClasses = {
        sm: 'text-sm py-2 px-4',
        md: 'text-base py-3 px-5',
        lg: 'text-lg py-4 px-6',
    };

    // Combine all styles
    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    // Use motion.button if animate is true
    const ButtonComponent = animate ? motion.button : 'button';

    // Animation properties if using motion
    const motionProps = animate
        ? {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            transition: { duration: 0.2 },
        }
        : {};

    return (
        <ButtonComponent
            className={buttonClasses}
            onClick={onClick}
            {...motionProps}
        >
            {children}
            {icon && <span className="ml-2">{icon}</span>}
        </ButtonComponent>
    );
};

export default Button; 