/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pb-text': '#0C3759',
        'pb-dark-blue': '#0B5078',
        'pb-dark-gray': '#737B7D',
        'pb-container-bg': '#E6F0F6',
      }
    },
  },
  plugins: [],
}