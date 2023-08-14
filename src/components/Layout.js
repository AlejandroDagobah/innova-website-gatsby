import React from 'react'
import '../styles/global.css'


export default function Layout({children}) {
  return (
    <div className='text-bold'>
        <div>
            {children}

        </div>        
    </div>
  )
}
