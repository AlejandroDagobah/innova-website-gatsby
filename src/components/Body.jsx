import React from "react"
import info from "../innova-text.json"

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
    
    return(
        <div className="">

            <img src="./img/bg-wallpaper.png" className="z-0 h-screen md:h-auto w-full object-cover absolute top-0 left-0 opacity-30" />

            <div className="z-10 flex flex-col px-6 h-screen justify-center relative md:px-36 md:text-center md:px-[10rem] lg:py-42 xl:px-[25rem] ">
                <section className="self-center">
                    <h3 className="font-bold text-InnovaGreen">{info.home.cover.subtitle}</h3>
                    <h1 className="font-bold text-white lg:text-6xl">{info.home.cover.title}</h1>
                    <p className="text-white mt-4 mr-4 mb-4 lg:px-32">{info.home.cover.description}</p>
                    <a className="innovaButton transform translate-y-6 hover:translate-y-1 hover:bg-InnovaGreenDarker cursor-pointer ease-in-out delay-100 duration-300">{info.home.cover.button}</a>
                </section>
            </div>
            
            <div className="z-10 flex flex-col px-6 relative mb-28 ">
                    <div className=" md:w-[50%] lg:w-[30%] md:text-center self-center">
                        <h3 className="font-bold text-white md:text-2xl">{info.home.lines.subtitle}</h3>
                        {/* <p className="text-white mt-4 mr-4 mb-4">{info.home.lines.description}</p> */}
                    </div>

                    <div className="flex flex-col align-center justify-center md:flex-row">
                        {cards()}
                    </div>
            </div>  
        
            <div className="mb-12">
                <section className="px-6 md:text-center">
                    <h3 className="font-bold text-white md:text-3xl">Proyectos <span className="text-InnovaGreen">Novabuilding</span></h3>
                    <p className="text-white mt-4 mr-4 mb-4">{info.home.lines.description}</p>\
                </section>
                <section className="flex flex-row h-[450px] md:h-[700px]">
                  {projects()}
                </section>
            </div>

            <div className="flex flex-col md:-mb-36 md:flex-row-reverse">
                <img src={info.home.novaprofit.img} alt="" className="-mb-3 sm:w-[450px]  md:w-[1100px] z-10"/>
                <section className="px-6 flex flex-col justify-center md:ml-[190px] lg:pr-52 ">
                    <div>
                        <h2 className="text-white font-bold mb-3 lg:text-6xl">{info.home.novaprofit.title}</h2>
                        <p className="text-white mb-5 lg:text-lg">{info.home.novaprofit.description}</p>
                        <a className="innovaButton w-auto">{info.home.novaprofit.button}</a>
                    </div>

                </section>
            </div>

            <div className="flex flex-col bg-movilBlock bg-cover bg-bottom md:flex-row md:bg-desktopBlock h-[450px] sm:h-[900px] z-20 relative">
                <div className="flex-1"></div>
                <section className="px-6 flex-1 flex flex-col justify-center lg:pr-24 md:px-12">
                    <h3 className="text-white font-bold mb-3 text-5xl lg:text-6xl">{info.home.nuestroCompromiso.title}</h3>
                    <p className="text-white mb-5 text-lg">{info.home.nuestroCompromiso.description}</p>
                </section>
                
            </div>

            <div className="flex flex-col justify-center items-center bg-cover bg-center h-[400px] bg-natureIntelligence">
                <h4 className="font-bold text-white text-center text-4xl break-all px-4">{info.home.callToAction.title}</h4>
                <a className="innovaButton">{info.home.callToAction.button}</a>

            </div>

        </div>
    )
}