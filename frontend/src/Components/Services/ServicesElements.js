import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesContainer = motion(styled.div`
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f0f4ff 0%, #f8f9ff 100%);
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
      radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.08) 0%, transparent 50%);
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 16px;
  }
`);

export const ServicesWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

export const ServicesIcon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  background: linear-gradient(135deg, #f0f4ff 0%, #e6ebff 100%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
  
  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.1);
    
    &::after {
      opacity: 1;
      padding: 4px;
    }
    
    img {
      transform: scale(1.1);
    }
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 16px;
  transition: color 0.3s ease;
`;

export const ServicesCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 48px 32px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    ${ServicesIcon} {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
    }
    
    ${ServicesH2} {
      color: #4a5568;
    }
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 3.5rem;
  color: #2d3748;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
`;

export const ServicesP = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4a5568;
  margin: 0;
  flex-grow: 1;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #718096;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  line-height: 1.6;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
    padding: 0 20px;
  }
`;