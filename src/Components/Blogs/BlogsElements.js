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
position: relative;
display: flex;
align-items: flex-end;
overflow: hidden;
padding: 1rem;
width: 100%;
text-align: center;
color: whitesmoke;
background-color: whitesmoke;
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);

&:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2), 0 16px 32px rgba(0, 0, 0, 0.2), 0 32px 64px rgba(0, 0, 0, 0.2);
}
`;

export const BlogsCardInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 2rem;
color: #000;
`;

export const BlogsCardIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
object-fit: cover;
border-radius: 50%;
`;

export const BlogsCardTitle = styled.h2`
font-size: 24px;
margin-bottom: 10px;
font-weight: 600;
`;

export const BlogsCardDescription = styled.p`
font-size: 16px;
color: #555;
`;

export const BlogsCardButton = styled.button`
margin-top: 10px;
background-color: #28b86b;
color: #fff;
border: none;
padding: 10px 20px;
border-radius: 4px;
font-size: 16px;
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover {
background-color: #000;
color: #fff;
}
`;