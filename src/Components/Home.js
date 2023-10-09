import React, { useEffect } from 'react'
import Herosection from './Herosection'
import { useGlobalContext } from './Context'
import About from './About'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
  const {updateHomePage}=useGlobalContext();
  useEffect(() => {
    updateHomePage();
  }, [])
  
  return (
    <>
    <Herosection/>
    <Services/>
    <Contact/>
    </>
  )
}

export default Home