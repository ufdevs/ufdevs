"use client";

import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    icon = null,
    iconPosition = 'right',
    animate = false,
    onClick,
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none';

    const variants = {
        primary: 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800',
        secondary: 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800',
        accent: 'bg-cyan-600 text-white hover:bg-cyan-700 active:bg-cyan-800',
        outline: 'bg-transparent border border-gray-600 text-gray-300 hover:bg-dark-800 active:bg-dark-700 hover:text-white',
        ghost: 'bg-transparent text-gray-300 hover:bg-dark-800 active:bg-dark-700 hover:text-white',
        gradient: 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:from-emerald-700 hover:to-cyan-700',
    };

    const sizes = {
        sm: 'py-1.5 px-3 text-sm',
        md: 'py-2 px-4 text-base',
        lg: 'py-3 px-6 text-lg',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

    const ButtonComponent = animate ? motion.button : 'button';
    const animateProps = animate ? {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2 }
    } : {};

    return (
        <ButtonComponent
            className={buttonClasses}
            onClick={onClick}
            {...animateProps}
            {...props}
        >
            {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </ButtonComponent>
    );
};

export default Button; 