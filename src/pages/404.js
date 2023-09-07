import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import HeaderResponsive from '../components/HeaderResponsive';
import HeroBanner from "../components/HeroBanner";
import SEO from '../components/Seo';
import info from "../innova-text.json"

export default function NotFound() {

    const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    
    <Layout
        gradientColors={true}
    >
        <HeaderResponsive toggle={toggleMenu} setToggle={setToggleMenu}/>
        <HeroBanner
            imgs={[
                "bg-notFoundBG"
            ]}
            annona={false}
            content={{
                "title": info.notFound.title,
                "subtitle": info.notFound.subtitle,
                "description": info.notFound.description,
                "button": info.notFound.button.text,
                "url": info.notFound.button.url
            }}
            

        />

        <Footer/>
    </Layout>
  )
}


export function Head() {
    return(
      <SEO/>
    )

}