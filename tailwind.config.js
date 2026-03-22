/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./print.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#B31B1B',
        gold: '#FFBF00',
        cream: '#FFFDD0',
        deepGreen: '#228B22',
        charcoal: '#333333',
        // Print specific colors
        'print-gold': '#856404',
        dark: '#1f2937',
        light: '#f5f5f5',
        violet: '#9a1750',
        conf: '#B8860B',
      },
      fontFamily: {
        serif: ['"Merriweather"', '"Tiro Devanagari Sanskrit"', 'serif'],
        sans: ['Roboto', 'Mukta', 'sans-serif'],
        // Print specific fonts
        'print-sans': ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        'print-serif': ['Merriweather', 'serif'],
        condensed: ['"Roboto Condensed"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'spin-reverse-medium': 'spin-reverse 45s linear infinite',
        'spin-medium': 'spin 30s linear infinite',
        'spin-badge': 'spin 12s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 8s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)' },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: 'rgba(212, 175, 55, 0.5)', boxShadow: '0 0 0px rgba(212, 175, 55, 0)' },
          '50%': { borderColor: 'rgba(212, 175, 55, 1)', boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
