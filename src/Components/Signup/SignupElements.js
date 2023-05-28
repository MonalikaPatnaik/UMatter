import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
 min-height: 692px;
 position: fixed;
 margin-top:0px;
 padding: 20px;
 bottom: 0;
 left: 0;
 right: 0;
 top: 0;
 z-index: 0;
 overflow: scroll;
 background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
 );
`;

export const FormWrap = styled.div`
 min-height: 100vh;
 margin-top: 7%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 flex-grow:1;
 align-items: center;
 @media screen and (max-width: 400px) {
    height: 80%;
 }
 `;

export const Icons = styled(Link)`
 margin-left: 15px;
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

export const Form = styled.form`
 background: #010101;
 max-width: 400px;
 height: auto;
 width: 100%;
 z-index: 1;
 display: grid;
 margin: 0 auto;
<<<<<<< HEAD
 padding: 40px 40px;
=======
 padding: 30px 32px;
>>>>>>> 2f37ba85956fd0dedaddb05691ba5218e5cdd62f
 border-radius: 4px;
 box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

 @media screen and (max-width: 400px) {
    padding: 32px 32px;
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
margin-bottom: 5px;
color: #fff;
font-size: 18px;
overflow: hidden;

`;

export const FormInput = styled.input`
margin-bottom: 0px;
padding: 10px;
border: none;
border-radius: 4px;
font-size:18px;
border:none;
outline:none;
`;

export const FormButton = styled.button`
 margin-top:30px;
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