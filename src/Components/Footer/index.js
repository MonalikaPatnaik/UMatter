import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLinkTitleHr,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,
  WebsiteRights
} from './FooterElements';

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
              <Link to="/">
                <FooterLinkTitle>About us</FooterLinkTitle>
              </Link>
              <FooterLinkTitleHr className='hr' />
              <FooterLink to="/signin">How it Works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems className='contact'>
              <Link to="/contact">
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
              </Link>
              <FooterLinkTitleHr className='hr' />
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems className='videos'>
              <Link to="/blogs">
                <FooterLinkTitle style={{ marginBottom: '0' }}>Videos</FooterLinkTitle>
              </Link>
              <FooterLinkTitleHr className='hr' />
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
          <FooterLinkItems className='socials'>
  <FooterLink className="icons youtube" aria-label="Visit us on Youtube" title="Youtube (External Link)" style={{ backgroundColor: "#FF0000" }}>
    <FaYoutube style={{ fontSize: '22px' }} />
  </FooterLink>
  <FooterLink className="icons twitter" aria-label="Visit us on Twitter" title="Twitter (External Link)" style={{ backgroundColor: "#1DA1F2" }}>
    <FaTwitter style={{ fontSize: '22px' }} />
  </FooterLink>
  <FooterLink className="icons linkdn" aria-label="Visit us on Linkedin" title="Linkedin (External Link)" style={{ backgroundColor: "#0077B5" }}>
    <FaLinkedin style={{ fontSize: '22px' }} />
  </FooterLink>
  <FooterLink className="icons insta" aria-label="Visit us on Instagram" title="Instagram (External Link)" style={{ backgroundColor: "#E4405F" }}>
    <FaInstagram style={{ fontSize: '22px' }} />
  </FooterLink>
  <FooterLink className="icons fb" aria-label="Visit us on Facebook" title="Facebook (External Link)" style={{ backgroundColor: "#1877F2" }}>
    <FaFacebook style={{ fontSize: '22px' }} />
  </FooterLink>
  <a href="https://github.com/MonalikaPatnaik/UMatter" target="_blank" rel="noopener noreferrer" className="icons github" aria-label="Visit us on Github" title="Github (External Link)" style={{ backgroundColor: "black", display: "inline-block", verticalAlign: "middle", marginTop: "-7px", transition: "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease" }}>
    <FaGithub className="github-icon" style={{ fontSize: '34px', color: "white", maskImage: "url(#github-mask)" }} />
    <svg style={{ display: "none" }}>
      <mask id="github-mask">
        <rect width="100%" height="100%" fill="white" />
        <FaGithub className="github-icon" style={{ fontSize: '34px', color: "black" }} />
      </mask>
    </svg>
  </a>
  <style>{`
    .github-icon:hover {
      transform: translateY(-8px);
    }
  `}</style>
</FooterLinkItems>
            <FooterLinkItems className='socials'>
              {/* Social media icons */}
            </FooterLinkItems>
            <SocialLogo onClick={handleClick}>
              UMatter
            </SocialLogo>
            <WebsiteRights>UMatter © {new Date().getFullYear()}&nbsp;All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;