/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: "#222222",
        devkor: "#F6B55A",
      },
    },
    fontFamily: {
      noto: ["Noto Sans KR"],
    },
  },
  plugins: [],
};
