import React from "react";

import info from "../innova-text.json"
import { IconMenu2,  IconX} from "@tabler/icons-react";


export default function HeaderResponsive(props) {

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
        <header className="fixed flex justify-between w-full flex-row z-40 py-4 px-4 md:px-30 xl:px-32 items-center">
                <a href="#">
                    <img src="./img/logo-white-horizontal.png" alt="" />

                </a>
                <nav className="hidden sm:flex">
                    {navElements}
                </nav>

                <nav className="flex sm:hidden z-10">

                    <div className="icon cursor-pointer">
                        {props.toggle ? <IconX  size={30} color={props.toggle ? '#7FBA42' : '#0D1821'} stroke={3} onClick={() => props.setToggle(prevToggle=>(!prevToggle))}/>  : <IconMenu2  size={30} color="#7FBA42" stroke={3} onClick={() =>  props.setToggle(prevToggle=>(!prevToggle))}/> }
                    </div>
                </nav>

                <div className={`flex transition-all duration-200 ${props.toggle ? `translate-x-0` : 'translate-x-full' } px-6 sm:px-20 pt-10 bg-InnovaBlue fixed top-0 right-0 justify-center w-full h-full z-0 flex-col`}>
                    <img src="./img/logo-white-horizontal.png" alt="" className="max-w-[250px] align-self mb-6 pl-4"/>

                    {navElements}
                </div>

        </header>
       
    )
    
}