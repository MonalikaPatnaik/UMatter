import React, { useEffect, useRef } from 'react';
import { Services_Data } from './Services_Data';
import { 
  ServicesContainer, 
  ServicesH1, 
  ServicesH2, 
  ServicesWrapper, 
  ServicesCard, 
  ServicesIcon, 
  ServicesP,
  SectionSubtitle
} from './ServicesElements';
import Typed from "typed.js";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

// Animation variants for the service cards
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Services = () => {
  const navigate = useNavigate();
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Our Services"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  const handleCardClick = (path) => {
    if (path) {
      if (path.startsWith('http')) {
        window.open(path, '_blank');
      } else {
        navigate(path);
      }
    }
  };

  return (
    <ServicesContainer
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <ServicesH1>
        <span ref={el} style={{ display: "inline-block" }} />
      </ServicesH1>
      
      <SectionSubtitle>
        We offer a comprehensive range of mental health services designed to support your 
        well-being journey. Our expert team is here to help you every step of the way.
      </SectionSubtitle>

      <ServicesWrapper>
        {Services_Data.map((service, index) => (
          <motion.div 
            key={service.id} 
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ServicesCard 
              onClick={() => handleCardClick(service.href)}
              className={service.href ? 'clickable' : ''}
            >
              <ServicesIcon>
                <img src={service.icon} alt={service.title} />
              </ServicesIcon>
              <ServicesH2>{service.title}</ServicesH2>
              <ServicesP>{service.description}</ServicesP>
            </ServicesCard>
          </motion.div>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
