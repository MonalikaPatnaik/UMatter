import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "../Signin/SigninElements";

const GetMail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const handleContinue = () => {
    if (!email) alert("enter email");
    else navigate("/signin/otpverification");
  };
  return (
    <FormWrap className="email-form">
      <FormContent>
        <Form>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            type="email"
            id="email"
            require
          />
          <FormButton onClick={handleContinue}>Continue</FormButton>
          <br />
          <FormButton onClick={() => navigate("/signin")}>Cancel</FormButton>
        </Form>
      </FormContent>
    </FormWrap>
  );
};

export default GetMail;
