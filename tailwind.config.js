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
        "secondary-purple-hover": "#675B82"
      },
      fontFamily: {
        'sans': ['roboto'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

