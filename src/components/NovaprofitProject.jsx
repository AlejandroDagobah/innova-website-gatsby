import React from 'react'

import { Link } from 'gatsby'

export default function NovaprofitProject(props) {

  return (
    <div className='flex flex-col lg:flex-row items-start md:items-center mb-12'>
        <Link to={props.url}>
            <img src={props.img} alt="" className='w-full rotate-1 hover:rotate-[360deg] duration-500 transition-all ease-in-out'/>
        </Link>
        
        <div className='md:max-w-[400px] md:ml-6'>
            <img src={props.logo} className="mb-4 w-full max-w-[300px]" alt="" />
            <p className="text-white font-bold mr-4 md:mb-4">{props.location}</p>
            <p className="text-white mr-4 mb-8">{props.description}</p>
            <Link to={props.url} className="max-w-[300px] innovaButton bg-InnovaGreenNovaprofit hover:bg-InnovaGreenNovaprofitDarker font-bold cursor-pointer px-6 py-3 ease-in-out delay-100 duration-300">{props.button}</Link>

        </div>

    </div>
  )
}
