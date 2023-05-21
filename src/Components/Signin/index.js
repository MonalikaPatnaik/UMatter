/** @format */

import React from 'react';
import {
  Container,
  Icons,
  FormButton,
  FormContent,
  Form,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
} from './SigninElements';
import { useState } from 'react';

const SignIn = () => {
  const [passwordType, setPasswordType] = useState('password');
  const handleclick = (e) => {
    e.preventDefault();
    if (passwordType === 'text') {
      setPasswordType('password');
    } else {
      setPasswordType('text');
    }
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Icons to="/UMatter">UMatter</Icons>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" require />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
               
                type={passwordType}
                require
              />
              <button
                onClick={handleclick}
                style={{
                  width: 'fit-content',
                  position: 'absolute',
                  right: '38rem',
                  bottom: '17rem',
                  background: 'transparent',
                  border: 'none',
                }}>
                {passwordType === 'password' ? (
                  <i class="fa-solid fa-eye-slash" id="eye"></i>
                ) : (
                  <i class="fa-solid fa-eye" id="eye"></i>
                )}
              </button>
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
