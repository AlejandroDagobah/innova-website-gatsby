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

    var hoverStyle = 'visible'
    var normalStyle = 'invisible'

    var backgroundImage = {
        backgroundImage: `url(${props.img})`,
    };

    return (
        <div className="aspect-square bg-cover mt-4 md:ml-5" style={backgroundImage} onMouseOver={()=>{hoverCard(true)}} onMouseLeave={()=>{hoverCard(false)}}>
            <div className="bg-InnovaBlueLight/70 w-full h-full flex flex-col px-4 py-6 text-end items-end justify-end hover:bg-InnovaBlueLight/0 hover:-translate-y-10 transition ease-in-out delay-50">
                <h2 className="cardTitle font-outline">{props.title}</h2>
                <span className="w-[60px] h-[2px] my-3 bg-InnovaGreen"></span>
                <p className={`text-white ${isHovered ? hoverStyle : normalStyle}`}>{props.description}</p>

            </div>
        </div>
    )

}