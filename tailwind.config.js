/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#F7E1D7',
        'hero-blue': '#C1DCDC',
        'button': '#EDAFB8',
        'text-primary': '#1e1e1e',
      },
      fontFamily: {
        serif: [ 'DM Serif Text', 'serif'],
        nica: [ 'Aclonica', 'serif'],

      },
      boxShadow: {
        'uxl': '25px -25px 60px -15px rgba(0, 0, 0, 0.3 )',
        'tight': ' 10px 10px rgba(52, 52, 52, 0.4)',
        'ulg': '25px -25px 60px -15px rgba(0, 0, 0, 0.3 )'

      }
    },
  },
  plugins: [],
}