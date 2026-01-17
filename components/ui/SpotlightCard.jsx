'use client';

import { useRef, useState } from 'react';

export function SpotlightCard({ children, className = '', spotlightColor = 'rgba(34, 211, 238, 0.15)', onClick }) {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            onClick={onClick}
            className={`relative rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden h-full ${className}`}
            style={{ contain: 'layout paint' }}
        >
            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
                }}
            />

            {/* Content */}
            <div className="relative h-full">{children}</div>
        </div>
    );
}
