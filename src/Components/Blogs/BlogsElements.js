import styled from "styled-components";
export const BlogsContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background:white; */

  @media screen and (max-width: 768px) {
    height: 1500px;
  }
  @media screen and (max-width: 480px) {
    height: 1300 px;
  }
`;
export const BlogsWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding: 0 10px;
  @media screen and (max-width: 900px, max-height:900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const BlogsCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //   border-radius: 10px;
  max-height: 380px;
  padding: 20px;
  box-shadow: 0 1px 8px gray;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const BlogsIcon = styled.img`
  height: 200px;
  width: 340px;
  margin-bottom: 10px;
  border: 0.5px solid gray;
  box-shadow: 3px 3px 3px gray;
`;
export const BlogsH1 = styled.h1`
  margin: 100px 10px 35px 10px;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 500;
  //   text-transform: uppercase;

  text-align: center;

  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const BlogsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const BlogsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
