import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import styled, { keyframes } from "styled-components";

import {TiArrowSortedUp} from "react-icons/ti";

const jump = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <TiArrowSortedUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 1.8rem;
    width: 2rem;
    height: 2rem;
    color: #fff;
    background-color:rgb(62, 62, 252);
    box-shadow:rgba(0,0,0,0.2) 0px 0px 10px 0px;
    border-radius: 50%;
    position: fixed;
    bottom: 1rem;
    left: 2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    animation: ${jump} 0.5s infinite;

  }

  @media (max-width:1200px) {
    .top-btn {
      font-size: 1.5rem;
      width: 1.6rem;
      height: 1.6rem;
      bottom: 1rem;
      left: 1rem;
      
    }
  }
`;


export default GoToTop;