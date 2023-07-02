import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  NewContainer,
  FormContainer,
  FPForm,
  OTPimg,
  FPheading,
  FPpara,
  OtpInput,
  OTPBoxContainer,
  FPButton,
  TimerContainer,
  ResendLink,
  ResendPara,
} from "./ForgotPasswordelements";
import OTPImg from "../../images/EnterOTP.png";
import Footer from "../Footer";

function Verify() {
  const [Otp, setotp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setotp((prevOtp) =>
      prevOtp.map((d, idx) => (idx === index ? element.value : d))
    );

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = () => {
    // Perform the OTP verification logic here
    // ...

    // Show success toast
    toast.success("OTP verified successfully");
  };

  const handleRetry = () => {
    // Perform the OTP resend logic here
    // ...

    // Show success toast
    toast.success("OTP sent successfully");
  };

  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter((prevCounter) => prevCounter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <NewContainer>
        <FormContainer>
          <FPForm>
            <OTPimg src={OTPImg} alt="OTP image" />
            <FPheading>OTP Verification</FPheading>
            <FPpara>Enter the code sent to your registered E-mail ID</FPpara>
            <OTPBoxContainer>
              {Otp.map((data, index) => (
                <OtpInput
                  type="text"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  required
                />
              ))}
            </OTPBoxContainer>
            <FPButton onClick={handleVerify}>Verify</FPButton>
            <TimerContainer>
              <ResendPara>Resend OTP in 00 : {counter}</ResendPara>
              <ResendLink onClick={handleRetry}>Resend OTP?</ResendLink>
            </TimerContainer>
          </FPForm>
        </FormContainer>
      </NewContainer>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
    </>
  );
}

export default Verify;
