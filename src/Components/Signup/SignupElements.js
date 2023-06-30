import styled from "styled-components";
// import { Link } from "react-router-dom";

////////////// OLD UI ELEMENTS ///////////////////////// 

// export const Container = styled.div`

// bottom: 0;
// left: 0;
// right: 0;
// top: 0;
// z-index: 0;
// overflow: hidden;
// background:var(--bg-clr);
// `;

// export const FormWrap = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin:50px 0;

//   @media screen and (max-width: 400px) {
//     height: 100%; /* Change to a percentage-based height */
//   }
// `;

// export const Icons = styled(Link)`
//  margin-left: 35px;
//  margin-top: 32px;
//  text-decoration: none;
//  color: #fff;
//  font-weight: 700;
//  font-size: 60px;

//  @media screen and (max-width: 480px) {
//     margin-left: 16px;
//     margin-top: 8px;
//  }
// `;

// export const FormContent = styled.div`
// height: 100%;
// display:flex;
// flex-direction: column;
// justify-content: center;

//  @media screen and (max-width: 480px) {
//     padding: 10px;
//  }
// `;
// export const FormLabel = styled.label`
//  margin-bottom: 8px;
//  color: #fff;
//  font-size: 1.1rem;
//  font-weight: 600;
//  cursor:pointer;
// `;
// export const Form = styled.form`
//   background: linear-gradient(45deg, black,  rgb(1, 147, 86) , rgb(10, 201, 122));
//   text-align:center;
//   max-height:680px;
//   max-width: 500px;
//   height: 100%; /* Change to 100% to fill the available height */
//   width: 100%;
//   z-index: 4;
//   margin:auto;
//   margin-top:40px;
//   border-radius: 10px;
//   padding:20px;
//   box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.9);

//   @media only screen and (max-width:550px){
//     width:85%;
//   }
// `;

// export const FormH1 = styled.label`
//  margin-bottom: 10px;
//  color: #fff;
//  font-family:'League Spartan';
//  font-size: 50px;
//  font-weight: 400;
//  text-align: center;

// @media only screen and (max-width:550px){
//   font-size:40px;
// }
//   @media only screen and (max-width:440px){
//   font-size:30px;
// }

// `;

// export const FormInput = styled.input`

//   font-family: 'Poppins';
//   margin-bottom: 10px; /* Increase margin-bottom for spacing */
//   padding: 10px;
//   border: none;
//   border-radius: 10px;
//   font-size: 18px;
//   border: none;
//   outline: none;
//   width: 100%; /* Add width property to make the input box fill the available width */

//   &:nth-of-type(4){
//     width:20%;
//     float:left;
//   }
//   &:nth-of-type(5){
//     width:75%;
//     float:right;
//   }

//   @media only screen and (max-width:440px){
//     &:nth-of-type(4){
//       font-size:14px;
//     }
//   }
//   @media only screen and (max-width:400px){
//     font-size:15px;
//   }

// `;

// export const FormButton = styled.button`
//   margin-top: 40px; /* Increase the margin-top value for spacing */
//   background: #01bf71;
//   padding: 16px 0;
//   border: none;
//   border-radius: 12px;
//   color: #fff;
//   font-size: 20px;
//   cursor: pointer;
//   display: flex;
//   justify-content: center; /* Center the button horizontally */
//   align-items: center; /* Center the button vertically */
//   width: 100%; /* Make the button fill the available width */
//   box-sizing: border-box; /* Include padding within the button's width */
//   &:hover {
//     opacity: 0.8;
//     transition: 0.25s ease;
//   }

// font-family:'Poppins';
// margin-bottom: 0px;
// padding: 10px;
// border: none;
// border-radius: 10px;
// font-size:18px;
// border:none;
// outline:none;

// `;

// export const Text = styled.span`
//  text-align: center;

//  margin-top: 15px;

//  margin-top: 50px;

//  color: #fff;
//  font-size: 14px;
// `;

///////////////////////////// NEW UI ELEMENTS ////////////////////

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--bg-clr);
`;

export const FormContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 20px #01bf71;
  position: relative;
  overflow: hidden;
  width: 900px;
  max-width: 100%;
  min-height: 550px;
  margin: 3rem auto;
  display: flex;
   @media only screen and (max-width:550px){
          flex-direction: column;
          margin: 0;
      }
`;

export const SignUpContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;

   @media only screen and (max-width:550px){
          padding: 15px 5px;
          width: 100%;
      }
`;

export const LeftContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(147.84deg, #01bf71 8.1%, #00492b 95.42%);
  min-height: 100%;

  @media only screen and (max-width:550px){
    width: 100%;
}
`;

export const LeftHeading = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  color: #ffffff;
`;

export const LeftPara = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #ffffff;
  margin-top: 0.4rem;
  width: 70%;
  text-align: center;
`;

export const SignUpForm = styled.form`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUph1 = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2.3rem;
  line-height: 4rem;
  margin-bottom: 1rem;
  color: #01bf71;
`;

export const FormInput = styled.input`
  width: 70%;
  padding: 0.7rem;
  border-radius: 5px;
  border: None;
  background: rgba(1, 191, 113, 0.3);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 0.8rem;
  color: Black;
  margin-bottom: 1rem;
  outline: none;
  box-sizing: border-box;
  border: 1px solid transparent;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    border: 1px solid #01bf71;
  }

  &:focus {
    border-radius: 0;
    border: 2px solid #01bf71;
  }
`;

export const PhoneContainer = styled.div`
  display: flex;
  width: 70%;

  input {
    &:nth-of-type(1) {
      width: 20%;
      float: left;
      margin-right: 0.6rem;
    }

    &:nth-of-type(2) {
      width: 80%;
      float: right;
    }
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SignUpButton = styled.button`
  width: 9rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  color: #fff;
  margin-top: 0.8rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #00492B;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Image = styled.img`
  height: auto;
  width: 90%;
`;
