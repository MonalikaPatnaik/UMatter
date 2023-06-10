import styled from "styled-components";

export const BlogsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-clr);
`;

export const ReadMoreButton = styled.button`
  background-color: #28b86b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  width: 50%;
  outline: none;
  margin-left: 24%;

  /* Add animation properties */
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  /* Add cursor style */
  cursor: pointer;
`;



export const BlogsWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 0 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }

  > div:last-child {
    margin-bottom: 30px;
  }
`;
export const BlogsP = styled.p`
  font-size: 14px;
  text-align: center;
  opacity: 0;
  z-index: 2;
  color: #fff;
  padding: 0 15px;
  margin-bottom: 3rem;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;
export const BlogsIcon = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
  object-fit: cover;
`;

export const BlogsH1 = styled.h1`
  margin: 50px 10px 30px 10px;
  opacity: 0;
  text-align: center;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  font-size: 18px;
  font-weight: 700;
  z-index: 2;
  // color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;




export const BlogsCard = styled.div`
  vertical-align: middle;
  box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  position: relative;
  transition: all 0.35s;
  height: 23rem;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
  &:before,
  &:after {
    content: "";
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }

  &:before {
    height: calc(100% + 30px);
    background-size: cover;
    background-image: url(${({ imageUrl }) => imageUrl});
  }

  &:after {
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0; /* Set initial opacity to 0 */
    transition: opacity 0.3s ease-in-out;
    box-shadow: inset 0 -80px 90px -15px rgba(0, 0, 0, 0.75);
  }

  &:hover {
    &:after {
      // opacity: 0.5;
    }
    &:before {
      top: -30px;
    }
    ${BlogsIcon} {
      opacity: 0.5;
    }
    ${BlogsH1} {
      opacity: 1;
      color: var(--text-clr);
      transform: translateY(0);
    }

    ${ReadMoreButton} {
      box-shadow: 0 0 0 2px #8fe9ff;
      opacity: 1;
      transform: translateY(0);
    }
    ${BlogsP} {
      opacity: 1;
      color: var(--text-clr);
      transform: translateY(0);
    }
  }
`;
