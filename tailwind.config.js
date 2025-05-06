import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#5d87ff',
        'primary-hover': '#6c94ff',
        'light-primary': '#E7EDFF',
        'primary-dark': '#1C252E',
        'soft-blue': '#F2F6FF', // actually for hover when outline

        warning: '#ffae1f',
        'warning-hover': '#ffba3d',
        'light-warning': '#FFEAC7', // actually for hover when outline
        'warning-dark': '#4F3E21',

        secondary: '#44b7f7 ',
        'secondary-hover': '#65c5f9',
        'light-secondary': '#E3F4FE',
        'secondary-dark': '#1B3141',

        error: 'rgb(250, 137, 107)', // optional: kalau kamu mau pakai text-error
        'error-hover': 'rgb(252, 153, 125)',
        'light-error': '#FEE3E6',
        'error-dark': '#362029',

        success: '#13deb9',
        'success-hover': '#2eeecd',
        'light-success': '#C4F7ED',
        'success-dark': '#144B47',

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
  plugins: [flowbite.plugin()],
};
