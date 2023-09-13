import React from 'react'
import '../styles/global.css'


export default function Layout(props) {

  /* props.gradientColors
      1 = 'blue'
      2 = 'green'
  */
  return (
    <div className={`layout ${props.gradientColors}`}>
            {props.children}
    </div>
  )
}
