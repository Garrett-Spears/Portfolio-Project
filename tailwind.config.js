/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#28202F",
      },
    },
  },
  plugins: [],
}

