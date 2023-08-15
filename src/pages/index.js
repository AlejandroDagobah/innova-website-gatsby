import * as React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Body from "../components/Body"
import Footer from "../components/Footer"
import HeaderResponsive from "../components/HeaderResponsive"


export default function Home() {

  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    <Layout>
      <HeaderResponsive toggle={toggleMenu} setToggle={setToggleMenu}/>
      <Body/>
      <Footer/>
    </Layout>

  )
}
