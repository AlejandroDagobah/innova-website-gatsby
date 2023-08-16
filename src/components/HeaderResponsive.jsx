import React from "react";

import info from "../innova-text.json"
import { IconMenu2,  IconX} from "@tabler/icons-react";
import { useScroll } from "./useScroll";

export default function HeaderResponsive(props) {

    const [scroll, setScroll] = React.useState(0)

    useScroll(function setScrollPosition({currentPosition}){
        setScroll(currentPosition.y)
    })
    console.log(scroll);
    var navElements = info.header.nav.map((item, index)=>{

        return <a 
                    key={index} 
                    href={item.url} 
                    onClick={() => props.setToggle(false)} 
                    className={`text-white md:ml-2 font-medium innovaButtonNav`}>
                        
                        {item.title}
                </a>

    })

    React.useEffect(()=>{
        if (props.toggle) {
            document.body.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "scroll"

        }

    }, [props.toggle])

    
    return(
        <header className={`fixed w-full z-40 items-center px-4 py-4 transition ease-in-out duration-300 ${scroll < -100 ? 'headerScroll': 'headerNormal' }`}>

                {/* DESKTOP MENU */}
                <nav className="flex flex-row justify-between items-center hidden md:flex max-w-[1280px] mx-auto">
                    <a href="#">
                        <img src="./img/logo-white-horizontal.png" alt="" className="hidden lg:block"/>
                        <img src="./img/logo-white-icon.png" alt="" className="block lg:hidden"/>
                    </a>

                    <div className="flex flex-row items-center">
                        {navElements}
                    </div>

                </nav>                
        

                {/* MOVIL MENU CLOSED */}
                <nav className="flex md:hidden flex-row justify-between items-center">
                    <a href="#">
                        <img src="./img/logo-white-horizontal.png" alt="" className="hidden sm:block"/>
                        <img src="./img/logo-white-icon.png" alt="" className="block sm:hidden"/>
                    </a>

                    <div className="icon cursor-pointer z-20 relative">
                        {props.toggle ? <IconX  size={30} color={props.toggle ? '#7FBA42' : '#0D1821'} stroke={3} onClick={() => props.setToggle(prevToggle=>(!prevToggle))}/>  : <IconMenu2  size={30} color="#7FBA42" stroke={3} onClick={() =>  props.setToggle(prevToggle=>(!prevToggle))}/> }
                    </div>
                </nav>


                {/* MOVIL MENU OPENED */}
                <div className={`flex transition-all duration-200 ${props.toggle ? `translate-x-0` : 'translate-x-full' } px-6 sm:px-20 pt-10 bg-InnovaBlue fixed top-0 right-0 justify-center w-full h-full z-0 flex-col`}>
                    <img src="./img/logo-white-horizontal.png" alt="" className="max-w-[250px] align-self mb-6 pl-4"/>

                    {navElements}
                </div>

        </header>
    )
}