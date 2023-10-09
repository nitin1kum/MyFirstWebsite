import React, { useEffect } from 'react'
import Herosection from './Herosection'
import { useGlobalContext } from './Context';




const About = () => {

  const { updateAboutPage } = useGlobalContext();


  useEffect(() => {
    updateAboutPage();
  }, [])


  return (
    <>
    <Herosection />
    </>
  )
}

export default About