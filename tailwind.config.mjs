/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#1570ef', /* Dicoding Vibrant Blue */
                'primary-dark': '#175cd3',
                'primary-light': '#eff8ff',
                brand: '#2d3e50', /* Dicoding Iconic Dark Navy */
                'brand-dark': '#1f2d3d',
                'dicoding-red': '#e42a19', /* Dicoding Accent Red */
                'dicoding-red-light': '#fef3f2',
                secondary: '#6941c6', /* Purple */
                accent: '#0ba5ec', /* Cyan / Sky */
                background: '#f8fafc', /* Subtle light grey */
                surface: '#ffffff',
                subtle: '#475467', /* Gray 600 */
                'subtle-light': '#eaecf0', /* Gray 200 */
                'dark-slate': '#101828', /* Gray 900 */
            },
            fontFamily: {
                sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            boxShadow: {
                'xs': '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
                'sm': '0 1px 3px 0 rgba(16, 24, 40, 0.1), 0 1px 2px -1px rgba(16, 24, 40, 0.1)',
                'md': '0 4px 8px -2px rgba(16, 24, 40, 0.1), 0 2px 4px -2px rgba(16, 24, 40, 0.06)',
                'lg': '0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)',
                'xl': '0 20px 24px -4px rgba(16, 24, 40, 0.08), 0 8px 8px -4px rgba(16, 24, 40, 0.03)',
                '2xl': '0 25px 50px -12px rgba(16, 24, 40, 0.25)',
                'glow-blue': '0 0 24px -2px rgba(21, 112, 239, 0.35)',
                'glow-red': '0 0 20px -2px rgba(228, 42, 25, 0.35)',
            },
            animation: {
                'float': 'float 3.5s ease-in-out infinite',
                'float-slow': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 12s linear infinite',
                'shimmer': 'shimmer 2.5s infinite linear',
                'marquee': 'marquee 35s linear infinite',
                'blob': 'blob 8s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-6px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.85', transform: 'scale(1.02)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                blob: {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
                }
            }
        },
    },
    plugins: [],
}
