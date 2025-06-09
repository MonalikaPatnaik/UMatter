import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  HeroContainer,
  HeroContent,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
  Button,
  ArrowForward,
  ArrowRight,
  FloatingShape
} from "./HeroElements";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const el = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Make your life more blissful",
        "Find your inner peace",
        "Start your wellness journey"
      ],
      typeSpeed: 40, // Slightly slower for better readability
      backSpeed: 25, // Slower backspacing
      backDelay: 2000, // Pause before starting to delete
      startDelay: 500, // Initial delay before typing starts
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
      shuffle: false,
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    };

    typedRef.current = new Typed(el.current, options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);


  const onHover = () => {
    setHover(!hover);
  };
  
  return (
    <HeroContainer id="home">
      <FloatingShape />
      <FloatingShape />
      
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroH1>
          <span ref={el} style={{ display: "inline-block" }} />
        </HeroH1>
        
        <HeroP>
          Embark on a transformative journey to wellness and self-discovery. 
          Our expert-guided programs are designed to help you find balance, 
          peace, and happiness in your daily life.
        </HeroP>
        
        <HeroBtnWrapper>
          <Button
            as={Link}
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Journey {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
