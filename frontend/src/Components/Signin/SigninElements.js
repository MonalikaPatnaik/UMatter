import styled from "styled-components";
import { Link } from "react-router-dom";

export const NewContainer = styled.div`
  background: var(--bg-clr);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    z-index: 1;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  z-index: 2;
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SignInContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

export const RightContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    z-index: 1;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    min-height: 40vh;
    padding: 40px 20px;
  }
`;

export const SignInForm = styled.form`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 32px;
  padding: 50px 40px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 768px) {
    padding: 40px 30px;
    margin: 20px;
  }
`;

export const SignInh1 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: clamp(2rem, 4vw, 2.5rem);
  line-height: 1.2;
  margin-bottom: 40px;
  text-align: center;
  
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SignInLabel = styled.label`
  align-self: flex-start;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: var(--text-clr);
  margin-bottom: 8px;
  opacity: 0.9;
`;

export const SignInInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 12px;
  border: 2px solid var(--border-clr);
  background: var(--card-bg);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: var(--text-clr);
  margin-bottom: 20px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: var(--text-clr);
    opacity: 0.6;
  }

  &:hover {
    border-color: var(--accent-clr);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.1);
  }

  &:focus {
    border-color: var(--accent-clr);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 768px) {
    padding: 14px 16px;
    font-size: 14px;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  
  i {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--text-clr);
    opacity: 0.6;
    transition: all 0.3s ease;
    z-index: 10;
    
    &:hover {
      opacity: 1;
      color: var(--accent-clr);
    }
  }
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 20px;
  gap: 8px;
  
  label {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: var(--text-clr);
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: var(--accent-clr);
  cursor: pointer;
`;

export const SignInButton = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 16px 32px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  color: white;
  cursor: pointer;
  margin: 20px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media only screen and (max-width: 768px) {
    padding: 14px 28px;
    font-size: 14px;
  }
`;

export const ForgotPassword = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: var(--accent-clr);
  cursor: pointer;
  margin: 10px 0;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary-clr);
    text-decoration: underline;
  }
`;

export const RightHeading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  z-index: 2;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const RightPara = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
  width: 80%;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const Image = styled.img`
  height: auto;
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05) rotate(2deg);
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    max-width: 300px;
  }
`;

export const GoogleLoginContainer = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 20px;
`;

export const GoogleLoginButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  border: 2px solid var(--border-clr);
  border-radius: 12px;
  background: var(--card-bg);
  color: var(--text-clr);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: var(--accent-clr);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.1);
  }

  img {
    width: 24px;
    height: 24px;
  }

  @media only screen and (max-width: 768px) {
    padding: 14px 20px;
    font-size: 14px;
  }
`;

export const AuthLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  
  label {
    font-size: 14px;
    color: var(--text-clr);
    opacity: 0.8;
  }
  
  a {
    font-size: 14px;
    color: var(--accent-clr);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--secondary-clr);
      text-decoration: underline;
    }
  }
`;

// Legacy elements for backward compatibility
export const Container = styled.div``;
export const FormWrap = styled.div``;
export const Icons = styled(Link)``;
export const FormContent = styled.div``;
export const Form = styled.form``;
export const FormH1 = styled.label``;
export const FormLabel = styled.label``;
export const FormInput = styled.input``;
export const FormButton = styled.button``;
export const Text = styled.span``;