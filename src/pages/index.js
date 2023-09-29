import * as React from "react"
import Layout from "../components/Layout"
import Body from "../components/Body"
import Footer from "../components/Footer"
import HeaderResponsive from "../components/HeaderResponsive"
import SEO from "../components/Seo"
import MetaPixel from '../components/meta/metaPixel';

export default function Home() {

  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    <Layout 
      gradientColors={'blueGradient'}
    >
      <HeaderResponsive toggle={toggleMenu} setToggle={setToggleMenu}/>
      <Body/>
      <Footer/>
    </Layout>

  )
}

// export default Home

export function Head() {
    return(
      <>
        <SEO/>
        <MetaPixel/>
      </>
    )

}