import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import HeaderResponsive from '../components/HeaderResponsive';

export default function NotFound() {

    const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    
    <Layout>
        
        <HeaderResponsive toggle={toggleMenu} setToggle={setToggleMenu}/>

        <h1>404 NOT FOUND</h1>
        <Footer/>
    </Layout>
  )
}
