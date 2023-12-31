/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-montserrat)',
      },
      colors: {
        primary: {
          light: '#05374C',
          main: '#042939',
          dark: '#031B26',
        },
        secondary: {
          main: '#FAA561',
        },
        white: '#f7fafc',
        gray: {
          50: '#F0F6F9',
          100: '#D6D6D6',
          200: '#CCCCCC',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: ' #121215',
          950: '#09090B',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
