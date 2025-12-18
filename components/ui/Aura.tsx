import React from 'react';
import { motion } from 'framer-motion';

interface AuraProps {
    className?: string;
    delay?: number;
    variant?: 'warm' | 'cool' | 'glow';
}

export const Aura: React.FC<AuraProps> = ({ className = '', delay = 0, variant = 'warm' }) => {

    // Subtle drift animation
    const drift = {
        animate: {
            scale: [1, 1.15, 1],
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            opacity: [0.3, 0.5, 0.3],
        },
        transition: {
            duration: 15,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const getColors = () => {
        switch (variant) {
            case 'warm': return 'bg-champagne-300/30';
            case 'cool': return 'bg-teal-800/20';
            case 'glow': return 'bg-white/40';
            default: return 'bg-champagne-200/30';
        }
    };

    return (
        <motion.div
            {...drift}
            className={`absolute rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen ${getColors()} ${className}`}
        />
    );
};
