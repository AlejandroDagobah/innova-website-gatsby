import React from 'react'

import { Carousel } from "@material-tailwind/react";

export default function HeroBanner(props) {

    const imgElements = props.imgs.map((img, index)=>{
        
        return(
            <div className={`z-0 w-auto min-h-screen ${img} bg-cover bg-bottom bg-no-repeat`}></div>
        )

    })

  return (
    <div>
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

            {imgElements}
            {/* <div className="z-0 w-auto min-h-screen bg-desktopWallpaper1 bg-cover bg-bottom bg-no-repeat"></div>
            <div className="z-0 w-auto min-h-screen bg-desktopWallpaper2 bg-cover bg-bottom bg-no-repeat"></div>
            <div className="z-0 w-auto min-h-screen bg-desktopWallpaper3 bg-cover bg-bottom bg-no-repeat"></div>
            <div className="z-0 w-auto min-h-screen bg-desktopWallpaper4 bg-cover bg-bottom bg-no-repeat"></div> */}
            

        </Carousel>

        {/* <img src="./img/bg-wallpaper.png" className="z-0 h-screen md:h-auto w-full object-cover absolute top-0 left-0 opacity-30" /> */}
        <div className="z-10 flex flex-col px-6 h-screen justify-center relative md:px-36">
            <section className="self-center flex flex-col md:items-center md:text-center">
                <h3 className="font-bold text-InnovaGreen">{props.subtitle}</h3>
                <h1 className="font-bold text-white text-clampMainTitle">{props.title}</h1>
                <p className="text-white mt-4 mb-4 max-w-[540px]">{props.description}</p>
                <a className="max-w-[300px] innovaButton hover:bg-InnovaGreenDarker cursor-pointer ease-in-out delay-100 duration-300">{props.button}</a>
            </section>
        </div>
    </div>
  )
}
