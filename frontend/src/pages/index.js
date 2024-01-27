import React from 'react';
import Footer from '../Components/Footer';
import HeroSection from '../Components/Herosection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne } from '../Components/InfoSection/Data';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonials';
import GoToTop from '../Components/GoToTop';


const Home = () => {

  return (
    <>
      <GoToTop />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
