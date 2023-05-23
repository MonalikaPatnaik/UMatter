import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, Navitem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Navbar = ({ toggle }) => {
  const auth = getAuth();
  const [pagestate, setPageState] = useState('/LoginPage');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Profile');
      } else {
        setPageState('Sign In');
      }
    });
  }, [auth]);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>UMatter</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <Navitem>
              <NavLinks to='/home'>Home</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to='/about'>About</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to='/services'>Services</NavLinks>
            </Navitem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to={`${pagestate === 'Profile' ? '/profile' : '/signin'}`}>
              {pagestate}
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
