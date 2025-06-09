import React, { useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode";
import { useNavigate } from "react-router-dom";
import { smoothScrollTo, handleSmoothScroll } from "../../utils/smoothScroll";
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

const Navbar = ({ toggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Handle initial scroll if there's a hash in the URL
  useEffect(() => {
    const handleInitialScroll = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        setTimeout(() => {
          smoothScrollTo(id, 80, 1000);
        }, 100);
      }
    };

    // Wait for the page to fully load before scrolling
    window.addEventListener('load', handleInitialScroll);
    return () => window.removeEventListener('load', handleInitialScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (window.location.pathname !== '/') {
      // If not on home page, navigate first then scroll
      navigate('/', { replace: true });
      setTimeout(() => {
        smoothScrollTo(sectionId, 80, 1000);
      }, 100);
    } else {
      // If already on home page, just scroll
      smoothScrollTo(sectionId, 80, 1000);
    }
  };

  const handlePageNavigation = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    navigate(path);
  };

  return (
    <Nav isOpen={isOpen}>
      <NavbarContainer>
        <LogoContainer to="/" onClick={() => window.scrollTo(0, 0)}>
          <LogoinnerContainer>
            <img src={faviconSrc} alt="Logo" style={{ height: '40px' }} />
          </LogoinnerContainer>
          <NavLogo>UMatter</NavLogo>
        </LogoContainer>

        <MobileIcon onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMenu isOpen={isOpen}>
          <Navitem>
            <NavLinks 
              to="/" 
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </NavLinks>
          </Navitem>
          <Navitem>
            <NavLinks 
              to="/#about" 
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </NavLinks>
          </Navitem>
          <Navitem>
            <NavLinks 
              to="/#services" 
              onClick={(e) => handleNavClick(e, 'services')}
            >
              Services
            </NavLinks>
          </Navitem>
          <Navitem>
            <NavLinks 
              to="/#testimonials" 
              onClick={(e) => handleNavClick(e, 'testimonials')}
            >
              Testimonials
            </NavLinks>
          </Navitem>
          <Navitem>
            <NavLinks 
              to="/blogs" 
              onClick={(e) => handlePageNavigation(e, '/blogs')}
            >
              Blogs
            </NavLinks>
          </Navitem>
        </NavMenu>


        <NavBtn>
          <DarkMode />
          {user ? (
            <NavBtnLink to="/dashboard">Dashboard</NavBtnLink>
          ) : (
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          )}
        </NavBtn>

      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
