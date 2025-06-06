import styled, { css, keyframes } from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const HeroContainer = styled.div`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.02"><circle cx="30" cy="30" r="1"/></g></svg>');
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.3;
  filter: blur(2px);
`;

export const HeroContent = motion(styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`);

export const HeroH1 = styled.h1`
  margin-bottom: 32px;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.1;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #ffffff 0%, #667eea 50%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${float} 6s ease-in-out infinite;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: ${shimmer} 3s infinite;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const HeroP = styled.p`
  margin-top: -10px;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 400;
  margin-bottom: 40px;
  
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 16px 20px;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 16px;
    font-size: 1rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  text-decoration: none;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 25px -3px rgba(102, 126, 234, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px -3px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }

  @media screen and (max-width: 768px) {
    padding: 14px 32px;
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 28px;
    font-size: 14px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
  transition: transform 0.3s ease;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
  transition: transform 0.3s ease;
`;