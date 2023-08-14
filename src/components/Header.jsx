import React from "react"

export default function Header(){

    return(
        <header className="fixed flex justify-between w-full flex-row z-40 py-4 px-6 items-center ">
            <img src="./img/logo-white-icon.png" alt="" />

            {/* <nav className="flex flex-row justify-around">
                <span className="text-white p-2 mr-3">Novabuilding</span>
                <span>Novabuilding</span>
                <span>Novabuilding</span>
                <span>Novabuilding</span>
                <span>Novabuilding</span>
                <span>Novabuilding</span>
            </nav> */}
            <img src="./img/menu-icon.png" className="" />
            
        </header>
    )
}