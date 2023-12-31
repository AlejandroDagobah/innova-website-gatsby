import React from 'react'

import { Carousel } from "@material-tailwind/react";
import { Link } from 'gatsby';

import { IconPhone } from '@tabler/icons-react';

export default function HeroBanner(props) {

    var highlightColor = props.highlightColor || 'text-InnovaGreen'
    var buttonColor = props.buttonColor || 'bg-InnovaGreen hover:bg-InnovaGreenDarker'
    var bgPosition = props.bgPos || 'bg-bottom'

    const imgElements = props.imgs.map((img, index)=>{
        
        return(
            <div className={`z-0 w-auto min-h-screen ${img} ${bgPosition} sm:bg-bottom bg-cover bg-no-repeat`}></div>

        )

    })
  

  return (
    <div>
        <Carousel 
            transition={{type: 'tween', duration: 2}} 
            autoplay={true}
            autoplayDelay={5000}
            loop={true}
            className="min-h-screen h-auto z-0 absolute top-0 left-0 opacity-50"
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

        </Carousel>

        {props.annona ? <AnnonaContent content={props.content} mainColor={props.mainColor}/>: <HeroContent content={props.content} color={highlightColor} buttonColor={buttonColor}/>}
        
    </div>
  )
}

function HeroContent(props){
    return(
        <div className="z-10 flex flex-col px-6 h-screen justify-center relative md:px-36">
            <section className="self-center flex flex-col md:items-center md:text-center">
                <h3 className={`font-bold ${props.color}`}>{props.content.subtitle}</h3>
                <h1 className="font-bold text-white text-clampMainTitle">{props.content.title}</h1>
                <p className="text-white mt-4 mb-4 max-w-[540px]">{props.content.description}</p>
                <Link to={props.content.url} className={`max-w-[300px] innovaButton ${props.buttonColor} cursor-pointer ease-in-out delay-100 duration-300`}>{props.content.button}</Link>
            </section>
        </div>
    )
}

function AnnonaContent(props){

    const mainColor = props.mainColor != undefined ? props.mainColor : "AnnonaYellow"; 

    const buttons = props.content.buttons.map((item, index)=>{
        
        return (
            <Link key={index} className={`max-w-[200px] py-8 px-4 annonaButton ${mainColor.normal} ${mainColor.hover} cursor-pointer ease-in-out delay-100 duration-300 ${mainColor.btnText}`} to={item.url}>
                +
                <br />
                {item.title}
            </Link>
        )

    })


    return(
        <div className="z-10 flex flex-col px-6 h-[120vh] md:h-screen justify-center relative lg:px-36">
            <section className="flex flex-col max-w-[800px]">
                <img src={props.content.logo} alt="" className='max-w-[350px]'/>
                <h3 className="font-bold text-InnovaGreen hidden">{props.content.subtitle}</h3>
                <h1 className="font-bold text-white text-clampMainTitle hidden">{props.content.title}</h1>
                <p className="text-white mt-4 mb-4 max-w-[540px]">{props.content.description}</p>
                <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5'>
                    {buttons}
                    
                    <Link to="/annona#contacto" className='mt-14 w-[60px] h-[60px] bg-AnnonaYellow items-center flex justify-center rounded-full animate-bounce ml-8'>
                        <IconPhone color='#035E36' width='50px' />
                    </Link>
                </div>

            </section>
        </div>
    )
}