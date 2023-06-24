/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'body': ['roboto', 'sans-serif'],
      'title': ['inconsolata', 'serif']
    },
    extend: {
      colors: {
        'primary': '#689C44',
        'lightPrimary': '#D9FFBF',
        'body': '#FFFFFF'
      }
    },
  },
  plugins: [],
}

