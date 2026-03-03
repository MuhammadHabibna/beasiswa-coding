/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#2563eb', /* Blue 600 - appealing professional */
                'primary-dark': '#1d4ed8',
                secondary: '#8b5cf6', /* Violet 500 */
                accent: '#06b6d4', /* Cyan */
                background: '#fafafa', /* Very light gray/white */
                surface: '#ffffff',
                subtle: '#64748b',
                'subtle-light': '#f1f5f9',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'premium': '0 10px 40px -10px rgba(0,0,0,0.06)',
                'hover-premium': '0 20px 50px -10px rgba(0,0,0,0.1)',
                'glow': '0 0 20px 0 rgba(37, 99, 235, 0.4)',
                'glow-accent': '0 0 20px 0 rgba(139, 92, 246, 0.4)',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
