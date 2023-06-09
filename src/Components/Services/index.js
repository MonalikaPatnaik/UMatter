
import React, { useEffect, useRef } from 'react'
import Icon1 from '../../images/image1.png'
import Icon2 from '../../images/image2.png'
import Icon3 from '../../images/image3.png'
import Icon4 from '../../images/image.4.png'
import { ServicesContainer, ServicesH1, ServicesH2,ServicesWrapper,ServicesCard,ServicesIcon,ServicesP } from './ServicesElements'

import Typed from "typed.js";
import { motion } from "framer-motion";
import {
  cardOneVariants,
  cardTwoVariants,
  cardThreeVariants,
} from "./CardAnimation";

const Services = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Our services"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (

   

    <ServicesContainer
      id="services"
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.8 }}
    >
      <ServicesH1>
        <span ref={el} style={{ display: "inline-block" }} />
      </ServicesH1>

      <ServicesWrapper>
        <motion.div
          variants={cardOneVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 10px rgb(1, 191, 113)",
            transition: { duration: 0.6 },
          }}
        >
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>
              <b>Consult With Doctor</b>
            </ServicesH2>
            <ServicesP>
              Consult with professional doctors and therapists regarding your
              health.
            </ServicesP>
          </ServicesCard>
        </motion.div>
        <motion.div
          variants={cardTwoVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 10px rgb(1, 191, 113)",
            transition: { duration: 0.6 },
          }}
        >
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>
              <b>Attend workshops</b>
            </ServicesH2>
            <ServicesP>
              Book your slot now for amazing therapies and sessions that will
              make your life better.
            </ServicesP>
          </ServicesCard>
        </motion.div>
        <motion.div
          variants={cardThreeVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 10px rgb(1, 191, 113)",
            transition: { duration: 0.6 },
          }}
        >
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>
              <b>Connect with friends</b>
            </ServicesH2>
            <ServicesP>
              Be the part of the amazing community and connect with them.{" "}
            </ServicesP>
          </ServicesCard>
        </motion.div>
      </ServicesWrapper>

    </ServicesContainer>
  );
};

export default Services;
