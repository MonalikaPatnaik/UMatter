import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Button } from '../ButtonElements';
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img } from './InfoElements'
import { Link } from "react-router-dom";

const About = ({ lightBg, id, imgStart, topLine, headline, description, buttonLabel, lightText, darkText, img, alt, primary, dark, dark2, theme }) => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [headline],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, [headline]);

  return (
    <>
      <AboutContainer lightBg={lightBg} id={id} theme={theme}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart} theme={theme}>
            <Column1>
              <TextWrapper
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.8 }}
              >
                <TopLine>{topLine}</TopLine>
                <Heading>   <span ref={el} style={{ display: 'inline-block' }} /></Heading>
                <SubTitle>{description}</SubTitle>
                <BtnWrap>
                  <Button
                    as={Link}
                    to="/signin"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    style={{ textDecoration: 'none' }}
                  >{buttonLabel} </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.8 }}
              >
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default About;
