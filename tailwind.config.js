//  @type {import('tailwindcss').Config}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        mytheme: {
          primary: "#1e9ffc",

          secondary: "#334ed6",

          accent: "#0b2d75",

          neutral: "#18182a",

          "base-100": "#373347",

          info: "#65bdec",

          success: "#269c82",

          warning: "#bf7908",

          error: "#eb2719",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
