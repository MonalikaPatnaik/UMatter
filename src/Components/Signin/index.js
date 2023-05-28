/** @format */

import React from 'react';
import {useNavigate} from 'react-router-dom';

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
} from "./SigninElements";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";

const SignIn = () => {
  const navigate = useNavigate();
  let authorizationToken;
  const [passwordType, setPasswordType] = useState('password');
  const [data, setData] = useState({});
  const handleclick = (e) => {
    e.preventDefault();
    if (passwordType === "text") {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };

  const navigateToProfile = () => {
    // 👇️ navigate to /contacts
    navigate('/profile');
  };

  const sendPostRequest = async (e) => {
    console.log("sendPostRequest is called!!!");
    e.preventDefault();
    const response = await fetch('http://localhost:8081/SignIn', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    sessionStorage.removeItem("authorizationToken");
    sessionStorage.removeItem("username");
    const {jwtToken, username} = result;
    authorizationToken = "Bearer ".concat(jwtToken.toString());
    sessionStorage.setItem("authorizationToken", authorizationToken);
    sessionStorage.setItem("username",username);
    navigateToProfile();
  }
  return (
    <>
      <Container>
        <Navbar />
        <br />

        <FormWrap>
          <FormContent>
            <Form onSubmit={sendPostRequest} action="#">
              <FormH1>Sign In</FormH1>
              
              <FormInput
                onChange={e => setData({ ...data, email: e.target.value })}
                placeholder="Email" type="email" id="email"
                require />
             
              <FormInput
                onChange={e => setData({ ...data, password: e.target.value })}
                placeholder="Password"
                type={passwordType} id="password"
                require
              />
              <button
              className='eye-button'
                onClick={handleclick}
                style={{
                  width: "fit-content",
                  position: "relative",
                  left: "92%",
                  bottom: "314%",
                  background: "transparent",
                  border: "none",
                }}>
                {passwordType === 'password' ? (
                  <i class="fa-solid fa-eye-slash" id="eye"></i>
                ) : (
                  <i class="fa-solid fa-eye" id="eye"></i>
                )}
              </button>
              <FormButton type="submit">Continue</FormButton>
              <NavLink
                to="/signin/forgotPassword"
                style={{
                  textAlign: "center",
                  color: "white",
                  marginTop: "10px",
                  textDecoration: "none",
                }}
              >
                Forgot Password ?
              </NavLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

