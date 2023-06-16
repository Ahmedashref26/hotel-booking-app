/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./resources/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./node_modules/@left4code/tw-starter/**/*.js"
    // ".//*.html",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)"
      },
      backgroundColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)"
      },
      fontFamily: {
        poppins: ["Poppins"]
      },
      container: {
        center: true
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%"
      },
      strokeWidth: {
        0.5: 0.5,
        1.5: 1.5,
        2.5: 2.5
      },
      screens: {
        xs: "520px", // => @media (min-width: 520px) { ... }
        sm: "640px", // => @media (min-width: 640px) { ... }
        md: "768px", // => @media (min-width: 768px) { ... }
        tab: "890px", // => @media (min-width: 640px) { ... }
        lg: "1024px", // => @media (min-width: 1024px) { ... }
        xl: "1280px", // => @media (min-width: 1280px) { ... }
        "2xl": "1536px" // => @media (min-width: 1536px) { ... }
      }
    }
  }
};
