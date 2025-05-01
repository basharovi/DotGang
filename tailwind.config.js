/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'dotgang': {
          'dark': '#0A1128',
          'light': '#F8FAFC',
          'primary': '#2D7DD2',
          'secondary': '#38B2AC',
          'accent': '#9D4EDD',
          'highlight': '#F45B69',
          'muted': '#6A7280',
          'surface': '#1A2C42',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(10px)' },
          '50%': { transform: 'translateY(0) translateX(20px)' },
          '75%': { transform: 'translateY(10px) translateX(10px)' },
        },
        pulse3d: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(45, 125, 210, 0)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 20px rgba(45, 125, 210, 0.3)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeSlideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse3d: 'pulse3d 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        tilt: 'tilt 10s ease-in-out infinite',
        fadeSlideUp: 'fadeSlideUp 0.6s ease-out forwards',
        fadeSlideDown: 'fadeSlideDown 0.6s ease-out forwards',
        fadeSlideRight: 'fadeSlideRight 0.6s ease-out forwards',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(rgba(45, 125, 210, 0.1) 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(to right, rgba(45, 125, 210, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 125, 210, 0.05) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'dot-pattern': '20px 20px',
        'grid-pattern': '20px 20px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

