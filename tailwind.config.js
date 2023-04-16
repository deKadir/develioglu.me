/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {},
    colors: {
      primary: "#212121",
      secondary: "#181818",
      txtPrimary: "#fff",
      accent: "#7c7c7c",
      action: "#7EBEE0",
      light: "#D9DDE1",
      tertiary: "#B3BAC3",
      info: "#3D9ACC",
      brand: "#ff6f1e",
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective"), require("tailwind-scrollbar")],
};
