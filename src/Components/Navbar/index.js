import React, { useEffect, useState } from "react";
import { FaAcquisitionsIncorporated, FaBars, FaBox, FaClosedCaptioning, FaCross, FaCrow, FaExclamationTriangle, FaMicrophoneSlash, FaRegWindowClose } from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  Navitem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoContainer,
  LogoinnerContainer,
  NavBtnMobile,
} from "./NavbarElements";
import manifest from "../../../src/assests/manifest.json";


const faviconSrc = manifest.icons[0].src;
const glassStyle = {
  background: "rgba(40, 30, 30, 0.3)",
  // borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(7.1px)",
  webkitBackdropFilter: "blur(7.1px)",
  border: "1px solid rgba(40, 30, 30, 0.18);"
}
const Navbar = ({ toggle }) => {

  const [navbarBg, setNavbarBg] = useState(glassStyle);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setNavbarBg(scrolled > 0 ? { backgroundColor: "var(--bg-clr)" } : glassStyle);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleBlogsClick = () => {
    navigate("/blogs");
  };
  const handleFeedbackClick = () => {
    navigate("/feedback");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAboutClick = () => {
    navigate("/");
  }

  const handleServicesClick = () => {
    navigate("/");
  }

  const handleTestimonialsClick = () => {
    navigate("/");
  }
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav style={navbarBg}>
        <NavbarContainer>
   
          <LogoContainer>
            <LogoinnerContainer>
              <img src={faviconSrc}
                alt="favicon"
                width="46"
                height="46"
              />
              <NavLogo to="/">UMatter</NavLogo>
            </LogoinnerContainer>
            <MobileIcon onClick={handleToggle}>
              {
                isOpen ? <FaRegWindowClose /> : <FaBars />
              }
            </MobileIcon>
          </LogoContainer>
          <NavMenu isOpen={isOpen}>
            <Navitem>
              <NavLinks to="home" onClick={handleHomeClick}>
                Home
              </NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="about" onClick={handleAboutClick} >About</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="services" onClick={handleServicesClick}>Services</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="testimonials" onClick={handleTestimonialsClick}>Testimonials</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="#" onClick={handleBlogsClick}>
                Blogs{" "}
              </NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="#" onClick={handleFeedbackClick}>
                Feedback{" "}
              </NavLinks>
            </Navitem>
            
            <NavBtnMobile>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          
          </NavBtnMobile>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          
          </NavBtn>
          <DarkMode />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

