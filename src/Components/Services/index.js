
import React from 'react';
import Icon1 from '../../images/image1.png';
import Icon2 from '../../images/image2.png';
import Icon3 from '../../images/image3.png';
import Icon4 from '../../images/image4.png';
import { Services_Data } from '../Services/Services_Data';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP } from './ServicesElements';


import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import {
  cardOneVariants,
  cardTwoVariants,
  cardThreeVariants,
  cardFourVariants,
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
    <ServicesContainer id="services">
    <ServicesH1>
      <span ref={el} style={{ display: "inline-block" }} />
    </ServicesH1>


    <ServicesWrapper>
      <motion.div
        variants={cardOneVariants}
        initial="hidden"
        animate="visible"
      >
        <ServicesCard>
          <ServicesIcon src={Services_Data[0].icon} />
          <ServicesH2>
            <b>{Services_Data[0].title}</b>
          </ServicesH2>
          <ServicesP>
            {Services_Data[0].description}
          </ServicesP>
        </ServicesCard>
      </motion.div>

      <motion.div
        variants={cardTwoVariants}
        initial="hidden"
        animate="visible"
      >
        <ServicesCard>
          <ServicesIcon src={Services_Data[1].icon} />
          <ServicesH2>
            <b>{Services_Data[1].title}</b>
          </ServicesH2>
          <ServicesP>
            {Services_Data[1].description}
          </ServicesP>
        </ServicesCard>
      </motion.div>


      <motion.div
        variants={cardThreeVariants}
        initial="hidden"
        animate="visible"
      >
        <ServicesCard>
          <ServicesIcon src={Services_Data[2].icon} />
          <ServicesH2>
            <b>{Services_Data[2].title}</b>
          </ServicesH2>
          <ServicesP>
            {Services_Data[2].description}
          </ServicesP>
        </ServicesCard>
      </motion.div>


      <motion.div
        variants={cardFourVariants}
        initial="hidden"
        animate="visible"
      >
        <ServicesCard>
          <ServicesIcon src={Services_Data[3].icon} />
          <ServicesH2>
            <b>{Services_Data[3].title}</b>
          </ServicesH2>
          <ServicesP>
            {Services_Data[3].description}
          </ServicesP>
        </ServicesCard>
      </motion.div>
    </ServicesWrapper>
  </ServicesContainer>

  );
};

export default Services;


// import React from 'react';
// import Icon1 from '../../images/image1.png';
// import Icon2 from '../../images/image2.png';
// import Icon3 from '../../images/image3.png';
// import Icon4 from '../../images/image4.png';
// import DarkMode from "../DarkMode/DarkMode";
// import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP } from './ServicesElements';

// import { useEffect, useRef } from "react";
// import Typed from "typed.js";
// import { color, motion } from "framer-motion";
// import { cardOneVariants, cardTwoVariants, cardThreeVariants, cardFourVariants } from "./CardAnimation";

// const Services = () => {
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ["Our services"],
//       typeSpeed: 50,
//       backSpeed: 50,
//       loop: true,
//       showCursor: false,
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
    
//     <ServicesContainer id="services">
//       <ServicesH1>
//         <span ref={el} style={{ display: "inline-block" }} />
//       </ServicesH1>

//       <ServicesWrapper>
//         <motion.div
//           variants={cardOneVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <ServicesCard>
            

//             <ServicesIcon src={Icon1} />
//             <ServicesH2>
//               <b>Consult With Doctor</b>
//             </ServicesH2>
//             <ServicesP>
//               Consult with professional doctors and therapists regarding your health.
//             </ServicesP>
//           </ServicesCard>
          
//         </motion.div>

//         <motion.div
//           variants={cardTwoVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <ServicesCard >
//             <ServicesIcon src={Icon2} />
//             <ServicesH2>
//               <b>Attend workshops</b>
//             </ServicesH2>
//             <ServicesP>
//               Book your slot now for amazing therapies and sessions that will make your life better.
//             </ServicesP>
//           </ServicesCard>
//         </motion.div>

//         <motion.div
//           variants={cardThreeVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <ServicesCard>
//             <ServicesIcon src={Icon3} />
//             <ServicesH2>
//               <b>Connect with Friends</b>
//             </ServicesH2>
//             <ServicesP>
//               Be a part of the amazing community and connect with them
//             </ServicesP>
//           </ServicesCard>
//         </motion.div>

//         <motion.div
//           variants={cardFourVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <ServicesCard>
//             <ServicesIcon src={Icon4} />
//             <ServicesH2>
//               <b>Habit Tracker</b>
//             </ServicesH2>
//             <ServicesP>
//               Boost your potential by tracking your habits
//             </ServicesP>
//           </ServicesCard>
//         </motion.div>
//       </ServicesWrapper>
//     </ServicesContainer>
//   );
// };

// export default Services;
