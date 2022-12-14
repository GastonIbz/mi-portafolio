import Navbar from "../components/Navbar";
import React from 'react'
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Sobre mí." text=""/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About