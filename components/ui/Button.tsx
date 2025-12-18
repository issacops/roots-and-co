import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'gold';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-4 rounded-full font-sans text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 relative overflow-hidden group isolate";

  const variants = {
    primary: "bg-espresso-900 text-white shadow-lg shadow-espresso-900/20 border border-transparent",
    outline: "bg-transparent border border-espresso-900 text-espresso-900 hover:bg-cream-200",
    white: "bg-white text-espresso-900 shadow-xl shadow-black/5 border border-white/50",
    gold: "bg-gold-500 text-white shadow-lg shadow-gold-500/30 border border-transparent",
  };

  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props as any}
    >
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none" />

      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/10 to-transparent z-0" />
    </motion.button>
  );
};
