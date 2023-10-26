import React from 'react'

import Layout from '../components/Layout';
import HeaderResponsive from '../components/HeaderResponsive';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import Cards from '../components/CardsNova';
import NovaprofitProject from '../components/NovaprofitProject';
import SEO from '../components/Seo';
import MetaPixel from '../components/meta/metaPixel';
import info from '../innova-text.json'
import { StaticImage } from 'gatsby-plugin-image';


export default function Novaprofit() {

    const [toggleMenu, setToggleMenu] = React.useState(false);

    
    function novaProfitProjects() {
        var projectElements = info.novaprofit.pool.projects.map((item, index)=>{
            
            return (
                <NovaprofitProject
                    img={item.img}
                    logo={item.logo}
                    location={item.location}
                    description={item.description}
                    button={item.button}
                    url={item.url}
                />
            )

        })

        return projectElements
    }



    function cards() {
        var cardsElements = info.novaprofit.lines.cards.map((item, index)=>{
            
            return (
                <Cards
                    img={item.img}
                    title={item.title}
                    description={item.description}
                    investment={item.investment}
                    url={item.url}
                    color={item.color}
                />
            )

        })

        return cardsElements
    }


    return (
      <Layout 
        gradientColors={'novaprofitGradient'}
      >
        <HeaderResponsive toggle={toggleMenu} setToggle={setToggleMenu} bgColor={'headerScrollNovaprofit'} navLogo={{desktop:'/img/logo-novaprofit.png', movil:'/img/logo-novaprofit-movil.png'}}/>
        
        <HeroBanner
            imgs={[
                "bg-desktopWallpaperNovaprofit"
            ]}
            content={{
                "title": info.novaprofit.cover.title,
                "subtitle": info.novaprofit.cover.subtitle,
                "description": info.novaprofit.cover.description,
                "button": info.novaprofit.cover.button,
                "url": info.novaprofit.cover.url
            }}
            highlightColor={'text-InnovaGreenNovaprofit'}            
            buttonColor={'bg-InnovaGreenNovaprofit hover:bg-InnovaGreenNovaprofitDarker'}  
            bgPos={'bg-left-bottom'}
        />

        {/* CARDS */}
        <div className="z-10 flex flex-col px-6 relative mb-28 justify-center max-w-[1200px] mx-auto">
            <div className="max-w-[550px] md:text-center self-center">
                <h3 className="font-bold text-white md:text-2xl" dangerouslySetInnerHTML={{__html: info.novaprofit.lines.title}}></h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {cards()}
            </div>
        </div>

        {/* NOVAPROFIT */}
        <div className="px-6 max-w-[700px] md:text-center self-center m-auto">
            <h2 className="font-bold text-white text-clampTitle" dangerouslySetInnerHTML={{__html: info.novaprofit.redito.title}}></h2>
        </div>

        <div className="flex flex-col mb-12 lg:-mb-48 md:flex-row-reverse md:justify-between">
            {/* <StaticImage
                src='/img/novaprofit-investment.png'
                className="-mb-3 w-[100%] md:w-[62%] z-10"
                alt="inversiones inmobiliarias" 
                width={1000}
                height={1000}
            /> */}
    
            <img src="/img/hexagon-novaprofit.png" className="-mb-3 w-[100%] md:w-[50%] z-10 hidden md:block -mt-8" alt="inversiones inmobiliarias" />

            <section className="flex flex-col md:justify-top">

                <img src="/img/bars.png" alt="" className='mt-12 hidden sm:block'/>
                <img src="/img/bars-movil.png" alt="" className='mt-8 px-6 block sm:hidden'/>
                {/* <div>
                    <h2 className="text-white font-bold mb-3 text-clampTitle">{info.home.novaprofit.title}</h2>
                    <p className="text-white mb-5 lg:text-lg">{info.home.novaprofit.description}</p>
                    <a className="innovaButton w-auto">{info.home.novaprofit.button}</a>
                </div> */}

            </section>
        </div>

        <a class="anchor" id="pools">a</a>

        <div className="px-6 max-w-[600px] md:text-center self-center m-auto">
            <h2 className="font-bold text-white text-clampTitle" dangerouslySetInnerHTML={{__html: info.novaprofit.pool.title}}></h2>
            {<p className="text-white mt-4 mr-4 mb-4">{info.novaprofit.pool.description}</p>}
        </div>

        <div className='px-6 py-8 pb-24 flex flex-col md:flex-row justify-center items-center m-auto max-w-[1200px]'>
            {novaProfitProjects()}
        </div>

        <div className='px-6 pb-24 max-w-[700px] md:text-center self-center m-auto'>
            <h3 className='font-bold text-white text-clampTitle'>{info.novaprofit.form.title}</h3>
            <p className='text-white mt-4 mr-4 mb-4'>{info.novaprofit.form.description}</p>
            <iframe src="https://apps.clientify.net/formbuilderembed/simpleembed/#/forms/embedform/157182/26397" height="300" width='600' className='overflow-hidden -p-8 w-full'></iframe>

        </div>
    

        <div className="flex flex-col justify-center items-center bg-cover bg-center h-[400px] bg-natureIntelligence">
            <h4 className="font-bold text-white text-center text-clampTitle break-words px-4" dangerouslySetInnerHTML={{__html: info.novaprofit.callToAction.title}}></h4>
            <a className="innovaButton bg-InnovaGreenNovaprofit hover:bg-InnovaGreenNovaprofitDarker transition-all duration-300 ease-in hover:cursor-pointer">{info.novaprofit.callToAction.button}</a>

        </div>

        <Footer/>
      </Layout>
  
    )
  }
  
  // export default Home
  
  export function Head() {
      return(
        <>
            <SEO title="Novaprofit | Inversiones de bienes raíces en Ecuador" description="Invierte en bienes raíces en nuestros proyectos ecológicos y descubre una forma inteligente de crecimiento financiero, donde la sostenibilidad se fusiona con la rentabilidad."/>
            <MetaPixel/>
        </>
    )
  
  }