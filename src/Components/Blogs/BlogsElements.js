import styled from "styled-components";

export const BlogsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  background-color: #f7f7f7;
`;

export const ReadMoreButton = styled.button`
  background-color: #28b86b;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(10px);

  &:hover {
    background-color: #000;
    color: #fff;
    // transform: translateY(-5px);
  }
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


export const BlogsIcon = styled.img`
  height: 200px;
  width: 100%;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const BlogsH1 = styled.h1`
  margin: 100px 10px 30px 10px;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const BlogsH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
  color: #333;
`;

export const BlogsP = styled.p`
font-size: 16px;
text-align: center;
color: #555;
opacity: 0;
transform: translateY(10px);
transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

export const BlogsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  height: 280px; 
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  background-color: #e3f4f4;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    height: 490px; 

    > ${BlogsP} {
      opacity: 1;
      transform: translateY(10px);
      transition-delay: 0.2s; 
    }

    ${ReadMoreButton} {
      opacity: 1;
      transition-delay: 0.5s; /* Add a delay to the transition */
    }
  }
`;