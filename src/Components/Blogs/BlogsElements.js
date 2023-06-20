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
  cursor: pointer;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  width: 50%;
  outline: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  /* Position the button relative to its parent */
  position: absolute;
  bottom: 25px;
  margin-left: 24%;

  /* Add a higher z-index to ensure it's above other elements */
  z-index: 2;
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
  color: #fff;
  padding: 0 15px;
  margin-bottom: 3rem;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;
export const BlogsIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 0;
  position: absolute;
`;

export const BlogsH1 = styled.h1`
  margin: 50px 10px 30px 10px;
  opacity: 0;
  text-align: center;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  font-size: 18px;
  font-weight: 700;
  z-index: 10;
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
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 90%;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.35s;
    box-shadow: 0 0 60px -15px rgba(0, 0, 0, 0.6);

    ${ReadMoreButton} {
      opacity: 1;
    }
    ${BlogsIcon} {
      opacity: 0.5;
    }

    ${BlogsH1}, ${BlogsP} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
