import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
position: absolute; 
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background:var(--bg-clr);
`;

export const FormWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top:50px;
  


  @media screen and (max-width: 400px) {
    height: 100%; /* Change to a percentage-based height */
  }
`;

export const Icons = styled(Link)`
 margin-left: 35px;
 margin-top: 32px;
 text-decoration: none;
 color: #fff;
 font-weight: 700;
 font-size: 60px;

 @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
 }
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

 @media screen and (max-width: 480px) {
    padding: 10px;
 } 
`;
export const FormLabel = styled.label`
 margin-bottom: 8px;
 color: #fff;
 font-size: 1.1rem;
 font-weight: 600;
 cursor:pointer;
`;
export const Form = styled.form`
  background: linear-gradient(45deg, black,  rgb(1, 147, 86) , rgb(10, 201, 122));
  
  max-height:650px;
  max-width: 500px;
  height: 100%; /* Change to 100% to fill the available height */
  width: 100%;
  z-index: 11;
  display: grid;
  margin:auto;
  border-radius: 10px;
  padding:30px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    /* Remove the padding property */
  }
`;

export const FormH1 = styled.label`
 margin-bottom: 15px;
 color: #fff;
 font-family:'League Spartan';
 font-size: 50px;
 font-weight: 400;
 text-align: center;
 

`;


export const FormInput = styled.input`
font-family:'Poppins';
margin-bottom: 0px;
padding: 10px;
border: none;
border-radius: 10px;
font-size:18px;
border:none;
outline:none;
`;

export const FormButton = styled.button`
 margin-top:20px;
 background: #01bf71;
 padding: 16px 0;
 border: none;
 border-radius: 12px;
 color: #fff;
 font-size: 20px;
 cursor: pointer;
 &:hover {
   opacity : 0.8;
   transition: 0.25s ease;
 }
`;

export const Text = styled.span`
 text-align: center;
 margin-top: 24px;
 color: #fff;
 font-size: 14px;
`;