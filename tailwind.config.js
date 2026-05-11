/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F2E8',
        pearl: '#FFFDF8',
        champagne: '#E7D2A8',
        taupe: '#8A7666',
        ink: '#161412',
        rose: '#C9A194',
        sage: '#7E8A77',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 28px 80px rgba(22, 20, 18, 0.14)',
        glow: '0 22px 70px rgba(231, 210, 168, 0.36)',
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(22,20,18,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
