/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cinematic': {
          'black': '#0a0a0a',
          'charcoal': '#1a1a1a',
          'dark': '#2d2d2d',
          'steel': '#3e3e3e',
          'slate': '#4a4a4a',
          'muted': '#6b6b6b',
        },
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'film': '0.15em',
        'tight-film': '0.05em',
      },
    },
  },
  plugins: [],
};
