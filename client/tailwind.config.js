/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      colors: {
        'pb-text': '#0C3759',
        'pb-dark-blue': '#0B5078',
        'pb-dark-gray': '#737B7D',
        'pb-container-bg': '#E6F0F6',
        'pb-orange': '#EF8122',
        'pb-light-gray': '#F5F5F5',
        'pb-gray': '#C5C5C5',
        'pb-gray2': '#D5D5D5',
      },
      spacing: {
        '46': '184px',
      }
    },
  },
  plugins: [],
}