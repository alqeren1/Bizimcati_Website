/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-dark-blue': '#384B70',   // Normal State
        'navbar-teal-blue': '#507687',   // Hover State
        'navbar-red': '#B8001F',         // Active State
        'navbar-background': '#FCFAEE',   // Background
      },
    },
  },
  plugins: [require('daisyui'),],


}

