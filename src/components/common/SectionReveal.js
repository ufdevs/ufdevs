"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const SectionReveal = ({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 0.5,
    threshold = 0.2,
    once = true
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: once,
        amount: threshold
    });

    // Initial animation states based on direction
    const getInitialState = () => {
        switch (direction) {
            case 'up':
                return { y: 40, opacity: 0 };
            case 'down':
                return { y: -40, opacity: 0 };
            case 'left':
                return { x: 40, opacity: 0 };
            case 'right':
                return { x: -40, opacity: 0 };
            case 'fade':
                return { opacity: 0 };
            default:
                return { y: 40, opacity: 0 };
        }
    };

    // Animation variants
    const variants = {
        hidden: getInitialState(),
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1] // Custom ease curve for smooth reveal
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SectionReveal; 