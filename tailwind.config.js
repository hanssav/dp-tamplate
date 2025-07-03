import flowbite from 'flowbite/plugin';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5d87ff',
        'hover-primary': '#6c94ff',
        'light-primary': '#E7EDFF',
        'dark-hover-light-primary': '#2A3541',
        'dark-primary': '#1C252E',
        'soft-blue': '#F2F6FF', // actually for hover when outline

        warning: '#ffae1f',
        'hover-warning': '#ffba3d',
        'light-warning': '#FFEAC7', // actually for hover when outline
        'dark-hover-light-warning': '#4F3E21',

        secondary: '#44b7f7 ',
        'hover-secondary': '#65c5f9',
        'light-secondary': '#E3F4FE',
        'dark-hover-light-secondary': '#1B3141',

        error: 'rgb(250, 137, 107)', // optional: kalau kamu mau pakai text-error
        'hover-error': 'rgb(252, 153, 125)',
        'light-error': '#FEE3E6',
        'dark-hover-light-error': '#362029',

        success: '#13deb9',
        'hover-success': '#2eeecd',
        'light-success': '#C4F7ED',
        'dark-hover-light-success': '#144B47',

        'dark-hover': '#212D3E',
        'bg-dark': '#1C252E',
        'dark-breadcrumb-bg': '#1F2A42',
        'dark-bg-main': '#141A21',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 0 20px rgba(0, 0, 0, 0.05)',
        hard: '0 0 30px rgba(0, 0, 0, 0.1)',
      },
    },
    container: {
      padding: {
        // xl: '10rem',
      },
      center: true,
      screens: {
        xs: '100%',
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
    },
  },
  plugins: [flowbite, animate],
};
