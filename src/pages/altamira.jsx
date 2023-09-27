import React from 'react'

import Layout from '../components/Layout'
import HeaderResponsive from '../components/HeaderResponsive'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import SEO from '../components/Seo'

import { Carousel } from "@material-tailwind/react";
import info from "../innova-text.json"


export default function Altamira() {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    var sections = info.altamira.location.sections.map((item, index)=>{

        return (
            <div className='mt-4'>
                <h4 className="text-white font-bold text-lg" dangerouslySetInnerHTML={{__html: item.title}}></h4>
                <ul className="text-white mb-5 lg:text-lg list-disc ml-6"  dangerouslySetInnerHTML={{__html: item.description}}></ul>

                
            </div>

        )
    })

    var iconsAmenities = info.altamira.amenities.icons.map((item, index)=>{

        return (
            <div className='flex flex-row'>
                <img src={item.img} alt="" className='w-[40px] h-[40px] mr-4' />
                <p className="text-white mb-5 text-clampText lg:text-lg">{item.description}</p>
            </div>

        )
    })

    // var iconsPagos = info.altamira.amenities.icons.map((item, index)=>{

    //     return (
    //         <div className='flex flex-row'>
    //             <img src="" alt="" className='w-[20px] mr-4' />
    //             <p className="text-white mb-5 lg:text-lg">{item.description}</p>
    //         </div>

    //     )
    // })


  return (
    <Layout
        gradientColors={'altamiraGradient'}
    >
        <HeaderResponsive toggle={toggleMenu} setToggle={setToggleMenu} bgColor={'headerScrollaltamira'}/>
        <HeroBanner
            imgs={[
                "bg-desktopWallpaperNB2"            
            ]}
            altamira={true}
            content={{ 
                'logo': info.altamira.cover.logo,
                'title': info.altamira.cover.title,
                'subtitle': info.altamira.cover.subtitle,
                'description': info.altamira.cover.description,
                'buttons': info.altamira.cover.buttons,
            }}
            mainColor={{normal:'bg-AltamiraTurquoise/60', hover:'hover:bg-AltamiraTurquoise'}}

        />

        
        {/* Vive ecoluxury */}
        <div className="flex flex-col justify-center md:flex-row-reverse md:bg-altamiraEcoluxury md:bg-cover md:bg-no-repeat bg-center md:h-[700px]">
            <img src={info.altamira.ecoluxury.img} alt="" className="-mb-3 w-[100%] md:w-[62%] max-w-[450px] self-center z-10 block md:hidden "/>
            <section className="px-4 flex flex-col max-w-[420px] items-center justify-center text-center mx-auto">
                <div>
                    <h2 className="text-white font-bold mb-3 text-clampTitle" dangerouslySetInnerHTML={{__html: info.altamira.ecoluxury.title}}></h2>
                    <p className="text-white mb-5 lg:text-lg">{info.altamira.ecoluxury.description}</p>
                    <a className="innovaButton w-auto">{info.altamira.ecoluxury.button}</a>
                </div>

            </section>
        </div>


        {/* UBICACION */}
        <div id='ubicacion' className="flex flex-col justify-center items-center md:flex-row-reverse my-14 px-6 lg:px-36">

            <iframe className='w-[90vw] md:w-[60vw] md:max-w-[40%] map aspect-square flex-1 md:ml-[100px] lg:ml-[200px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.9080177750266!2d-78.35785073211493!3d-0.061317512829456584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58b9298ee77d1%3A0xad0fa838126119e5!2s12%20de%20Octubre!5e0!3m2!1ses-419!2sec!4v1692392479343!5m2!1ses-419!2sec" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            

            <section className="px-4 py-8 flex flex-col items-center md:mt-8">
                <div>
                    <h2 className="text-white font-bold text-clampTitle" dangerouslySetInnerHTML={{__html: info.altamira.location.title}}></h2>
                    <span className='h-[2px] w-[200px] bg-altamiraYellow block my-4'></span>

                    {sections}
                    
                </div>

            </section>
        </div>

        {/* AMENITIES */}
        <div id='amenities' className="flex flex-col md:flex-row justify-between items-center mt-14">
            <div className='h-[800px] w-[100%] md:max-w-[40%] flex-1'>
                <Carousel 
                    transition={{type: 'tween', duration: 2}} 
                    autoplay={true}
                    autoplayDelay={5000}
                    loop={true}
                    className="h-[400px] w-[100vw] md:h-full md:w-full"

                >

                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-altamiraAmenities1 `}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-altamiraAmenities2`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-altamiraAmenities3`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-altamiraAmenities4`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-altamiraAmenities5`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-altamiraAmenities6 `}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-bottom bg-no-repeat bg-altamiraAmenities7 `}></div>
                            

                </Carousel>
            </div>

            <section className="px-4 py-8 flex flex-col items-center md:mt-8 flex-1">
                <div>
                    <h2 className="text-white font-bold text-clampTitle" dangerouslySetInnerHTML={{__html: info.altamira.amenities.title}}></h2>
                    <span className='h-[2px] w-[200px] bg-altamiraYellow block my-4'></span>
                    <p className="text-white mb-5 lg:text-lg">{info.altamira.amenities.description}</p>

                    <div className='grid grid-cols-2 gap-3 max-w-[450px]'>
                        {iconsAmenities}

                    </div>
                </div>

            </section>
        </div>

        {/* Interiores */}
        <div id='interiores' className="flex flex-col md:flex-row justify-between items-center">
            
                <Carousel 
                    transition={{type: 'tween', duration: 2}} 
                    loop={true}
                    className="h-[700px] w-full"

                >

                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores1 `}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores2`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores3`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores4`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores5`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores6 `}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores7`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores8`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores9`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores10`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-center bg-no-repeat bg-altamiraInteriores11`}></div>
                            

                </Carousel>
          
        </div>

        {/* Planos */}
        <div id='planos' className="flex flex-col md:flex-row md:flex-row-reverse justify-between items-center">
            <div className='h-[500px] w-[100%] md:max-w-[50%] flex-1'>
                <Carousel 
                    transition={{type: 'tween', duration: 2}} 
                    autoplay={true}
                    autoplayDelay={5000}
                    loop={true}
                    className="h-[400px] w-[100vw] md:h-full md:w-full"

                >

                    <div className={`z-0 w-auto h-full bg-altamiraPlano1 bg-cover bg-bottom bg-no-repeat`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-altamiraPlano2 bg-bottom bg-no-repeat`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-altamiraPlano3 bg-bottom bg-no-repeat`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-altamiraPlano4 bg-bottom bg-no-repeat`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-altamiraPlano5 bg-bottom bg-no-repeat`}></div>
                    <div className={`z-0 w-auto h-full bg-cover bg-altamiraPlano6 bg-bottom bg-no-repeat`}></div>
      

                </Carousel>
            </div>

            <section className="px-4  py-8 flex flex-col items-center md:mt-8 flex-1">
                <div>
                    <h2 className="text-white font-bold text-clampTitle" dangerouslySetInnerHTML={{__html: info.altamira.planos.title}}></h2>
                    <span className='h-[2px] w-[200px] bg-altamiraYellow block my-4'></span>
                    <p className="text-white mb-5 lg:text-lg">{info.altamira.planos.description}</p>

                </div>

            </section>
        </div>


        <div className='flex flex-col justify-center items-center text-center w-full h-[800px] bg-Eco bg-cover bg-center'>
            <h2 className="text-white font-bold text-clampTitle" dangerouslySetInnerHTML={{__html: info.altamira.ecoamigable.title}}></h2>
            <p className="text-white mb-5 lg:text-lg">{info.altamira.ecoamigable.description}</p>

        </div>

        <div className='flex flex-col text-center w-full h-[500px] justify-center'>
            <h2 className="text-white font-bold text-clampTitle mb-4">Formas de Pago</h2>

            <div className='flex flex-col md:flex-row flex gap-8 justify-center mt-6 items-center'>
                <div className='flex flex-col justify-center text-center items-center w-[200px]'>
                    <img src='/img/icons-altamira/contado.png' alt="" className='w-[40px] h-[40px]' />
                    <p className="text-white mb-5 lg:text-lg">Contado</p>
                </div>
                <div className='flex flex-col justify-center text-center items-center w-[200px]'>
                    <img src='/img/icons-altamira/credito-directo.png' alt="" className='w-[40px] h-[40px]' />
                    <p className="text-white mb-5 lg:text-lg">Crédito directo</p>
                </div>
                <div className='flex flex-col justify-center text-center items-center w-[200px]'>
                    <img src='/img/icons-altamira/credito-hipotecario.png' alt="" className='w-[40px] h-[40px]' />
                    <p className="text-white mb-5 lg:text-lg">Crédito hipotecario</p>
                </div>
            </div>

        </div>



        <div id='contacto' className="flex flex-col md:flex-row md:flex-row-reverse justify-between items-center -mt-40 -mb-24 min-h-[1000px] px-6 lg:px-48 bg-hexagonsHouse bg-contain bg-right bg-no-repeat ">

            <div className='h-[500px]max-w-[50%] flex-1'>
            </div>

            <section className="px-4 flex flex-col items-center text-center mt-8 flex-1">
                    <h2 className="text-white font-bold text-clampTitle" dangerouslySetInnerHTML={{__html: info.altamira.formulario.title}}></h2>
                    <span className='h-[2px] w-[200px] bg-altamiraYellow block my-4'></span>
                    <p className="text-white mb-5 lg:text-lg">{info.altamira.formulario.description}</p>
                    <iframe src="https://apps.clientify.net/formbuilderembed/simpleembed/#/forms/embedform/146590/26397" height="300" width='600' className='overflow-hidden -p-8 w-full'></iframe>
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
      <SEO title="Altamira | Condominio en El Bosque, Quito, Ecuador" description="Altamira."/>
    )

}