import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  padding: 40px 0 20px 0;
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
      radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    z-index: 1;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  margin: 0 10px;
  text-align: left;
  box-sizing: border-box;

  &.socials {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    align-items: center;
    margin: 0;
    padding: 10px;
    width: 100%;
    text-align: center;

    &.socials {
      margin-top: 10px;
    }
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  font-family: "Poppins", sans-serif;
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  background: linear-gradient(135deg, #ffffff 0%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:hover {
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const FooterLinkTitleHr = styled.hr`
  display: none;
`;

export const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 8px 0;

  &:hover {
    color: #667eea;
    transform: translateX(8px);
  }

  &.icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover {
      transform: translateY(-8px) scale(1.1);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
  }

  &.icons {
    color: white !important;
  }

  &.insta:hover {
    background: linear-gradient(135deg, #e4405f 0%, #c13584 100%);
    color: white !important;
  }

  &.fb:hover {
    background: #1877f2;
    color: white !important;
  }

  &.youtube:hover {
    background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
    color: white !important;
  }

  &.twitter:hover {
    background: #1da1f2;
    color: white !important;
  }

  &.linkdn:hover {
    background: linear-gradient(135deg, #0077b5 0%, #005885 100%);
    color: white !important;
  }

  &.github:hover {
    background: linear-gradient(135deg, #333 0%, #000 100%);
    color: white !important;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SocialLogo = styled(Link)`
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.3));
  }
`;

export const WebsiteRights = styled.small`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  text-align: center;
  margin-top: 10px;
`;

export const SocialIcons = styled.div``;

export const SocialIconsLink = styled.a``;