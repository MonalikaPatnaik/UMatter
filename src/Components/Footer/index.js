import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer,FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems, FooterLinkTitle,FooterLinkTitleHr, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights } from './FooterElements';
const Footer = () => {
  return (
    <FooterContainer>
       <FooterWrap>
         <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems className='about'>
                    <FooterLinkTitle>About us</FooterLinkTitle>
                    <FooterLinkTitleHr className='hr' />
                       <FooterLink to="/signin">How it Works</FooterLink>
                       <FooterLink to="/signin">Testimonials</FooterLink>
                       <FooterLink to="/signin">Careers</FooterLink>
                       <FooterLink to="/signin">Investors</FooterLink>
                       <FooterLink to="/signin">Terms of Services</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems className='contact'>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLinkTitleHr className='hr' />
                       <FooterLink to="/contact">Contact</FooterLink>
                       <FooterLink to="/">Support</FooterLink>
                       <FooterLink to="/">Destinations</FooterLink>
                       <FooterLink to="/">Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems className='videos'>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLinkTitleHr className='hr' />
                       <FooterLink to="/">Submit Video</FooterLink>
                       <FooterLink to="/">Ambassdors</FooterLink>
                       <FooterLink to="/">Agency</FooterLink>
                       <FooterLink to="/">Influencer</FooterLink>
                </FooterLinkItems>

            <FooterLinkItems className='socials' >
              <FooterLink className="icons" ><FaInstagram style={{ fontSize: '22px',color:"#E4405F" }} /> </FooterLink>
              <FooterLink className="icons"><FaFacebook style={{ fontSize: '22px',color:"#1877F2" }}  /> </FooterLink>
              <FooterLink className="icons"><FaYoutube style={{ fontSize: '22px',color:"#1877F2" }}  /> </FooterLink>
              <FooterLink className="icons"><FaTwitter style={{ fontSize: '22px',color:"#1DA1F2" }}  /> </FooterLink>
              <FooterLink className="icons"><FaLinkedin style={{ fontSize: '22px',color:"#0077B5" }}  /> </FooterLink>

            </FooterLinkItems>

          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/UMatter/'>
              UMatter
            </SocialLogo>
            <WebsiteRights>UMatter © {new Date().getFullYear()}&nbsp;All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
