import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, Navitem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
  const handleToggle = () => {
    toggle(); // Call the toggle function passed as a prop
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>UMatter</NavLogo>
          <MobileIcon onClick={handleToggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <Navitem>
              <NavLinks to='home'>Home</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to='about'>About</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to='services'>Services</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to='signup'>Sign Up</NavLinks>
            </Navitem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
