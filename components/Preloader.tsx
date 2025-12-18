import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setComplete(true);
            setTimeout(onComplete, 800);
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-pearl-100 flex items-center justify-center overflow-hidden"
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Background Washi Texture */}
                    <div className="absolute inset-0 bg-washi opacity-40 pointer-events-none" />

                    <div className="relative z-10 text-center">
                        <div className="overflow-hidden mb-4">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col items-center"
                            >
                                <span className="font-sans text-xs uppercase tracking-[0.3em] text-bronze-500 mb-4">Est. 2016</span>
                                <h1 className="font-serif text-5xl md:text-7xl text-espresso-900 leading-tight">
                                    Roots <span className="italic text-bronze-500">&</span> Co.
                                </h1>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 1.5, ease: "circOut" }}
                            className="h-[1px] w-24 bg-espresso-900/20 mx-auto my-6"
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-espresso-800/60">
                                The Architects of the Smile
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
