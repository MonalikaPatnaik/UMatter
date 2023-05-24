import React from "react";
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

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">UMatter</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <Navitem>
              <NavLinks to="home">Home</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="about">About</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="services">Services</NavLinks>
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
