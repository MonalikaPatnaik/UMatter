import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`
  color: var(--text-clr);
  background: var(--bg-clr);
  padding: 120px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-template-columns: ${({ imgStart }) => (imgStart ? "1fr 1fr" : "1fr 1fr")};
  align-items: center;
  gap: 60px;
  
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 32px;
  padding: 60px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 24px;
    text-align: center;
  }
`;

export const ImgWrap = motion(styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`);

export const Column1 = styled.div`
  grid-area: ${({ imgStart }) => (imgStart ? "col2" : "col1")};
  
  @media screen and (max-width: 768px) {
    order: ${({ imgStart }) => (imgStart ? "2" : "1")};
  }
`;

export const Column2 = styled.div`
  grid-area: ${({ imgStart }) => (imgStart ? "col1" : "col2")};
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    order: ${({ imgStart }) => (imgStart ? "1" : "2")};
  }
`;

export const TextWrapper = motion(styled.div`
  max-width: 100%;
  padding: 0;
`);

export const TopLine = styled.p`
  color: var(--accent-clr);
  font-size: 1.1rem;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 20px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
    border-radius: 2px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Heading = styled.h1`
  margin-bottom: 32px;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
  
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 40px;
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-clr);
  opacity: 0.9;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 32px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 35px 70px -12px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;