import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#5D87FF',
        secondary: '#F2F6FF',
        darkHover: '#212D3E',
        darkBg: '#1C252E',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
