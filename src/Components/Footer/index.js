import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer,FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconsLink, SocialIcons } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
       <FooterWrap>
         <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About us</FooterLinkTitle>
                       <FooterLink to="/signin">How it Works</FooterLink>
                       <FooterLink to="/signin">Testimonials</FooterLink>
                       <FooterLink to="/signin">Careers</FooterLink>
                       <FooterLink to="/signin">Investors</FooterLink>
                       <FooterLink to="/signin">Terms of Services</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                       <FooterLink to="/">Contact</FooterLink>
                       <FooterLink to="/">Support</FooterLink>
                       <FooterLink to="/">Destinations</FooterLink>
                       <FooterLink to="/">Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                       <FooterLink to="/">Submit Video</FooterLink>
                       <FooterLink to="/">Ambassdors</FooterLink>
                       <FooterLink to="/">Agency</FooterLink>
                       <FooterLink to="/">Influencer</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                       <FooterLink to="/">Instagram</FooterLink>
                       <FooterLink to="/">Facebook</FooterLink>
                       <FooterLink to="/">Youtube</FooterLink>
                       <FooterLink to="/">Twitter</FooterLink>
                       <FooterLink to="/">LinkedIn</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
         </FooterLinksContainer>
         <SocialMedia>
            <SocialMediaWrap>
                {/* bug fix - #issue 36 change incorrect link  */}
                <SocialLogo to='/UMatter/'>
                    UMatter
                </SocialLogo>
                <WebsiteRights>UMatter © {new Date().getFullYear()}
                All rights reserved.</WebsiteRights>
                <SocialIcons>
                <SocialIconsLink href="/" target="_blank"
                area-label="Facebook">
                  <FaFacebook />
                </SocialIconsLink>
                <SocialIconsLink href="/" target="_blank"
                area-label="Instagram">
                  <FaInstagram />
                </SocialIconsLink>
                <SocialIconsLink href="/" target="_blank"
                area-label="Youtube">
                  <FaYoutube />
                </SocialIconsLink>
                <SocialIconsLink href="/" target="_blank"
                area-label="Twitter">
                  <FaTwitter />
                </SocialIconsLink>
                <SocialIconsLink href="/" target="_blank"
                area-label="Linkedin">
                  <FaLinkedin />
                </SocialIconsLink>
                </SocialIcons> 
            </SocialMediaWrap>
         </SocialMedia>
       </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;