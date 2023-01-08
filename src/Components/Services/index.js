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
                <ServicesH2>Consult With Doctor</ServicesH2>
                <ServicesP>Consult with professional doctors</ServicesP>
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>gfhgdsjfhs</ServicesP>
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>gfhgdsjfhs</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services