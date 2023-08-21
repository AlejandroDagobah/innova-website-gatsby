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
        'sm': '426px',
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
        InnovaRed: '#BA4242',
        
        AnnonaGreenBG: '#035E36',
        AnnonaGreenBG2: '#',
        AnnonaYellow: '#FCE269',
        AnnonaYellowHover: '#FFDD41',


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
        'movilBlock': "url('/img/forest-block-movil.png')",
        'desktopBlock': "url('/img/forest-block-desktop.png')",
        'natureIntelligence': "url('/img/nature-tech-bg.png')",
        'hojaDesktop': "url('/img/hojas-desktop.png')",
        'hojaMovil': "url('/img/hoja.png')",

        'hexagons': "url('/img/hexagons-red.png')",
        'hexagonsDesktop': "url('/img/hexagons-desktop.png')",

        'desktopWallpaper1': "url('/img/bg-wallpaper-annona-1.png')",
        'desktopWallpaper2': "url('/img/bg-wallpaper-annona-2.png')",
        'desktopWallpaper3': "url('/img/bg-wallpaper-annona-3.png')",
        'desktopWallpaper4': "url('/img/bg-wallpaper-annona-4.png')",

        'desktopWallpaperNB1': "url('/img/bg-wallpaper-annona-fachada.png')",
        'desktopWallpaperNB2': "url('/img/bg-wallpaper-altamira-fachada.png')",

        'annonaEcoluxury': "url('/img/annona-ecoluxury-bg-desktop.png')",

        'annonaAmenities1': "url('/img/annona-renders/amenities/amenities-1.png')",
        'annonaAmenities2': "url('/img/annona-renders/amenities/amenities-2.png')",
        'annonaAmenities3': "url('/img/annona-renders/amenities/amenities-3.png')",
        'annonaAmenities4': "url('/img/annona-renders/amenities/amenities-4.png')",
        'annonaAmenities5': "url('/img/annona-renders/amenities/amenities-5.png')",
        'annonaAmenities6': "url('/img/annona-renders/amenities/amenities-6.png')",
        'annonaAmenities7': "url('/img/annona-renders/amenities/amenities-7.png')",

        'annonaInteriores1': "url('/img/annona-renders/interiores/annona-interiores-1.png')",
        'annonaInteriores2': "url('/img/annona-renders/interiores/annona-interiores-2.png')",
        'annonaInteriores3': "url('/img/annona-renders/interiores/annona-interiores-3.png')",
        'annonaInteriores4': "url('/img/annona-renders/interiores/annona-interiores-4.png')",
        'annonaInteriores5': "url('/img/annona-renders/interiores/annona-interiores-5.png')",
        'annonaInteriores6': "url('/img/annona-renders/interiores/annona-interiores-6.png')",
        'annonaInteriores7': "url('/img/annona-renders/interiores/annona-interiores-7.png')",
        'annonaInteriores8': "url('/img/annona-renders/interiores/annona-interiores-8.png')",
        'annonaInteriores9': "url('/img/annona-renders/interiores/annona-interiores-9.png')",
        'annonaInteriores10': "url('/img/annona-renders/interiores/annona-interiores-10.png')",
        'annonaInteriores11': "url('/img/annona-renders/interiores/annona-interiores-11png')",

        'Eco': "url('/img/background-eco-desktop.png')",
        'EcoMovil': "url('/img/background-ecoamigable-movil.png')",
        'hexagonsHouse': "url('/img/hexagons-img.png')",
        

        'annonaPlano1': "url('/img/annona-renders/planos/plano-1.png')",
        'annonaPlano2': "url('/img/annona-renders/planos/plano-2.png')",
        'annonaPlano3': "url('/img/annona-renders/planos/plano-3.png')",
        'annonaPlano4': "url('/img/annona-renders/planos/plano-4.png')",
        'annonaPlano5': "url('/img/annona-renders/planos/plano-5.png')",
        'annonaPlano6': "url('/img/annona-renders/planos/plano-6.png')",
        'notFoundBG': "url('/img/bg-wallpaper-not-found.png')"
      },
      fontSize: {
        clampMainTitle: "clamp(2.5rem, 7vw, 4rem)",
        clampTitle: "clamp(2rem, 6vw, 3rem)",
        clampText: "clamp(0.75rem, 0.6798rem + 0.4321vw, 1rem)"
      },
    }

  },
  plugins: [],
})
