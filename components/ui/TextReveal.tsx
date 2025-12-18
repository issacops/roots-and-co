import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    type?: 'chars' | 'words';
}

export const TextReveal: React.FC<TextRevealProps> = ({ children, className = '', delay = 0, type = 'chars' }) => {
    const words = children.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    if (type === 'words') {
        return (
            <motion.div
                style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className={className}
            >
                {words.map((word, index) => (
                    <motion.span variants={child} style={{ marginRight: '0.25em' }} key={index}>
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    }

    // Chars implementation (splitting words then chars for better control)
    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden">
                    {word.split('').map((char, j) => (
                        <motion.span
                            key={j}
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: delay + (i * 0.1) + (j * 0.02), ease: [0.33, 1, 0.68, 1] }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </span>
    );
};
