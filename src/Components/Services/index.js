import React, { useState } from 'react';
import Icon1 from '../../images/image1.png';
import Icon2 from '../../images/image2.png';
import Icon3 from '../../images/image3.png';
import Icon4 from '../../images/image4.png';
import { Services_Data } from '../Services/Services_Data';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP } from './ServicesElements';
import Typed from "typed.js";
import { motion } from "framer-motion";
import {
  cardOneVariants,
  cardTwoVariants,
  cardThreeVariants,
  cardFourVariants,
} from "./CardAnimation";
import { Link } from 'react-router-dom';


const Services = () => {
  const [showConsultWithDoctor, setShowConsultWithDoctor] = useState(false);

  const handleConsultWithDoctorClick = () => {
    setShowConsultWithDoctor(true);
  };

  return (
    <ServicesContainer id="services">
      <ServicesH1>
        <span style={{ display: "inline-block" }}>Our services</span>
      </ServicesH1>

      <ServicesWrapper>
        <motion.div variants={cardOneVariants} initial="hidden" animate="visible">
        <Link to="/consultwithdoctor" target="_blank"><div onClick={handleConsultWithDoctorClick}>
            <ServicesCard>
              <ServicesIcon src={Services_Data[0].icon} />
              <ServicesH2>
                <b>{Services_Data[0].title}</b>
              </ServicesH2>
              <ServicesP>{Services_Data[0].description}</ServicesP>
            </ServicesCard>
          </div>
          </Link>
        </motion.div>

        <motion.div variants={cardTwoVariants} initial="hidden" animate="visible">
          <ServicesCard>
            <ServicesIcon src={Services_Data[1].icon} />
            <ServicesH2>
              <b>{Services_Data[1].title}</b>
            </ServicesH2>
            <ServicesP>{Services_Data[1].description}</ServicesP>
          </ServicesCard>
        </motion.div>

        <motion.div variants={cardThreeVariants} initial="hidden" animate="visible">
          <ServicesCard>
            <ServicesIcon src={Services_Data[2].icon} />
            <ServicesH2>
              <b>{Services_Data[2].title}</b>
            </ServicesH2>
            <ServicesP>{Services_Data[2].description}</ServicesP>
          </ServicesCard>
        </motion.div>

        <motion.div variants={cardFourVariants} initial="hidden" animate="visible">
          <ServicesCard>
            <ServicesIcon src={Services_Data[3].icon} />
            <ServicesH2>
              <b>{Services_Data[3].title}</b>
            </ServicesH2>
            <ServicesP>{Services_Data[3].description}</ServicesP>
          </ServicesCard>
        </motion.div>
      </ServicesWrapper>

    </ServicesContainer>
  );
};

export default Services;
