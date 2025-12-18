import React from 'react';
import { motion } from 'framer-motion';

export const LogoWatermark: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <div className={`pointer-events-none select-none ${className}`}>
            <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="w-full h-full opacity-10 text-slate-900"
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
                {/* Abstract 'Roots' Tooth Shape - Elegant Wireframe */}
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                <path d="M12 22V12" />
            </motion.svg>
        </div>
    );
};
