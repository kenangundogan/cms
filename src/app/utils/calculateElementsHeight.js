'use client';

import { useEffect } from 'react';

export default function CalculateElementsHeight() {
    useEffect(() => {
        const updateElementsHeight = () => {
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            if (footer && header) {
                document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
                document.documentElement.style.setProperty('--footer-height', `${footer.offsetHeight}px`);
            }
        };

        updateElementsHeight();

        window.addEventListener('resize', updateElementsHeight);
        return () => window.removeEventListener('resize', updateElementsHeight);
    }, []);

    return null;
}
