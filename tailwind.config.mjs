/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A6F4D",   // verde profesional
        accent: "#C9A24D",    // dorado café
        cream: "#F7F5EF",
        dark: "#2E2E2E",
        "rose-cream": "#E8B4C8"
      },
    },
  },
  plugins: [],
};