import React from 'react'
import Layout from '../components/Layout'
import HeaderResponsive from '../components/HeaderResponsive'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import Projects from "../components/Projects";
import SEO from '../components/Seo'
import MetaPixel from '../components/meta/metaPixel';

import info from "../innova-text.json"

export default function NovaBuilding() {


    const [toggleMenu, setToggleMenu] = React.useState(false);

    function projects() {
        var projectElements = info.home.projects.projectCards.map((item, index)=>{

            return (
                <Projects
                    img={item.img}
                    title={item.title}
                    location={item.location}
                    url={item.url}

                />
            )
        })

        return projectElements
        
    }



  return (
    <Layout
        gradientColors={'blueGradient'}
    >
        <HeaderResponsive toggle={toggleMenu} setToggle={setToggleMenu}/>
        <HeroBanner
            imgs={[
                "bg-desktopWallpaperNB2",
                "bg-desktopWallpaperNB1"
            ]}
            annona={false}
            content={{
                "title": info.novabuilding.cover.title,
                "subtitle": info.novabuilding.cover.subtitle,
                "description": info.novabuilding.cover.description,
                "button": info.novabuilding.cover.button,
                "url": info.novabuilding.cover.url
            }}
            

        />

        {/* PROJECTS */}
        <div id='projects'>
            <section className="px-6 md:text-center">
                <h3 className="font-bold text-white md:text-3xl">Proyectos <span className="text-InnovaGreen">Novabuilding</span></h3>
                <p className="text-white my-4 mx-auto">{info.home.projects.description}</p>
            </section>
            <section className="flex flex-row h-[450px] md:h-[700px]">
                {projects()}
            </section>
        </div>

        {/* El peligro de la contruccion */}
        <div className="flex flex-col bg-top md:bg-bottom bg-cover md:flex-row h-[650px] md:h-[900px] z-20 relative mb-[100px] sm:mb-[200px] md:mb-[0px]">
            <div className="flex-1 flex justify-center md:bg-hexagonsDesktop md:bg-contain md:bg-left bg-hexagons md: p-6 bg-cover bg-bottom bg-no-repeat min-h-[400px] sm:min-h-[600px]">
                <img src='/img/costruccion-tradicional.png' alt="" className='self-center xl:pl-14 w-auto sm:w-[80%]'/>
            </div>
            <section className="px-6 flex-1 flex flex-col justify-center lg:pr-48 md:px-14 text-right">
                <h5 className="font-bold mb-3 text-InnovaRed text-2xl w-auto">{info.novabuilding.peligro.subtitle}</h5>
                <h3 className="text-white font-bold mb-3 text-clampTitle w-auto" dangerouslySetInnerHTML={{__html: info.novabuilding.peligro.title}}></h3>
                <p className="text-white mb-5 text-lg max-w-[420px] self-right ml-auto w-auto">{info.novabuilding.peligro.description}</p>
            </section>
        </div>



        {/* Nuestro Compromiso */}
        <div className="flex flex-col bg-movilBlock bg-top md:bg-bottom bg-cover sm:flex-row sm:bg-desktopBlock h-[650px] md:h-[900px] z-20 relative">
            <div className="flex-1"></div>
            <section className="px-6 flex-1 flex flex-col justify-center lg:pr-24 md:px-12">
                <h3 className="text-white font-bold mb-3 text-clampTitle lg:text-6xl">{info.home.nuestroCompromiso.title}</h3>
                <p className="text-white mb-5 text-lg max-w-[420px]">{info.home.nuestroCompromiso.description}</p>
            </section>
        </div>

        <div className="flex flex-col justify-center items-center bg-cover bg-center h-[400px] bg-natureIntelligence">
            <h4 className="font-bold text-white text-center text-clampTitle break-words px-4" dangerouslySetInnerHTML={{__html: info.home.callToAction.title}}></h4>
            <a className="innovaButton">{info.home.callToAction.button}</a>

        </div>
    

        <Footer/>
    </Layout>
  )
}



export function Head() {
    return(
        <>
            <SEO title="Novabuilding | Proyectos de bienes raíces en Ecuador" description="Construimos proyectos inmobiliarios con nuestro propio sistema ecologíco de diseño y acabados de primera."/>
            <MetaPixel/>
        </>
    )

}