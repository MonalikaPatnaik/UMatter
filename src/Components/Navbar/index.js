import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
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
} from "./NavbarElements";
import manifest from "../../../src/assests/manifest.json";
import { HashLink } from "react-router-hash-link";

const faviconSrc = manifest.icons[0].src;

const Navbar = ({ toggle }) => {
  const [navbarBg, setNavbarBg] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // setNavbarBg(scrolled > 0 ? "rgba(0, 0, 0, 0.9)" : "");
      setNavbarBg(scrolled > 0 ? "var(--bg-clr)" : "");
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

  const handleHomeClick = () => {
    navigate("/");
  };

const handleAboutClick=()=>{
  navigate("/");
}

const handleServicesClick=()=>{
  navigate("/");
}
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav style={{ background: navbarBg }}>
        <NavbarContainer>
          <LogoContainer>
          <img src ={faviconSrc} 
          alt = "favicon" 
          width ="46"
          height="46"
          />

          <NavLogo to="/">UMatter</NavLogo>
          </LogoContainer>
          <MobileIcon onClick={handleToggle}>
            <FaBars />
          </MobileIcon>
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
              <NavLinks to="#" onClick={handleBlogsClick}>
                Blogs{" "}
              </NavLinks>
            </Navitem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
            <DarkMode />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
