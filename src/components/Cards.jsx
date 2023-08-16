import React from "react";

export default function Cards(props) {

    const [isHovered, setIsHovered] = React.useState(false)


    function hoverCard(isOver) {       
        setIsHovered(()=>{
            var newState
            isOver ? newState = true : newState = false
            return newState
        })
    }

    var hoverStyle = 'block'
    var normalStyle = 'hidden'

    var backgroundImage = {
        backgroundImage: `linear-gradient(0deg, rgba(28, 60, 94, 0.0), rgba(28, 60, 94, 0.0)), url(${props.img})`,
    };
    var backgroundImageColor = {
        backgroundImage: `linear-gradient(0deg, rgba(28, 60, 94, 0.7), rgba(28, 60, 94, 0.7)), url(${props.img})`,
    };

    return (
        //w-[100%] md:ml-5 sm:w-[30%]
        <div className="aspect-square bg-cover mt-4 transition ease-in-out delay-50" style={isHovered ? backgroundImageColor : backgroundImage} onMouseOver={()=>{hoverCard(true)}} onMouseLeave={()=>{hoverCard(false)}}>
            <div className="w-full h-full flex flex-col px-4 py-6 text-end items-end justify-end hover:-translate-y-10 hover:md:-translate-y-10 transition ease-in-out delay-50">
                <h2 className={`cardTitle text-clampTitle ${isHovered ? 'invisible lg:visible' : 'visible'}`} dangerouslySetInnerHTML={{__html: props.title}}></h2>
                <span className="w-[60px] h-[2px] my-3 bg-InnovaGreen"></span>
                <p className={`text-white text-clampText ${isHovered ? hoverStyle : normalStyle}`}>{props.description}</p>

            </div>
        </div>
    )

}