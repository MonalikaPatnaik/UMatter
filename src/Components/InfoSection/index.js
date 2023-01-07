import React from 'react'
import {Button} from 'react-scroll'
import { AboutContainer, AboutWrapper, AboutRow,Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap , ImgWrap, Img } from './InfoElements'

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
            <AboutRow>
                <Column1>
                <TextWrapper>
                    <TopLine>TopLine</TopLine>
                    <Heading>Heading</Heading>
                    <SubTitle>Subtitle</SubTitle>
                    <BtnWrap>
                        <Button to='home'/>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img/> 
                </ImgWrap>
                </Column2>
            </AboutRow>
        </AboutWrapper>

      </AboutContainer>
    </>
  )
}

export default About