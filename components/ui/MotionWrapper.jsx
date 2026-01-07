'use client';

import { motion } from 'framer-motion';

export function MotionWrapper({
    children,
    delay = 0,
    direction = 'up', // 'up', 'down', 'left', 'right', 'none' (for scale)
    className = '',
    ...props
}) {
    const getVariants = () => {
        switch (direction) {
            case 'left': return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
            case 'right': return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
            case 'down': return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
            case 'none': return { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };
            case 'up':
            default: return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            variants={getVariants()}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
