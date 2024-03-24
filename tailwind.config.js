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
          "accent": "#65a30d",
          "neutral": "#ffffff",
          "base-100": "#0284C7",
          "info": "#ffd700",
          "success": "#ffa62b",
          "warning": "#38bdf8",
          "error": "#0000ff",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    function({addUtilities}) {
      const newUtilities = {
        //for chrome
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        //for firefox
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        //for firefox
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarcolor: "rgb(31 29 29) white",
        },
        //for chrome
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar" : {
            width: "8px"
          },
          "&::-webkit-scrollbar-track" : {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
      };
      addUtilities(newUtilities, ["responsive", "hover"])
    },
  ],
};
