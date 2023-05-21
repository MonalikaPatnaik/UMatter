import React from 'react';
import { Button } from '../ButtonElements';
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img } from './InfoElements'

const About = ({ lightBg, id, imgStart, topLine, headline, description, buttonLabel, lightText, darkText, img, alt, primary, dark, dark2 }) => {
  return (
    <>


      <AboutContainer lightBg={lightBg} id={id} >

        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper
                whileInView={{ y: [ 100, 50, 0], opacity: [0, 0, 1]}}
                transition={{duration: 0.8}}
              >
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <SubTitle>{description}</SubTitle>
                <BtnWrap>
                  <Button to='home'
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
                whileInView={{ y: [ 100, 50, 0], opacity: [0, 0, 1]}}
                transition={{duration: 0.8}}
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

export default About