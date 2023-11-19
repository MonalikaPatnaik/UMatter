// import styled from "styled-components";
// import { motion } from "framer-motion";

// export const ServicesContainer = motion(styled.div`
//   height: 800px;
//   padding: 30px;
//   padding-bottom: 150px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: var(--bg-clr);

//   @media screen and (max-width: 768px) {
//     height: 1400px;
//   }
//   @media screen and (max-width: 992px) {
//     height: 1200px;
//   }
//   @media screen and (max-width: 480px) {
//     height: 1500px;
//   }
// `);

// export const ServicesWrapper = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   align-items: center;
//   grid-gap: 16px;
//   padding: 0 30px;

//   @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr 1fr;
//   }
//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//     padding: 0 20px;
//   }
// `;

// export const ServicesCard = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   border-radius: 10px;
//   height: 380px;
//   padding: 30px;
//   box-shadow: 0 1px 3px gray;
//   color: var(--text-clr);
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transform: scale(1.02);
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//   }
// `;

// export const ServicesIcon = styled.img`
//   height: 170px;
//   width: 180px;
//   margin-bottom: 10px;
//   border: 0.5px solid gray;
//   box-shadow: 3px 3px 3px gray;
// `;

// export const ServicesH1 = styled.h1`
//   margin-bottom: 64px;
//   font-size: 50px;
//   line-height: 1.1;
//   font-weight: 600;
//   text-transform: uppercase;
//   color: var(--text-clr);

//   @media screen and (max-width: 480px) {
//     font-size: 2rem;
//   }
// `;

// export const ServicesH2 = styled.h2`
//   font-size: 1rem;
//   margin-bottom: 10px;
// `;

// export const ServicesP = styled.p`
//   font-size: 1rem;
//   text-align: center;
// `;

import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesContainer = motion(styled.div`
  /* height: 1000px; */
  padding: 30px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-clr);
  // background: black;
`);

export const ServicesWrapper = styled.div`
 // max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px ;
  justify-content:center;
  // padding: 0 1px;
 // margin : 0 140px 0 0;


  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px 20px;
  }
`;

export const ServicesCard = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  border-width: 3px;
  // boder-color:black;
  border-color: rgb(11, 115, 72);
  // max-height: 380px;
  padding: 30px;
  //height:0px;
  width:255px;
  box-shadow: 0 1px 3px gray;
  color: var(--text-clr);
  transition: all 0.8s ease-in-out;
  transform-origin: center center;
  position: relative;
  height: 440px;

  overflow: hidden;

  &:before {
    display: relative;
    position: absolute;
    // top: 50%;
    // left: 50%;
    width: 550px;
    height: 550px;
    // margin-left: -100px 0px;
    // margin-top: -100px;
    margin: -120px 0px;
    content: "";
    // background: #fff;
    background: var(--bg-clr);

    // border-style: solid;
    // border-width: 2px;
    // border-radius: 500px;
    // border-color:rgb(1, 191, 113);
    transform-origin: center center;
    transition: all 0.5s ease-in-out;
    box-sizing: border-box;
    overflow: hidden;
  }

  &:hover {
    //background: black;
    overflow: hidden;
    transform: scale(1.03);
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:before {
      //border-width: 00px;
      background: rgb(1, 191, 113);
    }
  }
  // &:after{
  //   transition: all 0.2s ease-out-in;
  // }
`;

export const ServicesIcon = styled.img`
  height: 170px;
  width: 180px;
  margin-bottom: 10px;
  border: 1.5px solid gray;
  //border: 0.5px solid rgb(11, 115, 72)
  box-shadow: 3px 3px 3px gray;
  position: relative;
`;

export const ServicesH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-clr);
  // color:#fff;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  position: relative;
  // color:#fff;
  color: var(--text-clr);
  // background: var(--bg-clr);
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  position: relative;
  color: var(--text-clr);
  // background: var(--bg-clr);
`;
