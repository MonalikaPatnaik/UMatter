import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Footer container
export const FooterContainer = styled.footer`
  background-color: #101522;
  padding-top: 3rem;
  padding-bottom: 3rem;
  z-index: 99;
`;

// Footer wrap
export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1100px;
  flex-direction: column;
`;

// Footer links container
export const FooterLinksContainer = styled.div`
  width: 100%;
  display: grid;

  @media (min-width: 320px) {
    justify-content: center;
  }

  @media (max-width: 786px) {
    gap: 2rem;
  }

  @media (min-width: 786px) {
    grid-template-columns: 1fr 0.5fr;
  }
`;

// Footer links wrapper
export const FooterLinksWrapper = styled.div`
  @media (max-width: 786px) {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 786px) {
    &:nth-child(1) {
      display: flex;
      justify-content: space-around;
    }
    &:nth-child(2) {
      width: 100%;
      display: grid;
      align-self: inherit;
      align-content: center;
      justify-content: center;
    }
  }
`;

// Footer link items
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #fff;

  &.socials {
    display: flex;
    flex-direction: row;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 0.3rem;
    margin-top: 1rem;
  }

  @media (min-width: 320px) {
    align-items: center;
    &.socials {
      margin: 1rem;
    }
  }

  @media (min-width: 786px) {
    align-items: flex-start;
    text-align: left;
  }
`
;

// Footer link title
export const FooterLinkTitle = styled.h1`
 font-size: 18px;
 font-weight: bold;
 margin-bottom: 16px;
`
export const FooterLinkTitleHr = styled.hr`
  content: "";
  border: 2px solid;
  margin-top: 0;
  width: 52%;
  color: #01bf71;
   
`
export const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 0.6rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
  }
  
  &.icons{
    text-align:center;
    border-radius:22px;
    padding:7px;
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.3s ease-out;
   }
   
  &.icons:hover{
    transform: translate(0,-10px);
    background-color:white !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  
   }
   
  &.icons{
    color:white !important;
   }
   
  &.insta:hover{
    color:#E4405F!important;
   }
   
  &.fb:hover{
    color:#1877F2!important;
   }
   
  &.youtube:hover{
    color:#FF0000 !important;
   }
   
  &.twitter:hover{
    color:#1DA1F2 !important;
   } 
   
  &.linkdn:hover{
    color:#0077B5 !important;
   }
   &.github:hover{
    color:black !important;
   }
 `
 
 ;

 

// Social media
export const SocialMedia = styled.section``;

// Social media wrap
export const SocialMediaWrap = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Social logo
export const SocialLogo = styled(Link)`
  color: rgb(255, 255, 255);
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
    mask-size: 200%;
    animation: shine 2s infinite;
    color: lightcyan;
  }

  @keyframes shine {
  from {
    mask-position: 150%;
  }
  
  to {
    mask-position: -50%;
  }
}
`;

// Website rights
export const WebsiteRights = styled.small`
  color: #fff;
`;

// Social icons
export const SocialIcons = styled.div``;

// Social icons link
export const SocialIconsLink = styled.a``;
