import React from "react"
import info from "../innova-text.json"


export default function Header(){

    var nav = info.header.nav.map((item, index)=>{

        return (
                <a href={item.url} className="text-white ml-2 font-medium innovaButtonNav">{item.title}</a>
        )

    })

    return(
        <header className="fixed flex justify-between w-full flex-row z-40 py-4 px-60 items-center ">
            <img src="./img/logo-white-icon.png" alt="" />

            <nav className="flex flex-row justify-around">
                {nav}

            </nav>
            {/* <img src="./img/menu-icon.png" className="" /> */}
            
        </header>
    )
}