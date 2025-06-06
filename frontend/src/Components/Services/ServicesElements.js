import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesContainer = motion(styled.div`
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-clr);
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
      radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 16px;
  }
`);

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 10px;
  }
`;

export const ServicesCard = styled.div`
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.05;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
    border-color: var(--accent-clr);
  }

  @media screen and (max-width: 768px) {
    padding: 32px 24px;
    
    &:hover {
      transform: translateY(-8px) scale(1.01);
    }
  }
`;

export const ServicesIcon = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
  border-radius: 20px;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  
  ${ServicesCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
`;

export const ServicesH1 = styled.h1`
  margin-bottom: 80px;
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.1;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
  text-align: center;
  position: relative;
  z-index: 2;
  
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
    border-radius: 2px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-clr);
  font-family: "Poppins", sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${ServicesCard}:hover & {
    color: var(--accent-clr);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-clr);
  opacity: 0.8;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-grow: 1;
  
  ${ServicesCard}:hover & {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;