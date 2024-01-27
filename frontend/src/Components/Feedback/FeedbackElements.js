import styled from 'styled-components';


export const Container = styled.div`
 height: auto;
 bottom: 0;
 left: 0; 
 right: 0;
 top: 0;
 z-index: 0;
 background:var(--bg-clr);
 `;


export const FormWrap = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 `;

export const FormContent = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;

 @media screen and (max-width: 580px) {
    padding: 10px 20px;
 } 
`;

export const Form = styled.form`
background:#fff;
 max-width: 550px;
 height: auto;
 width: 100%;
 z-index: 1;
 display: grid;
 margin: 90px auto 40px;
 padding: 40px 32px;
 border-radius: 4px;
 box-shadow: 1px 2px 10px #01bf71;

 @media screen and (max-width: 400px) {
    padding: 40px 32px;
 } 
`;

export const FormH1 = styled.label`
 margin-bottom: 40px;
 color: #01bf71;
 font-size: 30px;
 font-weight: 600;
 text-align: center;
 `;

export const FormLabel = styled.label`
 margin-bottom: 8px;
 color: #01bf71;
 font-size: 1.3rem;
 font-weight:600;
 cursor:pointer;
 `;
 
 export const FormInput = styled.input`
 margin-bottom: 40px;
 padding: 10px;
border: none;
font-size:1rem;
border:none;
outline:none;
background:#b2ecd4;
:focus{
   border-bottom:5px solid #01bf71;
   transition:opacity 0.4s ease;
   box-shadow:1px 2px 10px #01bf71;
}
:invalid{
   border-bottom:5px solid red;
}
&:hover {
   border: 1px solid #01bf71;
 }
 &::placeholder {
   color: rgba(0, 0, 0, 0.5);
 }
@media screen and (max-width:435px){
   font-size:14px;
}
`;

export const FormButton = styled.button`
 background: #01bf71;
 padding: 12px 10px;
 border: none;
 border-radius: 10px;
 color: #fff;
 font-size: 20px;
 cursor: pointer;
 width:12rem;
 margin-inline:auto;
 &:hover {
   opacity : 0.8;
   transition: opacity 0.25s ease;
 }
 :active{
   background:#fff;
   color:#01bf71;
   opacity:1;
   border:2px solid #01bf71;
 }
`;



