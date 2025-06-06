import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const LogoContainer = styled(LinkR)`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 12;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    width: auto;
  }
`;

export const LogoinnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NavLogo = styled.div`
  color: var(--text-clr);
  cursor: pointer;
  font-size: 2rem;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  position: relative;
  
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.3));
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-clr);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 8px;
    border-radius: 12px;
    
    &:hover {
      background: var(--glass-bg);
      transform: scale(1.1);
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  list-style: none;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 999;
    gap: 32px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Navitem = styled.li`
  position: relative;
`;

export const NavLinks = styled(LinkS)`
  color: var(--text-clr);
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  padding: 12px 20px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
  }

  &:hover {
    color: var(--accent-clr);
    background: var(--glass-bg);
    transform: translateY(-2px);
  }

  &:hover::before {
    width: 80%;
  }

  &.active {
    color: var(--accent-clr);
    background: var(--glass-bg);
  }

  &.active::before {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding: 16px 24px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnMobile = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
  }
`;

export const NavBtnLink = styled(LinkR)`
  padding: 12px 32px;
  border-radius: 50px;
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media screen and (max-width: 768px) {
    padding: 14px 28px;
    font-size: 14px;
  }
`;