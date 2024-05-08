/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'UT-orange': '#FF8811',
        'Selective-Yellow' : '#e85d04',
        'Floral-white': '#FFF8F0',
        'Smoky-black': '#130E01',
        'Timberwolf-gray' : '#D4D4D4',
        'Engi-red' : '#BB0000'
      }
    },
  },
  plugins: [],
}

