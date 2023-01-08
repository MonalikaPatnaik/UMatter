import React, {useState} from 'react';
import HeroSection from '../Components/Herosection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
     <Navbar toggle={toggle}/> 
     <HeroSection/>
     <InfoSection {...homeObjOne}/>




    </>
  )
}

export default Home
