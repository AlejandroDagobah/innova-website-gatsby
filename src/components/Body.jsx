import React from "react"
import info from "../innova-text.json"
import { Carousel, IconButton } from "@material-tailwind/react";

import Cards from "./Cards";
import Projects from "./Projects";

export default function Body(){



    function cards() {
        var cardsElements = info.home.lines.cards.map((item, index)=>{
            
            var backgroundImage = {
                backgroundImage: `url(${item.link})`,
            };

            return (
                <Cards 
                    img={item.link}
                    title={item.title}
                    description={item.description}
                />
            )

        })

        return cardsElements
    }

    function projects() {
        var projectElements = info.home.projects.projectCards.map((item, index)=>{

            return (
                <Projects
                    img={item.img}
                    title={item.title}
                    location={item.location}
                />
            )
        })

        return projectElements
        
    }


      const [ctaTitle, setCtaTitle] = React.useState("")

      React.useEffect(() => {
        setCtaTitle(info.home.callToAction.title)
      }, [ctaTitle])
    
    
    return(
        <div className="">

            <Carousel 
                transition={{type: 'tween', duration: 2}} 
                autoplay={true}
                autoplayDelay={5000}
                loop={true}
                className="min-h-screen h-auto z-0 absolute top-0 left-0 opacity-30"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div>

                    </div>
                )}
                prevArrow={({}) =>{
                    <div>

                    </div>
                }}
                nextArrow={({}) =>{
                    <div>
                        
                    </div>
                }}
                >
                
                <div className="z-0 w-auto min-h-screen bg-desktopWallpaper1 bg-cover bg-bottom bg-no-repeat"></div>
                <div className="z-0 w-auto min-h-screen bg-desktopWallpaper2 bg-cover bg-bottom bg-no-repeat"></div>
                <div className="z-0 w-auto min-h-screen bg-desktopWallpaper3 bg-cover bg-bottom bg-no-repeat"></div>
                <div className="z-0 w-auto min-h-screen bg-desktopWallpaper4 bg-cover bg-bottom bg-no-repeat"></div>
                

            </Carousel>

            {/* <img src="./img/bg-wallpaper.png" className="z-0 h-screen md:h-auto w-full object-cover absolute top-0 left-0 opacity-30" /> */}
            <div className="z-10 flex flex-col px-6 h-screen justify-center relative md:px-36 md:text-center">
                <section className="self-center flex flex-col md:items-center">
                    <h3 className="font-bold text-InnovaGreen">{info.home.cover.subtitle}</h3>
                    <h1 className="font-bold text-white lg:text-6xl">{info.home.cover.title}</h1>
                    <p className="text-white mt-4 mb-4 max-w-[540px]">{info.home.cover.description}</p>
                    <a className="max-w-[300px] innovaButton hover:bg-InnovaGreenDarker cursor-pointer ease-in-out delay-100 duration-300">{info.home.cover.button}</a>
                </section>
            </div>

            {/* CARDS */}
            <div className="z-10 flex flex-col px-6 relative mb-28 justify-center max-w-[1200px] mx-auto">
                    <div className="max-w-[550px] md:text-center self-center">
                        <h3 className="font-bold text-InnovaGreen md:text-2xl">{info.home.lines.subtitle}</h3>
                        {<p className="text-white mt-4 mr-4 mb-4">{info.home.lines.description}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {cards()}
                    </div>
            </div>
        
            {/* PROJECTS */}
            <div className="mb-12">
                <section className="px-6 md:text-center">
                    <h3 className="font-bold text-white md:text-3xl">Proyectos <span className="text-InnovaGreen">Novabuilding</span></h3>
                    <p className="text-white mt-4 mr-4 mb-4">{info.home.projects.description}</p>
                </section>
                <section className="flex flex-row h-[450px] md:h-[700px]">
                  {projects()}
                </section>
            </div>

            {/* NOVAPROFIT */}
            <div className="flex flex-col mb-12 md:-mb-36 md:flex-row-reverse">
                <img src={info.home.novaprofit.img} alt="" className="-mb-3 w-[100%] md:w-[62%] z-10"/>
                <section className="pl-8 flex flex-col justify-center max-w-[420px]">
                    <div>
                        <h2 className="text-white font-bold mb-3 text-clampTitle">{info.home.novaprofit.title}</h2>
                        <p className="text-white mb-5 lg:text-lg">{info.home.novaprofit.description}</p>
                        <a className="innovaButton w-auto">{info.home.novaprofit.button}</a>
                    </div>

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

        </div>
    )
}