import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import Video from "../../videos/video1.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Make your life more blissful"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const onHover = () => {
    setHover(!hover);
  };  
  
  
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <HeroH1>
          <span ref={el} style={{ display: "inline-block" }} />
        </HeroH1>
        <HeroP>Sign up now and give your life a second chance</HeroP>
        <HeroBtnWrapper>
          <Button
            as={Link}
            to="/signin"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            style={{ textDecoration: "none" }}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
