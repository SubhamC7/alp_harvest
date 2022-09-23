module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backdrop: "#0000007d",
        transparent: "rgba(255, 255, 255, 0)",
        transparentD: "#000000a8",
        transparentD2: "#00000085",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};

// "theme-color": "#0a9396",
