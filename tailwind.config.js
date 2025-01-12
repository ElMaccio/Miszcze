/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundPattern': "url('/topography.svg'), linear-gradient(to top right, #22c55e, #22c55e, #0d9488, #4f46e5)"
      }
    },
  },
  plugins: [],
}