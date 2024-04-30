/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "lemonade",
      "cyberpunk",
      {
        mytheme: {
          primary: "#f59e0b",

          secondary: "#fbbf24",

          accent: "#fcd34d",

          neutral: "#030920",

          "base-100": "#fef3c7",

          info: "#71dcff",

          success: "#22c55e",

          warning: "#c2410c",

          error: "#dc2626",
        },
      },
    ],
  },
};
