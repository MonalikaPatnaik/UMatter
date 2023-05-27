import React, { useState } from 'react';
import Footer from '../Components/Footer';
import HeroSection from '../Components/Herosection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
        console.log("toggle");
    };

  return (
    <>
      {/* <Navbar toggle={toggle} /> */}
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <Footer />
    </>
  )
}

export default Home
