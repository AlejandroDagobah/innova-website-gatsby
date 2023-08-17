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
                <div className={`py-4 lg:pr-14 max-w-[350px] ${item.title == "CONTÁCTO" ? `md:pr-12`: ``}`} >
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
                <img src={item.icon} alt="" className="max-w-[35px]"/>
            </a>
        )
    })

    return(
        <footer className="sm:pl-0 pt-8 pl-0 xl:pl-8 md:pt-16 xl:pl-36 flex flex-col md:flex-row md:justify-between relative">
            <div className="mb-12 px-8 flex flex-col md:grid md:grid-cols-3 xl:grid-cols-4 md:pr-[30%]">
                {menu()}
            </div>

            {/* <div className="flex flex-col items-center justify-center relative md:w-[400px]">

                <img src="/img/logo-vertical.png" alt="" className="w-[200px] z-20 lg:mt-16"/>
                    <div className="flex flex-row z-20">
                        {socialMedia}
                    </div>

                <img src="/img/hoja.png" alt="" className="w-full absolute b-0 z-0 md:hidden"/>
                <img src="/img/hojas-desktop.png" alt="" className="w-full absolute b-0 z-0 hidden md:block mb-0 md:-mb-50"/>

            </div> */}


            <div className="bottom-0 right-0 z-0 flex bg-hojaMovil md:absolute min-h-[400px] bg-top md:bg-hojaDesktop bg-cover mt-[-6.5rem] md:mt-0 md:bg-bottom md:min-w-[350px] md:min-h-[400px] flex flex-col justify-end md:justify-center items-center sm:items-end px-8 md:items-center">

                    <img src="/img/logo-vertical.png" alt="" className="w-[180px] z-20 md:mt-16 mb-4"/>
                    <div className="flex flex-row z-20 mb-10 md:mb-0 items-center justify-center">
                        {socialMedia}
                    </div>
                {/* <img src="/img/hojas-desktop.png" alt="" className="w-[350px] imageLeaf"/> */}

            </div>
        </footer>
    )

}