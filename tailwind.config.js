/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      screens:{
        'xs': '280px',
        'sm': '425px',
        'md': '768px',  
        'lg': '1024px',
        'xl': '1200px',
      }, 
      colors: {
        InnovaBlueBG: 'rgba(43, 56, 69, 1)',
        InnovaBlueDarkerBG: 'rgba(31, 43, 56, 1)',
        InnovaBlue: '#2B3845',
        InnovaBlueLight: '#1C3C5E',
        InnovaBlueDark: '#1F2B38',
        InnovaGreen: '#7FBA42',
        InnovaGreenDarker: '#548A1C',
  
      },

      rotate: {
        '270': '270deg',
      },
      flex: {
        '4': '4 4 0%'
      },
      dropShadow: {
        '3xl': '3px 3px 5px rgba(0,0,0,0.5);',
      },
      backgroundImage: {
        'movilBlock': "url('../../static/img/forest-block-movil.png')",
        'desktopBlock': "url('../../static/img/forest-block-desktop.png')",
        'natureIntelligence': "url('../../static/img/nature-tech-bg.png')",
        'hojaDesktop': "url('../../static/img/hojas-desktop.png')",

        'desktopWallpaper1': "url('../../static/img/bg-wallpaper-annona-1.png')",
        'desktopWallpaper2': "url('../../static/img/bg-wallpaper-annona-2.png')",
        'desktopWallpaper3': "url('../../static/img/bg-wallpaper-annona-3.png')",
        'desktopWallpaper4': "url('../../static/img/bg-wallpaper-annona-4.png')"
      },
      fontSize: {
        clampTitle: "clamp(2rem, 6vw, 3rem)",
        clampText: "clamp(0.75rem, 0.6798rem + 0.4321vw, 1rem)"
      },
    }

  },
  plugins: [],
})
