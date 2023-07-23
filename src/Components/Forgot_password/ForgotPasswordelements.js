import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NewContainer = styled.div`
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
  width: 500px;
  max-width: 100%;
  min-height: 550px;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(147.84deg, #01bf71 8.1%, #00492b 95.42%);
`;

export const FPForm = styled.form`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FPimg = styled.img`
  width: 70%;
`;

export const FPheading = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 2.3rem;
  line-height: 4rem;
  color: #fff;
`;

export const FPpara = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #ffffff;
  margin-top: 0.4rem;
  margin-bottom: 1rem;
  width: 70%;
  text-align: center;
`;

export const FPinput = styled.input`
  width: 70%;
  padding: 0.5rem;
  border-radius: 0;
  border: None;
  background: #fff;
  font-family: 'Poppins';
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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10%;
`;

export const CancelButton = styled.button`
  width: 7rem;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  color: #01bf71;
  margin-top: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 1rem;

  &:hover {
    background: #00492b;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const FPButton = styled.button`
  width: 8rem;
  height: 3rem;
  font-family: 'Poppins';
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
  margin-bottom: 1rem;
  &:hover {
    background: #00492b;
    color: #ffffff;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const OtpInput = styled.input`
  width: 8%;
  aspect-ratio: 1/1;

  text-align: center;
  padding: 0.5rem;
  border-radius: 0;
  border: None;
  background: #fff;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
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

export const OTPBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5%;
`;

export const OTPimg = styled.img`
  width: 50%;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  width: 45%;
  justift-content: center;
  align-items: center;
  text-align: center;
`;

export const ResendLink = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #ffffff;
  margin-top: 0.4rem;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #fff;
  }
`;

export const ResendPara = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #ffffff;
  margin-top: 0.4rem;
  margin-bottom: 1rem;
`;
