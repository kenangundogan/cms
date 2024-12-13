/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                xxs: ['10px', '14px'],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.writing-mode-vertical': {
                    'writing-mode': 'vertical-rl',
                },
                '.writing-mode-horizontal': {
                    'writing-mode': 'horizontal-tb',
                },
                '.text-orientation-upright': {
                    'text-orientation': 'upright',
                },
                '.text-orientation-mixed': {
                    'text-orientation': 'mixed',
                },
            });
        },
    ],
};
