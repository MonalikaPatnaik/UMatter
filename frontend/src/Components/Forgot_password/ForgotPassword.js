import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
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
import { auth } from "../../firebase-config"; // Import your Firebase authentication instance

const GetMail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const handleContinue = async () => {
    try {
      if (!email) {
        // alert("Please enter your email.");
        let errorMessage = "Please enter your email";
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }

      // Send a password reset email
      await sendPasswordResetEmail(auth, email);

      // After sending the email, navigate to the OTP verification page
      navigate("/signin/otpverification");
    } catch (error) {
      let errorMessage = "Error sending password reset email. Please try again.";
      // console.error("Error sending password reset email", error);
      // alert("Error sending password reset email. Please try again.");
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <NewContainer>
        <FormContainer>
          <FPForm>
            <FPimg src={ForgotImg} alt="Forgot Password graphic" />
            <FPheading>Forgot Password?</FPheading>
            <FPpara>
              Don't worry, enter your email to receive the OTP for verification
              and regain access to your account.
            </FPpara>
            <FPinput
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              id="email"
              aria-label="Email"
              required
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
