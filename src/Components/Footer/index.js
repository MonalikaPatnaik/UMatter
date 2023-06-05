import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa';
import { FooterContainer,FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems, FooterLinkTitle,FooterLinkTitleHr, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights } from './FooterElements';
 
const Footer = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

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
                       <FooterLink to="/feedback">Feedback</FooterLink>
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
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
          <FooterLinkItems className='socials' >
              <FooterLink className="icons youtube" aria-label="Visit us on Youtube" title="Youtube (External Link)" rel="noopener noreferrer" style={{ backgroundColor:"#FF0000"}}><FaYoutube style={{ fontSize: '22px'}}  /> </FooterLink>
              <FooterLink className="icons twitter" aria-label="Visit us on Twitter" title="Twitter (External Link)" rel="noopener noreferrer" style={{ backgroundColor:"#1DA1F2"}}><FaTwitter style={{ fontSize: '22px'}}  /> </FooterLink>
              <FooterLink className="icons linkdn" aria-label="Visit us on Linkedin" title="Linkedin (External Link)" rel="noopener noreferrer" style={{ backgroundColor:"#0077B5"}}><FaLinkedin style={{ fontSize: '22px'}}/> </FooterLink>
              <FooterLink className="icons insta" aria-label="Visit us on Instagram" title="Instagram (External Link)" rel="noopener noreferrer" style={{ backgroundColor:"#E4405F"}} ><FaInstagram style={{ fontSize: '22px'}}  /> </FooterLink>
              <FooterLink className="icons fb" aria-label="Visit us on Facebook" title="Facebook (External Link)" rel="noopener noreferrer" style={{ backgroundColor:"#1877F2"}}><FaFacebook style={{ fontSize: '22px'}}  /> </FooterLink>
              <FooterLink className="icons github" aria-label="Visit us on Github" title="Github (External Link)" rel="noopener noreferrer" style={{ backgroundColor:"black"}} ><FaGithub style={{ fontSize: '26px'}}  /> </FooterLink>
            </FooterLinkItems>
            <SocialLogo onClick={handleClick}>
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
