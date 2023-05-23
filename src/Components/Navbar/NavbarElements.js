import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  background: var(--bg-clr);
  height: 80px;
  margin-top : -80px; 
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 460px){
    flex-direction:column;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`
export const NavVertContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: black;
  width: 100%;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform:  translateX(0);
  overflow-y: auto;


@media screen and (max-width: 768px) {
  width: 100%;
}

`



export const NavLogo = styled(LinkR)`
  color: var(--text-clr);
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-clr);
  }
`
export const NavMenu = styled.ul`
  display:flex;
  align-items: center;
  list-style: none;
  margin-top : 15px;
  font-size: 1.2rem;
  font-weight: 600;
  @media screen and  (max-width: 768px){
    display:none;
  }
`
export const NavMenuVert = styled.ul`
  display:none;
  
  
  @media screen and  (max-width: 768px){
    display: flex;
    flex-direction:column;  
    align-items: center;
    list-style: none;
    margin-top : 15px;
    font-size: 1.2rem;
    font-weight: 600;
    height: 40vh;
    justify-content: space-between;
  }

`

export const Navitem = styled.li`
  // height: 80px;
`
export const NavLinks = styled(LinkS)`
  color: var(--text-clr);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and  (max-width: 768px){
    display: none;  
  }
`
export const NavBtnVert = styled.nav`
display: none; 

  @media screen and  (max-width: 768px){
     
    display: flex;
  align-items: center;
  }
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--text-clr);
    color: var(--bg-clr);
  }
`