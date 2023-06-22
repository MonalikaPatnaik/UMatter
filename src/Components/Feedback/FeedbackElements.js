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
 background: linear-gradient(45deg, black,  rgb(1, 147, 86) , rgb(10, 201, 122));
 max-width: 550px;
 height: auto;
 width: 100%;
 z-index: 1;
 display: grid;
 margin: 90px auto 40px;
 padding: 40px 32px;
 border-radius: 4px;
 box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.9);

 @media screen and (max-width: 400px) {
    padding: 40px 32px;
 } 
`;

export const FormH1 = styled.label`
 margin-bottom: 40px;
 color: #fff;
 font-size: 20px;
 font-weight: 400;
 text-align: center;
 `;

export const FormLabel = styled.label`
 margin-bottom: 8px;
 color: #fff;
 font-size: 14px;
 cursor:pointer;
`;

export const FormInput = styled.input`
margin-bottom: 40px;
padding: 10px;
border: none;
border-radius: 4px;
font-size:18px;
border:none;
outline:none;
background:rgb(255,255,255);
:focus{
   border-bottom:5px solid #01bf71;
   transition:opacity 0.4s ease;
   box-shadow:1px 2px 10px #01bf71;
}
:invalid{
   border-bottom:5px solid red;
}
@media screen and (max-width:435px){
   font-size:14px;
}
`;

export const FormButton = styled.button`
 background: #01bf71;
 padding: 16px 10px;
 border: none;
 border-radius: 12px;
 color: #fff;
 font-size: 20px;
 cursor: pointer;
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