import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #101522;
`

export const FooterWrap = styled.div`
 padding: 48px 24px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 max-width: 1100px;
 margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
 display: flex;
 justify-content: center;

 @media screen and (max-width: 820px) {
    padding-top: 32px;
 }
`
export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and(max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

&.about{
  position:relative;
  top:2rem;
  right:-1rem;
}

&.contact{
  position:relative;
  top:1.9rem;
  right:-11rem;
}

&.videos{
  position:relative;
  top:1.9rem;
  right:-19rem;
}

&.socials {
  position: relative;
  top: 1.9rem;
  right: -10rem;
}


 @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
 }
`
export const FooterLinkTitle = styled.h1`
 font-size: 18px;
 font-weight: bold;
 margin-bottom: 16px;
`
export const FooterLinkTitleHr = styled.hr`
  content: "";
  border: 2px solid;
  margin-top: 0;
  width: 52%;
  color: #01bf71;
   
`
export const FooterLink = styled(Link)`
 color: #fff;
 text-decoration: none;
 margin-bottom: 0.5rem;
 font-size: 14px;

 &:hover {
    color: #01bf71;
    transition: 0.3s ease-out
 }
`
export const SocialMedia = styled.section`
 max-width: 1000px;
 width: 100%;
`

export const SocialMediaWrap = styled.div`
 display: flex;
 justify-content: space-between;
//  Improvement -- #issue 36 remarks->Looks more consistent
 align-items: baseline;
 max-width: 1100px;
 margin: 40px auto 0 auto;

 @media screen and (max-width: 820px) {
    flex-direction: column;
 }
`

export const SocialLogo = styled(Link)`
 color: #fff;
 position:relative;
 top:-16rem;
 left:-6rem;
 cursor: pointer;
 // bugfix -- #issue 36 remarks->remove bad looking link underline
 text-decoration: none;
 font-size: 1.5rem;
 font-weight: bold;
`
export const WebsiteRights = styled.small`
 color: #fff;
 margin-bottom: 16px;
 position:absolute;
 left:40rem;
`

export const SocialIcons = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 250px;
`

export const SocialIconsLink = styled.a`
 color: #fff;
 font-size; 24px;
`