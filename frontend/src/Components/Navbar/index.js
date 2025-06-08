import React, { useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import {
  FaBars,
  FaRegWindowClose,
} from "react-icons/fa";
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
// const glassStyle = {
//   background: "rgba(40, 30, 30, 0.3)",
//   // borderRadius: "16px",
//   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//   backdropFilter: "blur(7.1px)",
//   WebkitBackdropFilter: "blur(7.1px)",
//   border: "1px solid rgba(40, 30, 30, 0.18)",
// };
const Navbar = ({ toggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [navbarBg, setNavbarBg] = useState(glassStyle);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Add an observer to check for user authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Clean up the observer on component unmount
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // setNavbarBg(
      //   scrolled > 0 ? { backgroundColor: "var(--bg-clr)" } : glassStyle
      // );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleBlogsClick = () => {
    setIsOpen(false); // Close the navbar
    navigate("/blogs");
  };
  const handleFeedbackClick = () => {
    setIsOpen(false); // Close the navbar
    navigate("/feedback");
  };

  const handleHomeClick = () => {
    setIsOpen(false); // Close the navbar
    navigate("/");
  };

  const handleAboutClick = () => {
    setIsOpen(false); // Close the navbar
    navigate("/");
  };

  const handleServicesClick = () => {
    setIsOpen(false); // Close the navbar
    navigate("/");
  };

  const handleTestimonialsClick = () => {
    setIsOpen(false); // Close the navbar
    navigate("/");
  };

  // const handleTeamClick = () => {
  //   setIsOpen(false); // Close the navbar
  //   navigate("/team");
  // };

  // Function to handle navbar toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <LogoContainer>
          <LogoinnerContainer>
            <img src={faviconSrc} alt="favicon" width="46" height="46" />
            <NavLogo to="/">UMatter</NavLogo>
          </LogoinnerContainer>
          <MobileIcon onClick={handleToggle}>
            {isOpen ? <FaRegWindowClose /> : <FaBars />}
          </MobileIcon>
        </LogoContainer>
        <NavMenu isOpen={isOpen}>
          <Navitem>
            <NavLinks to="home" onClick={handleHomeClick}>
              Home
            </NavLinks>
          </Navitem>
          <Navitem>
            <NavLinks to="about" onClick={handleAboutClick}>
              About
            </NavLinks>
          </Navitem>
          <Navitem>
            <NavLinks to="services" onClick={handleServicesClick}>
              Services
            </NavLinks>
          </Navitem>
          <Navitem>
            <NavLinks to="testimonials" onClick={handleTestimonialsClick}>
              Testimonials
            </NavLinks>
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
          {/* <Navitem>
            <NavLinks to="#" onClick={handleTeamClick}>
              Team{" "}
            </NavLinks>
          </Navitem> */}

          <NavBtnMobile>
            <NavBtnLink onClick={handleToggle} to="/signup">
              Register
            </NavBtnLink>
          </NavBtnMobile>
        </NavMenu>
        <NavBtn>
      {user ? (
        // Display user profile/account button when authenticated
        <NavBtnLink to="/user-profile">Account</NavBtnLink>
      ) : (
        // Display register button when not authenticated
        <NavBtnLink to="/signup">Register</NavBtnLink>
      )}
      <DarkMode toggle={toggle} />
    </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
