/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F59E0B",
          focus: "#D97706",
        },
        secondary: "#64748B",
        neutral: {
          DEFAULT: "#F1F5F9",
          subtle: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};
