import React from "react";

export default function Projects(props) {

    var backgroundImage = {
        backgroundImage: `url(${props.img})`,
    };

    return (
        <div className="flex-1 bg-cover bg-center truncate hover:flex-4 transition-all ease-in-out duration-500" style={backgroundImage}>
            <div className="bg-InnovaBlueLight/70 w-full h-full flex flex-col px-4 py-6 justify-between hover:bg-InnovaBlueLight/0 transition ease-in-out delay-50">
                <span className=""><h3 className="font-medium text-white drop-shadow-3xl lg:text-2xl">{props.title}</h3></span>
                <span className=""><p className="text-white text-sm drop-shadow-3xl lg:text-lg">{props.location}</p></span>
                
            </div>
        </div>
    )

}