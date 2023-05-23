import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavVertContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavMenuVert,
  NavBtnVert,
  Navitem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { useState } from "react";

import DarkMode from "../DarkMode/DarkMode";

const Navbar = ({ toggle }) => {

  const [popup,setPopup]=useState(false)

  return (
    <>
      <Nav>
        {popup?
        
        <NavVertContainer>
          <NavLogo to="/">UMatter</NavLogo>
          <MobileIcon onClick={toggle}>
            {popup?<div style={{"background":"white","borderRadius":"50%","color":"black","height":"40px","width":"40px","display":"flex","justifyContent":"center"}} onClick={()=>{setPopup(false)}}>X</div>:<FaBars onClick={()=>{setPopup(true)}}/>}
          </MobileIcon>

          <NavMenuVert style= {{"fontSize":"2.5rem"}}onClick={()=>{
            setPopup(true)
          }}>
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
              <NavLinks to="signup">Sign Up</NavLinks>
            </Navitem>
          </NavMenuVert>
          <NavBtnVert>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            <DarkMode />
          </NavBtnVert>
        </NavVertContainer>

        :

        <NavbarContainer>
        <NavLogo to="/">UMatter</NavLogo>
        <MobileIcon onClick={toggle}>
          {popup?<div style={{"background":"white","border-radius":"50%","color":"black","height":"40px","width":"40px","display":"flex","justifyContent":"center"}} onClick={()=>{setPopup(false)}}>X</div>:<FaBars onClick={()=>{setPopup(true)}}/>}
        </MobileIcon>

        <NavMenu onClick={()=>{
          setPopup(true)
        }}>
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
            <NavLinks to="signup">Sign Up</NavLinks>
          </Navitem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
          <DarkMode />
        </NavBtn>
      </NavbarContainer>
        }
      </Nav>
    </>
  );
};

export default Navbar;