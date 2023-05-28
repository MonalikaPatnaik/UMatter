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

const faviconSrc = manifest.icons[0].src;

const Navbar = ({ toggle }) => {
  const [navbarBg, setNavbarBg] = useState({
    background: "rgba(40, 30, 30, 0.3)",
    // borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(7.1px)",
    webkitBackdropFilter: "blur(7.1px)",
    border: "1px solid rgba(40, 30, 30, 0.18);"
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setNavbarBg(prevState=>{
        return scrolled > 0 ? { backgroundColor: "var(--bg-clr)" } : prevState});
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

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav style={navbarBg}>
        <NavbarContainer>
          <LogoContainer>
            <img
              src={faviconSrc}
              alt="favicon"
              width="46"
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
              <NavLinks to="about">About</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="services">Services</NavLinks>
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
