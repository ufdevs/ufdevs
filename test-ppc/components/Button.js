import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
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

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button; 