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
          'dark': '#1E293B',
          'light': '#F8FAFC',
          'primary': '#60A5FA',
          'secondary': '#34D399',
          'accent': '#8B5CF6',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

