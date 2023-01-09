import React, {useState} from 'react'
import Video from '../../videos/video1.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper,HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElements'

const HeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg  autoPlay loop muted src={Video} type='video/mp4'/> 
        </HeroBg>
        <HeroContent>
            <HeroH1>Make your life more Blissful</HeroH1>
            <HeroP>
                Sign up now and give your life a second chance
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection