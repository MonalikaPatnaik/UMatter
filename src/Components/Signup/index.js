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
} from './SignupElements';
import { useState } from 'react';
import Navbar from '../Navbar'


const SignUp = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [data, setData] = useState({});
  const handleclick = (e) => {
    e.preventDefault();
    if (passwordType === 'text') {
      setPasswordType('password');
    } else {
      setPasswordType('text');
    }
  };

  const sendPostRequest = async (e) => {
    console.log("sendPostRequest exicuted!!!");
    const response = await fetch('http://localhost:8081/SignUp', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
  }

  return (
    <>
    
      <Container>
      <Navbar />
        <FormWrap>
          <div>
            <Icons to="/UMatter">UMatter</Icons>
          </div>
          <FormContent>
            <Form onSubmit={sendPostRequest} action="#">
              <FormH1>Sign up your account</FormH1>

              <FormLabel htmlFor="emailInput">Email</FormLabel>
              <FormInput
                onChange={e => setData({ ...data, email: e.target.value })}
                id="emailInput"
                placeholder="email@example.com"
                type="email"
                require />

              <FormLabel htmlFor='usernameInput'>username</FormLabel>
              <FormInput
                onChange={e => setData({ ...data, username: e.target.value })}
                id="usernameInput"
                placeholder="Enter Username"
                type="text"></FormInput>

              <FormLabel>Full Name</FormLabel>
              <FormInput
                onChange={e => setData({ ...data, name: e.target.value })}
                id="FullNameInput"
                placeholder="Enter your Full Name"
                type="text"></FormInput>

              <FormLabel htmlFor='ContactNumber'>Contact Number</FormLabel>
              <FormInput
                onChange={e => setData({ ...data, contactNumber: e.target.value })}
                id="ContactNumber"
                placeholder="enter phone number"
                type="number"></FormInput>

              <FormLabel htmlFor="PasswordInput">Password</FormLabel>
              <FormInput
                onChange={e => setData({ ...data, password1: e.target.value })}
                id="PasswordInput"
                placeholder='Enter Password'
                type="password"></FormInput>

              <FormLabel htmlFor='PasswordInput2'>Conferm Password</FormLabel>
              <FormInput
                onChange={e => setData({ ...data, password2: e.target.value })}
                id="PasswordInput2"
                placeholder='Re Enter Password'
                type="password"></FormInput>

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

export default SignUp;