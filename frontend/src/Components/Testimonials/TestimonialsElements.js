import styled from "styled-components";
import { motion } from "framer-motion";

export const TestimonialsContainer = motion(styled.div`
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
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
      radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.08) 0%, transparent 50%);
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 16px;
  }
`);

export const TestimonialsWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 40px;
  border-radius: 32px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    border-radius: 24px;
  }
`;

export const TestimonialCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 120px;
    color: #667eea;
    font-family: Georgia, serif;
    opacity: 0.1;
    line-height: 1;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

export const TestimonialIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
  border: 3px solid #667eea;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TestimonialText = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 24px;
  font-style: italic;
  position: relative;
  z-index: 2;
`;

export const TestimonialAuthor = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 8px 0;
  position: relative;
  z-index: 2;
`;

export const TestimonialRole = styled.p`
  font-size: 16px;
  color: #718096;
  margin: 0;
  position: relative;
  z-index: 2;
`;

export const TestimonialsH1 = styled.h1`
  font-size: 3.5rem;
  color: #2d3748;
  margin-bottom: 80px;
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
    margin-bottom: 60px;
  }
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