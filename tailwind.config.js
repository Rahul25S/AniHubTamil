/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nsansRegular: ['"Nsans Regular"', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        nsansTitle: ['"Nsans Title"', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        nsansHead: ['"Nsans Head"', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
