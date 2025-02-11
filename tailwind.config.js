/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // pour les petits écrans (téléphones)
        'sm': '640px',  // pour les tablettes
        'md': '768px',  // pour les écrans de taille moyenne
        'lg': '1024px', // pour les écrans larges
        'xl': '1280px', // pour les grands écrans
        '2xl': '1536px', // pour les très grands écrans
      },
    },
  },
  plugins: [],
}
