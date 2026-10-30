/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dce5f0',
          200: '#bccde2',
          300: '#94b0d0',
          400: '#648dbb',
          500: '#426fa6',
          600: '#2f558a',
          700: '#254370',
          800: '#1e375c',
          900: '#0f2238',
          950: '#081321', // Primary deep navy
        },
        gold: {
          50: '#fbf8f0',
          100: '#f6eedd',
          200: '#eddcb9',
          300: '#e1c48e',
          400: '#d4aa63',
          500: '#c5923b', // Muted construction gold
          600: '#b0792d',
          700: '#8c5925',
          800: '#734624',
          900: '#5f3a21',
          950: '#361e0f',
        },
        slate: {
          850: '#152033',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'premium': '0 10px 30px -5px rgba(8, 19, 33, 0.08), 0 4px 6px -2px rgba(8, 19, 33, 0.03)',
        'elevated': '0 20px 40px -15px rgba(8, 19, 33, 0.12), 0 0 1px 1px rgba(8, 19, 33, 0.05)',
      }
    },
  },
  plugins: [],
}
