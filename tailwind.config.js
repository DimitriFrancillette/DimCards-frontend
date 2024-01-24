/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#16697a",
          "secondary": "#82c0cc",
          "accent": "#ede7e3",
          "neutral": "#ffffff",
          "base-100": "#0284C7",
          "info": "#BB3E03",
          "success": "#ffa62b",
          "warning": "#ff0000",
          "error": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
