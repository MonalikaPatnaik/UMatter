import React from 'react';
import Footer from '../Components/Footer';
import HeroSection from '../Components/Herosection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne } from '../Components/InfoSection/Data';
import Services from '../Components/Services';


const Home = () => {

  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <Footer />
    </>
  )
}

export default Home
