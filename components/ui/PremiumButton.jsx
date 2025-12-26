'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function PremiumButton({ children, href, onClick, className = '', variant = 'primary' }) {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-bold rounded-lg overflow-hidden transition-all duration-300 group";

    const variants = {
        primary: "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]",
        outline: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-950/30"
    };

    const content = (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {/* Shimmer Effect */}
            {variant === 'primary' && (
                <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out" />
            )}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} onClick={onClick}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className="outline-none">
            {content}
        </button>
    );
}
