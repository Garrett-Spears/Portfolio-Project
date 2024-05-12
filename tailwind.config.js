/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  // Need to safelist custom colors being used in string interpolation to avoid purge
  safelist: [
    "text-lockheed",
    "text-meta",
    "text-amazon",
    "text-ucf-ta",
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
        "lockheed": "#005BAD",
        "meta": "#2443E5",
        "amazon": "#FF9900",
        "ucf-ta": "#BA9B37",
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

