import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
// $bgcolor=var(--bg-clr);

export const TestimonialsContainer = motion(styled.div`
  padding: 30px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-clr);
  width: 100%;
  overflow: hidden;

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

export const TestimonialsWrapper = styled.div`
  position: relative;
  max-width: 90%;
  margin: 0 auto;
  grid-gap: 16px;
  padding: 0 50px;
  overflow: hidden;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.defaultColor}; /* Set a default background color */

  /* Set the background color based on the body class */
  body.light-theme & {
    background-color: #ffd60a; /* Set background color to yellow if body has 'light-theme' class */
  }

  body.dark-theme & {
    background-color: #030640cc; /* Set background color to green if body has 'dark-theme' class */
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const TestimonialsCard = styled.div`
  min-width: 33.3%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  margin-right: 20px;
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

export const TestimonialsIcon = styled.img`
  height: 170px;
  width: 180px;
  margin-bottom: 10px;
  border: 0.5px solid gray;
  box-shadow: 3px 3px 3px gray;
`;

export const TestimonialsH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-clr);

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TestimonialsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const TestimonialsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
