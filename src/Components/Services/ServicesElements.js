import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesContainer = motion(styled.div`
  height: 800px;
  padding: 30px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-clr);

  @media screen and (max-width: 768px) {
    height: 1400px;
  }
  @media screen and (max-width: 992px) {
    height: 1200px;
  }
  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`);

export const ServicesWrapper = styled.div`
max-width: 1800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-top:4rem;
  grid-gap: 16px;
  padding: 0 30px;
  // background-color: #6411ad;/*Dark mode*/
  background-color: ${({ theme }) => (theme === 'dark-theme' ? '#6411ad' : '#ffd819')};
  height: 36rem;
  position: absolute;
  right:-0.1rem;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    height:65rem;
    width:100%;
  }
`;

export const ServicesCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px gray;
  color: var(--text-clr);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 170px;
  width: 180px;
  margin-bottom: 10px;
  border: 0.5px solid gray;
  box-shadow: 3px 3px 3px gray;
`;

export const ServicesH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-clr);
  position:relative;
  top:-18rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
