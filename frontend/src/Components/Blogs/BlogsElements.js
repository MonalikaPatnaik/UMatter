import styled from "styled-components";

export const BlogsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-clr);
  padding: 120px 20px;
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
`;

export const BlogsWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 40px;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    grid-gap: 25px;
  }

  > div:last-child {
    margin-bottom: 30px;
  }
`;

export const BlogsCard = styled.div`
  position: relative;
  height: 400px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    opacity: 0.6;
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
    border-color: var(--accent-clr);
  }

  &:hover::before {
    opacity: 0.3;
  }

  &:hover ${BlogsH1}, &:hover ${BlogsP}, &:hover ${ReadMoreButton} {
    opacity: 1;
    transform: translateY(0);
  }

  @media screen and (max-width: 480px) {
    height: 350px;
  }
`;

export const BlogsIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${BlogsCard}:hover & {
    transform: scale(1.1);
  }
`;

export const BlogsH1 = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateY(20px);
  margin: 0;
  opacity: 0;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  z-index: 10;
  color: white;
  font-family: "Poppins", sans-serif;
  padding: 0 20px;
  line-height: 1.3;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    padding: 0 15px;
  }
`;

export const BlogsP = styled.p`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  font-size: 0.9rem;
  text-align: center;
  opacity: 0;
  color: rgba(255, 255, 255, 0.9);
  padding: 0 20px;
  margin: 0;
  transform: translateX(-50%) translateY(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  line-height: 1.5;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0 15px;
    bottom: 70px;
  }
`;

export const ReadMoreButton = styled.button`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateX(-50%) translateY(-5px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  @media screen and (max-width: 480px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
`;

export const SearchWrapper = styled.div`
  position: relative;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 25px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  padding: 0 60px 0 20px;
  color: var(--text-clr);
  font-family: "Inter", sans-serif;

  &::placeholder {
    color: var(--text-clr);
    opacity: 0.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding: 0 50px 0 16px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  border: none;
  border-radius: 0 25px 25px 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ClearButton = styled.button`
  margin-left: 15px;
  padding: 12px 24px;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 25px;
  color: var(--text-clr);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--accent-clr);
  }

  @media screen and (max-width: 480px) {
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 12px;
  }
`;

export const BlogsTitle = styled.h1`
  margin-bottom: 60px;
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
    margin-bottom: 40px;
  }
`;