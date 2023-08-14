/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      screens:{
        'xs': '280px',       
        'lg': '1024',
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
        'hojaDesktop': "url('../../static/img/hojas-desktop.png')"
      }
    }

  },
  plugins: [],
}

