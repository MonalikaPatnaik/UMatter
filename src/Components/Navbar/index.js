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
} from "./NavbarElements";

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

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav style={{ background: navbarBg }}>
        <NavbarContainer>
          <NavLogo to="/">UMatter</NavLogo>
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
            <DarkMode />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
