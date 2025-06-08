import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkTitleHr,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <div className="flex flex-col items-center">
              <FooterLinkItems className="about">
                <Link to="/">
                  <FooterLinkTitle>About us</FooterLinkTitle>
                </Link>
                <FooterLinkTitleHr className="hr" />
                <FooterLink to="/signin">How it Works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/develop">Careers</FooterLink>
                <FooterLink to="/develop">Investors</FooterLink>
                <FooterLink to="/develop">Terms of Services</FooterLink>
              </FooterLinkItems>
            </div>
            <div className="flex flex-col items-center">
              <FooterLinkItems className="contact">
                <Link to="/contact">
                  <FooterLinkTitle>Contact Us</FooterLinkTitle>
                </Link>

                <FooterLinkTitleHr className="hr" />
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/develop">Support</FooterLink>
                <FooterLink to="/develop">Destinations</FooterLink>
                <FooterLink to="/develop">Sponsorships</FooterLink>
              </FooterLinkItems>
            </div>
            <div className="flex flex-col items-center">
              <FooterLinkItems className="videos">
                <Link to="/blogs">
                  <FooterLinkTitle>Videos</FooterLinkTitle>
                </Link>
                <FooterLinkTitleHr className="hr" />
                <FooterLink to="/develop">Submit Video</FooterLink>
                <FooterLink to="/develop">Ambassadors</FooterLink>
                <FooterLink to="/develop">Agency</FooterLink>
                <FooterLink to="/develop">Influencer</FooterLink>
              </FooterLinkItems>
            </div>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
