import React from "react";
import info from "../innova-text.json"

export default function Footer() {
    
    function menu() {

        var menu = info.footer.nav.map((item, index) =>{
            
            var list = item.list.map((li, index)=>{

                return(
                    <span className="mb-1 flex flex-row items-start ">
                        {li.icon && <img src={li.icon} alt="" className="mr-2 min-w-[22px]" />} 
                        {li.url ? <a href={li.url} className="text-white">{li.text}</a> :  <p className="text-white">{li.text}</p>}
                       
                    </span>
                )
            })


            return (
                <div className={`py-4 lg:pr-14 max-w-[350px] ${item.title == "CONTÁCTO" ? `md:pr-12 md:-mr-8`: `md:pr-9 lg:pr-12`}`} >
                    <h6 className="text-white font-bold mb-1">{item.title}</h6>
                    <ul>
                        {list}
                    </ul>
                    
                </div>
            )

        })

        return menu
        
    }

    var socialMedia = info.footer.socialMedia.map((item, index) =>{

        return  (
            <a href={item.url} className="mx-1">
                <img src={item.icon} alt="" />
            </a>
        )
    })

    return(
        <footer className="bg-InnovaBlue sm:pl-0 pt-8 pl-0 md:pl-8 md:pt-16 lg:pl-36 flex flex-col md:flex-row md:justify-between">
            <div className="mb-12 px-8 flex flex-col md:flex-row">
                {menu()}
            </div>

            <div className="flex flex-col items-center justify-center relative md:w-[400px]">

                <img src="./img/logo-vertical.png" alt="" className="w-[200px] z-20 lg:mt-16"/>
                    <div className="flex flex-row z-20">
                        {socialMedia}
                    </div>

                <img src="./img/hoja.png" alt="" className="w-full absolute b-0 z-0 md:hidden"/>
                <img src="./img/hojas-desktop.png" alt="" className="w-full absolute b-0 z-0 hidden md:block mb-0 md:mb-40"/>

            </div>
        </footer>
    )

}