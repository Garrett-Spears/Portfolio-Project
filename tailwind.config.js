/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-purple": "#28202F",
        "secondary-purple": "#82509AB2",
        "secondary-purple-hover": "#675B82",
        "white-with-pink-tint": "#EDE6F5",
      },
      textColor: {
        "off-white-header": "#FFF6F6",
        "header-purple": "#82509A",
        "off-black": "#333333",
      },
      fontFamily: {
        "sans": ["roboto"],
        "roboto": ["Roboto", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],

      },
      stroke: {
        "purple": "#82509A",
        "purple-hover": "#675B82",
      }
    },
  },
  plugins: [],
}

