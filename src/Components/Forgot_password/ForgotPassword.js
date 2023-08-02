import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NewContainer,
  FormContainer,
  FPForm,
  FPimg,
  FPheading,
  FPpara,
  FPinput,
  ButtonContainer,
  CancelButton,
  FPButton,
} from "./ForgotPasswordelements";
import ForgotImg from "../../images/Forgotpassword.webp";
import Footer from "../Footer";

const GetMail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const handleContinue = () => {
    if (!email) alert("enter email");
    else navigate("/signin/otpverification");
  };
  return (
    // <>
    //   <FormWrap className="email-form">
    //     <FormContent>
    //       <Form>
    //         <FormLabel htmlFor="email">Email</FormLabel>
    //         <FormInput
    //           onChange={(e) => setEmail(e.target.value)}
    //           placeholder="email@example.com"
    //           type="email"
    //           id="email"
    //           require
    //         />
    //         <FormButton onClick={handleContinue}>Continue</FormButton>
    //         <br />
    //         <FormButton onClick={() => navigate("/signin")}>Cancel</FormButton>
    //       </Form>
    //     </FormContent>
    //   </FormWrap>
    //   <Footer />
    // </>
    <>
      <NewContainer>
        <FormContainer>
          <FPForm>
            <FPimg src={ForgotImg} alt="Forgot Password graphic" />
            <FPheading>Forgot Password?</FPheading>
            <FPpara>
              Don't worry, Enter your email to receive the OTP for verification
              and regain access to your account.
            </FPpara>
            <FPinput
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              id="email"
              require
            />
            <ButtonContainer>
              <CancelButton onClick={() => navigate("/signin")}>Cancel</CancelButton>
              <FPButton onClick={handleContinue}>Continue</FPButton>
            </ButtonContainer>
          </FPForm>
        </FormContainer>
      </NewContainer>
      <Footer />
    </>
  );
};

export default GetMail;
