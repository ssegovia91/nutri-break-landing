/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A6F4D", // verde hoja
        secondary: "#6B4A2D", // café cacao
        cream: "#F7F5EF",
        dark: "#2E2E2E",

        // acentos frutales
        "rose-fruit": "#E8B4C8",
        banana: "#F2C94C",
        grape: "#7B5EA7",
        "berry-blue": "#4A90E2",
        kiwi: "#7CB342",
        "energy-orange": "#F2994A",
        "purpleBrand": "#7C5CC4",
        accent: "rgb(201 162 77)",       // café
    "rose-cream": "rgb(232 180 200)",// rosa
    cream: "rgb(247 245 239)",       // crema
      },
    },
  },
  plugins: [],
};
