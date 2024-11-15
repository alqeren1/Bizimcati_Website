/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "370px", // Custom breakpoint below the 'sm' breakpoint (default: 640px)
      },
    },
  },
  plugins: [require("daisyui")],
};
