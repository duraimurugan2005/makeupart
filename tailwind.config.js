/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          50: '#FAF8F5',
          100: '#F5F0E8',
          200: '#EBDDCF',
          300: '#DEC4AF',
          400: '#CFA78C',
          DEFAULT: '#F5F0E8',
        },
        blush: {
          50: '#FDF7F6',
          100: '#FAEEEB',
          200: '#F4DDD7',
          300: '#EABFB5',
          400: '#DDA094',
          500: '#C87E70',
          DEFAULT: '#FAEEEB',
        },
        rose: {
          50: '#FBF5F5',
          100: '#F6EAE9',
          200: '#EDD3D1',
          300: '#DCB0AD',
          400: '#C88B87',
          500: '#B06560',
          600: '#8E4844',
          DEFAULT: '#C88B87',
        },
        gold: {
          300: '#EED998',
          400: '#DFC272',
          500: '#C5A059',
          600: '#A9833C',
          DEFAULT: '#C5A059',
        },
        charcoal: {
          50: '#F7F6F5',
          100: '#E5E3E0',
          200: '#CBC7C2',
          300: '#9E9892',
          700: '#4A4541',
          800: '#2A2624',
          900: '#181615',
          950: '#0F0E0D',
          DEFAULT: '#181615',
        },
        ivory: '#FFFDFB',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Italiana"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        accent: ['"Marcellus"', 'serif'],
      },
      letterSpacing: {
        'luxury': '0.22em',
        'ultra': '0.35em',
        'subtle': '0.08em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(24, 22, 21, 0.07)',
        'luxury-hover': '0 30px 60px -15px rgba(200, 139, 135, 0.18)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.25)',
      }
    },
  },
  plugins: [],
}
