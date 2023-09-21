import React from "react";

import info from "../innova-text.json"
import { IconMenu2,  IconX} from "@tabler/icons-react";
import { useScroll } from "./useScroll";
import { Link } from 'gatsby';


export default function HeaderResponsive(props) {

    const navLogoDesktop = props.navLogo != undefined ? props.navLogo.desktop : '/img/logo-white-horizontal.png'
    const navLogoMovil = props.navLogo != undefined ? props.navLogo.movil : '/img/logo-white-icon.png'
    const bgColor = props.bgColor != undefined ? props.bgColor : 'headerScroll'

    const [scroll, setScroll] = React.useState(0)

    useScroll(function setScrollPosition({currentPosition}){
        setScroll(currentPosition.y)
    })

    var navElements = info.header.nav.map((item, index)=>{

        return <Link
                    key={index} 
                    to={item.url} 
                    onClick={() => props.setToggle(false)} 
                    className={`text-white md:ml-2 font-medium innovaButtonNav`}>
                        
                        {item.title}
                </Link>

    })

    React.useEffect(()=>{
        if (props.toggle) {
            document.body.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "scroll"

        }

    }, [props.toggle])

    
    return(
        <header className={`fixed w-full z-40 items-center px-4 py-4 transition ease-in-out duration-300 ${scroll < -100 ? bgColor: 'headerNormal' }`}>

                {/* DESKTOP MENU */}
                <nav className="flex flex-row justify-between items-center hidden md:flex max-w-[1280px] mx-auto">
                    <Link to='/'>
                       <img src={navLogoDesktop} alt="" className="hidden lg:block max-w-[250px]"/>
                        <img src={navLogoMovil} alt="" className="block lg:hidden max-w-[80px]"/>
                    </Link>

                    <div className="flex flex-row items-center">
                        {navElements}
                    </div>

                </nav>                
        

                {/* MOVIL MENU CLOSED */}
                <nav className="flex md:hidden flex-row justify-between items-center">
                    <Link to='/'>
                        <img src={navLogoDesktop} alt="" className="hidden sm:block max-w-[250px]"/>
                        <img src={navLogoMovil} alt="" className="block sm:hidden max-w-[80px]"/>
                    </Link>


                    <div className="icon cursor-pointer z-20 relative">
                        {props.toggle ? <IconX  size={30} color={props.toggle ? '#7FBA42' : '#0D1821'} stroke={3} onClick={() => props.setToggle(prevToggle=>(!prevToggle))}/>  : <IconMenu2  size={30} color="#7FBA42" stroke={3} onClick={() => props.setToggle(prevToggle=>(!prevToggle))}/> }
                    </div>
                </nav>


                {/* MOVIL MENU OPENED */}
                <div className={`flex transition-all duration-200 ${props.toggle ? `translate-x-0` : 'translate-x-full' } px-6 sm:px-20 pt-10 bg-InnovaBlue fixed top-0 right-0 justify-center w-full h-full z-0 flex-col`}>
                    <Link to='/'>
                        <img src="/img/logo-white-horizontal.png" alt="" className="max-w-[250px] align-self mb-6 pl-4"/>
                    </Link>

                    {navElements}
                </div>

        </header>
    )
}