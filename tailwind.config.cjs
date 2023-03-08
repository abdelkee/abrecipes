const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      background: "#F7FFEE",
      primary: {
        50: "#f0ffe0",
        100: "#daffbb",
        200: "#b8ff80",
        300: "#87ff37",
        400: "#5cff00",
        500: "#3bff00",
        600: "#27d300",
        700: "#1d9f00",
        800: "#197b00",
        900: "#135c00",
      },
      secondary: {
        50: "#ffffe7",
        100: "#fdffc1",
        200: "#fffe86",
        300: "#fff541",
        400: "#ffe70d",
        500: "#ffd800",
        600: "#d19f00",
        700: "#a67202",
        800: "#89580a",
        900: "#74480f",
      },
      terery: {
        50: "#fef1f7",
        100: "#fde6f1",
        200: "#fdcde4",
        300: "#fda4cc",
        400: "#fb64a5",
        500: "#f53f88",
        600: "#e51d63",
        700: "#c70f4a",
        800: "#a4103e",
        900: "#891237",
      },
      acent: {
        50: "#f5f3ff",
        100: "#ede8ff",
        200: "#dbd5ff",
        300: "#b5a3ff",
        400: "#a488fd",
        500: "#8758fa",
        600: "#7935f2",
        700: "#6a23de",
        800: "#581dba",
        900: "#491a98",
      },
    },
  },
  plugins: [],
};

module.exports = config;
