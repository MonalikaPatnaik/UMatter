import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
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
import DarkMode from "../DarkMode/DarkMode";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggle }) => {
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
  }

  return (
    <>
      <Nav>
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
            <Navitem>
              <NavBtnLink to="/signup">Sign Up</NavBtnLink>
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
