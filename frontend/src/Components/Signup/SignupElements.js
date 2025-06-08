import styled from "styled-components";

export const FormContainer = styled.div`
  background: var(--bg-clr);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  
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
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SignUpContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

export const LeftContainer = styled.div`
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

export const LeftHeading = styled.h1`
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

export const LeftPara = styled.p`
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

export const SignUpForm = styled.form`
  width: 100%;
  max-width: 500px;
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

export const SignUph1 = styled.h1`
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

export const FormInput = styled.input`
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

export const PhoneContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;

  input {
    &:nth-of-type(1) {
      width: 30%;
    }

    &:nth-of-type(2) {
      width: 70%;
    }
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  
  svg {
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

export const SignUpButton = styled.button`
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
  margin-top: 20px;
  margin-bottom: 20px;
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media only screen and (max-width: 768px) {
    padding: 14px 28px;
    font-size: 14px;
  }
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

export const CaptchaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 20px 0;
`;

export const CaptchaInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const CaptchaDisplay = styled.input`
  width: 120px;
  padding: 12px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  border: 2px solid var(--border-clr);
  border-radius: 8px;
  background: var(--card-bg);
  color: var(--text-clr);
  pointer-events: none;
  user-select: none;
`;

export const RefreshButton = styled.button`
  padding: 12px;
  border: 2px solid var(--border-clr);
  border-radius: 8px;
  background: var(--card-bg);
  color: var(--text-clr);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: var(--accent-clr);
    color: var(--accent-clr);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CaptchaInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid var(--border-clr);
  border-radius: 8px;
  background: var(--card-bg);
  color: var(--text-clr);
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--accent-clr);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: var(--text-clr);
    opacity: 0.6;
  }
`;

export const VerifyButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
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