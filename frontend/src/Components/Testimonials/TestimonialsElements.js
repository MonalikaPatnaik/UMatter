import styled from "styled-components";
import { motion } from "framer-motion";

export const TestimonialsContainer = motion(styled.div`
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
      radial-gradient(circle at 30% 30%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 16px;
  }
`);

export const TestimonialsWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 40px;
  border-radius: 32px;
  z-index: 2;
  
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    border-radius: 24px;
  }
`;

export const TestimonialsCard = styled.div`
  background: var(--card-bg);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-clr);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-color: var(--accent-clr);
  }

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const TestimonialsIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid var(--accent-clr);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${TestimonialsCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
  }

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 16px;
  }
`;

export const TestimonialsH1 = styled.h1`
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

export const TestimonialsH2 = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-clr);
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const TestimonialsP = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-clr);
  opacity: 0.8;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;