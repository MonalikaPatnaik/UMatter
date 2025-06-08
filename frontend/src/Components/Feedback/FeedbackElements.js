import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-clr);
  padding: 40px 20px;
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
      radial-gradient(circle at 30% 30%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    z-index: 1;
  }
`;

export const FormWrap = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  z-index: 2;
`;

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 32px;
  padding: 50px 40px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 768px) {
    padding: 40px 30px;
    margin: 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  text-align: center;
  font-family: "Poppins", sans-serif;
  
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: var(--text-clr);
  font-size: 16px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  opacity: 0.9;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid var(--border-clr);
  border-radius: 12px;
  background: var(--card-bg);
  color: var(--text-clr);
  font-size: 16px;
  font-family: "Inter", sans-serif;
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

  &:invalid {
    border-color: var(--error-clr);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  @media screen and (max-width: 768px) {
    padding: 14px 16px;
    font-size: 14px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 16px 20px;
  border: 2px solid var(--border-clr);
  border-radius: 12px;
  background: var(--card-bg);
  color: var(--text-clr);
  font-size: 16px;
  font-family: "Inter", sans-serif;
  outline: none;
  resize: vertical;
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

  &:invalid {
    border-color: var(--error-clr);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  @media screen and (max-width: 768px) {
    padding: 14px 16px;
    font-size: 14px;
    min-height: 100px;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  max-width: 200px;
  margin: 20px auto 0;
  padding: 16px 32px;
  border: none;
  border-radius: 50px;
  background: linear-gradient(135deg, var(--accent-clr) 0%, var(--secondary-clr) 100%);
  color: white;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
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

  @media screen and (max-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
  }
`;

export const SuccessMessage = styled.div`
  padding: 16px 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--success-clr);
  border-radius: 12px;
  color: var(--success-clr);
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.1);
`;

export const ErrorMessage = styled.div`
  padding: 16px 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--error-clr);
  border-radius: 12px;
  color: var(--error-clr);
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.1);
`;