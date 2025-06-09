import styled from "styled-components";

// First, define all the basic styled components
const BlogsH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  z-index: 3;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 0 20px;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogsP = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
  line-height: 1.6;
  position: relative;
  z-index: 3;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReadMoreButton = styled.button`
  background: transparent;
  color: white;
  padding: 12px 30px;
  border: 2px solid white;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 3;
  text-transform: uppercase;
  letter-spacing: 1px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: white;
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: var(--accent-clr);
    &::before {
      width: 100%;
    }
  }
`;

const BlogsIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const BlogsContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 0 60px 0 25px;
  font-size: 1rem;
  color: #2d3748;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #718096;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 5px 25px rgba(102, 126, 234, 0.3);
    background: rgba(255, 255, 255, 0.2);
  }
  
  @media (prefers-color-scheme: light) {
    background: rgba(237, 242, 247, 0.8);
    color: #2d3748;
    
    &::placeholder {
      color: #718096;
    }
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  background: var(--accent-clr);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary-clr);
    transform: scale(1.1);
  }
`;

const ClearButton = styled.button`
  background: transparent;
  color: var(--accent-clr);
  border: 2px solid var(--accent-clr);
  border-radius: 25px;
  padding: 10px 25px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 15px;
  
  &:hover {
    background: var(--accent-clr);
    color: white;
  }
`;

const BlogsTitle = styled.h1`
  font-size: 3.5rem;
  color: var(--text-clr);
  margin-bottom: 80px;
  text-align: center;
  position: relative;
  z-index: 3;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
    border-radius: 2px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 60px;
  }
`;

// Now define the components that reference the above components
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
    transform: translateY(-5px);
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 60px;
  position: relative;
  z-index: 3;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const ReadMoreButtonExport = styled(ReadMoreButton)`
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

export { BlogsH1, BlogsP, BlogsIcon, BlogsContent, SearchInput, SearchButton, ClearButton, BlogsTitle, ReadMoreButtonExport as ReadMoreButton };