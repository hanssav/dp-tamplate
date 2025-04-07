import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  // safelist: [
  //   'bg-light-primary',
  //   'text-text-light-primary',
  //   'bg-light-warning',
  //   'text-text-light-warning',
  //   'bg-light-secondary',
  //   'text-text-light-secondary',
  //   'bg-light-error',
  //   'text-text-light-error',
  //   'bg-light-success',
  //   'text-text-light-success',
  // ],
  theme: {
    extend: {
      colors: {
        primary: '#5D87FF',
        'light-primary': '#E7EDFF',

        warning: '#ffae1f',
        'light-warning': '#FFEAC7',

        'light-secondary': '#E3F4FE',
        secondary: '#44b9f7', // ✅ perbaiki ini

        error: '#fa896b', // optional: kalau kamu mau pakai text-error
        'light-error': '#FEE3E6',

        success: '#35e4c7',
        'light-success': '#C4F7ED',

        'soft-blue': '#F2F6FF',
        'dark-hover': '#212D3E',
        'bg-dark': '#1C252E',
        'dark-breadcrumb-bg': '#1F2A42',
        'dark-bg-main': '#141A21',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
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
