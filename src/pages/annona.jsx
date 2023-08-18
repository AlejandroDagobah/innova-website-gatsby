import React from 'react'

import Layout from '../components/Layout'
import HeaderResponsive from '../components/HeaderResponsive'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import Projects from "../components/Projects";

import { Carousel } from "@material-tailwind/react";
import info from "../innova-text.json"


export default function Annona() {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    var sections = info.annona.location.sections.map((item, index)=>{

        return (
            <div>
                <h4 className="text-white font-bold text-lg" dangerouslySetInnerHTML={{__html: item.title}}></h4>
                <p className="text-white mb-5 lg:text-lg">{item.description}</p>
            </div>

        )
    })

    var iconsAmenities = info.annona.amenities.icons.map((item, index)=>{

        return (
            <div className='flex flex-row'>
                <img src={item.img} alt="" className='w-[40px] h-[40px] mr-4' />
                <p className="text-white mb-5 lg:text-lg">{item.description}</p>
            </div>

        )
    })

    // var iconsPagos = info.annona.amenities.icons.map((item, index)=>{

    //     return (
    //         <div className='flex flex-row'>
    //             <img src="" alt="" className='w-[20px] mr-4' />
    //             <p className="text-white mb-5 lg:text-lg">{item.description}</p>
    //         </div>

    //     )
    // })


  return (
    <Layout
        gradientColors={false}
    >
        <HeaderResponsive toggle={toggleMenu} setToggle={setToggleMenu}/>
        <HeroBanner
            imgs={[
                "bg-desktopWallpaperNB1"            
            ]}
            annona={true}
            content={{ 
                'logo': info.annona.cover.logo,
                'title': info.annona.cover.title,
                'subtitle': info.annona.cover.subtitle,
                'description': info.annona.cover.description,
                'buttons': info.annona.cover.buttons
            }}
        />

        
        {/* Vive ecoluxury */}
        <div className="flex flex-col justify-center md:flex-row-reverse md:bg-annonaEcoluxury md:bg-cover md:bg-no-repeat bg-center md:h-[700px]">
            <img src={info.annona.ecoluxury.img} alt="" className="-mb-3 w-[100%] md:w-[62%] max-w-[450px] self-center z-10 block md:hidden "/>
            <section className="px-4 flex flex-col max-w-[420px] items-center justify-center text-center mx-auto">
                <div>
                    <h2 className="text-white font-bold mb-3 text-clampTitle" dangerouslySetInnerHTML={{__html: info.annona.ecoluxury.title}}></h2>
                    <p className="text-white mb-5 lg:text-lg">{info.annona.ecoluxury.description}</p>
                    <a className="innovaButton w-auto">{info.annona.ecoluxury.button}</a>
                </div>

            </section>
        </div>

        {/* UBICACION */}
        <div className="flex flex-col justify-between items-center md:flex-row-reverse my-14 px-6 lg:px-36">
        <iframe className='min-h-[400px] lg:min-h-[600px] map aspect-square' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.9080177750266!2d-78.35785073211493!3d-0.061317512829456584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58b9298ee77d1%3A0xad0fa838126119e5!2s12%20de%20Octubre!5e0!3m2!1ses-419!2sec!4v1692392479343!5m2!1ses-419!2sec" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            
            <section className="px-4 flex flex-col max-w-[420px] items-center mt-8">
                <div>
                    <h2 className="text-white font-bold text-clampTitle" dangerouslySetInnerHTML={{__html: info.annona.location.title}}></h2>
                    <span className='h-[2px] w-[200px] bg-AnnonaYellow block my-4'></span>
                    {sections}
                </div>

            </section>
        </div>

        {/* AMENITIES */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-14">
            <div className='h-[800px] max-w-[40%] flex-1'>
                <Carousel 
                    transition={{type: 'tween', duration: 2}} 
                    autoplay={true}
                    autoplayDelay={5000}
                    loop={true}
                    className="h-full w-full"

                >

                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities1 `}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities2`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities3`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities4`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities5`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities6 `}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities7 `}></div>
                            

                </Carousel>
            </div>

            <section className="px-4 flex flex-col items-center mt-8 flex-1">
                <div>
                    <h2 className="text-white font-bold text-clampTitle" dangerouslySetInnerHTML={{__html: info.annona.amenities.title}}></h2>
                    <span className='h-[2px] w-[200px] bg-AnnonaYellow block my-4'></span>
                    <p className="text-white mb-5 lg:text-lg">{info.annona.amenities.description}</p>

                    <div className='grid grid-cols-2 gap-2 max-w-[400px]'>
                        {iconsAmenities}

                    </div>
                </div>

            </section>
        </div>

        {/* Interiores */}
        <div className="flex flex-col md:flex-row justify-between items-center">
            
                <Carousel 
                    transition={{type: 'tween', duration: 2}} 
                    loop={true}
                    className="h-[700px] w-full"

                >

                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores1 `}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores2`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores3`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores4`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores5`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores6 `}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores7`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores8`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores9`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores10`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-annonaInteriores11`}></div>
                            

                </Carousel>
          
        </div>

        {/* Planos */}
        <div className="flex flex-col md:flex-row md:flex-row-reverse justify-between items-center">
            <div className='h-[500px]max-w-[50%] flex-1'>
                <Carousel 
                    transition={{type: 'tween', duration: 2}} 
                    autoplay={true}
                    autoplayDelay={5000}
                    loop={true}
                    className="h-[450px] w-[950px]"

                >

                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities1 `}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities2`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities3`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities4`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities5`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities6 `}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-annonaAmenities7 `}></div>
                            

                </Carousel>
            </div>

            <section className="px-4 flex flex-col items-center mt-8 flex-1">
                <div>
                    <h2 className="text-white font-bold text-clampTitle" dangerouslySetInnerHTML={{__html: info.annona.planos.title}}></h2>
                    <span className='h-[2px] w-[200px] bg-AnnonaYellow block my-4'></span>
                    <p className="text-white mb-5 lg:text-lg">{info.annona.planos.description}</p>

                </div>

            </section>
        </div>


        <div className='flex flex-col justify-center items-center text-center w-full h-[800px] bg-eco bg-cover bg-center'>
            <h2 className="text-white font-bold text-clampTitle" dangerouslySetInnerHTML={{__html: info.annona.ecoamigable.title}}></h2>
            <p className="text-white mb-5 lg:text-lg">{info.annona.ecoamigable.description}</p>

        </div>

        <div className='flex flex-col text-center w-full h-[500px] bg-eco bg-cover bg-center'>
            <h2 className="text-white font-bold text-clampTitle mb-4">Formas de Pago</h2>
            <div className='flex-row flex gap-5 justify-center'>
                <div className='flex flex-col justify-center text-center'>
                    <img src='/img/icons-annona/piscina.png' alt="" className='w-[40px] h-[40px] mr-4' />
                    <p className="text-white mb-5 lg:text-lg">Contado</p>
                </div>
                <div className='flex flex-col justify-center  text-center'>
                    <img src='/img/icons-annona/piscina.png' alt="" className='w-[40px] h-[40px] mr-4' />
                    <p className="text-white mb-5 lg:text-lg">Contado</p>
                </div>
                <div className='flex flex-col justify-center  text-center'>
                    <img src='/img/icons-annona/piscina.png' alt="" className='w-[40px] h-[40px] mr-4' />
                    <p className="text-white mb-5 lg:text-lg">Contado</p>
                </div>
            </div>
           

        </div>


        <Footer/>

    </Layout>
    
  )
}
