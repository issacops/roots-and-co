import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const Cursor: React.FC = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Primary Dot */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    animate={{ scale: isHovering ? 2.5 : 1 }}
                    className="w-full h-full bg-white rounded-full opacity-50 backdrop-blur-sm"
                />
            </motion.div>

            {/* Spotlight / Torch Effect */}
            <motion.div
                className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[50]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-46%', // Center the large light
                    translateY: '-46%',
                }}
            >
                <div className="w-full h-full bg-gradient-radial from-champagne-200/20 to-transparent blur-[80px] opacity-60" />
            </motion.div>
        </>
    );
};
