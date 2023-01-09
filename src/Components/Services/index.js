import React from 'react'
import Icon1 from '../../images/image1.png'
import Icon2 from '../../images/image2.png'
import Icon3 from '../../images/image3.png'
import { ServicesContainer, ServicesH1, ServicesH2,ServicesWrapper,ServicesCard,ServicesIcon,ServicesP } from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
       
        <ServicesWrapper>
            <ServicesCard> 
                <ServicesIcon src={Icon1}/>
                <ServicesH2><b>Consult With Doctor</b></ServicesH2>
                <ServicesP>Consult with professional doctors and therapists regarding your health.</ServicesP>
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={Icon2}/>
                <ServicesH2><b>Attend workshops</b></ServicesH2>
                <ServicesP>Book your slot now for amazing therapies and sessions that will make your life better.</ServicesP>
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={Icon3}/>
                <ServicesH2><b>Connect with friends</b></ServicesH2>
                <ServicesP>Be the part of the amazing community and connect with them. </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services