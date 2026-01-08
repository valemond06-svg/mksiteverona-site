'use client';

import { useState, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export default function TextReveal({ text, className = '' }) {
    const [display, setDisplay] = useState(text);

    useEffect(() => {
        let iteration = 0;
        let interval = null;

        const startScramble = () => {
            clearInterval(interval);
            interval = setInterval(() => {
                setDisplay((prev) =>
                    text
                        .split('')
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3; // Speed control
            }, 30);
        };

        startScramble();

        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{display}</span>;
}
