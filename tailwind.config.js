import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#5D87FF',
        'ligth-primary': '#E7EDFF',
        'ligth-warning': '#FFEAC7',
        'ligth-secondary': '#E3F4FE',
        'ligth-error': '#FEE3E6',
        'ligth-success': '#C4F7ED',

        secondary: '#F2F6FF',
        darkHover: '#212D3E',
        darkBg: '#1C252E',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
    container: {
      padding: {
        xl: '6rem',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
