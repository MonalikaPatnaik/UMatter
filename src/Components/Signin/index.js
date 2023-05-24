/** @format */

import React from "react";
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
  const [passwordType, setPasswordType] = useState("password");
  const handleclick = (e) => {
    e.preventDefault();
    if (passwordType === "text") {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };
  return (
    <>
      <Container>
        <Navbar />
        <br />

        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                placeholder="email@example.com"
                type="email"
                require
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <div>
                <FormInput
                  style={{ width: "100%" }}
                  placeholder="Must have at least 8 characters"
                  type={passwordType}
                  require
                />
                <button
                  onClick={handleclick}
                  style={{
                    width: "fit-content",
                    position: "relative",
                    left: "90%",
                    bottom: "65%",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  {passwordType === "password" ? (
                    <i className="fa-solid fa-eye-slash" id="eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye" id="eye"></i>
                  )}
                </button>
              </div>
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

