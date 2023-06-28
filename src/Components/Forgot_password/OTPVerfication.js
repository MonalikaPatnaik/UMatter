import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
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
    setotp([...Otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  //   for timer
  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    // <div>
    //   <Container>
    //   <FormWrap>
    //       <Icons to="/UMatter">UMatter</Icons>
    //       <FormContent>
    //     <Form className="forgot_body">
    //       <div className="forgot_head ">OTP Verification</div>
    //       <div className="forgot_cont">
    //         Enter the code sent to your registered E-mail ID
    //       </div>
    //       <div className="boxes_otp">
    //       {Otp.map((data, index) => {
    //         return (
    //           <input
    //             type="text"
    //             maxLength="1"
    //             className="input_otp"
    //             key={index}
    //             value={data}
    //             onChange={(e) => handleChange(e.target, index)}
    //             onFocus={(e) => e.target.select()}
    //             required/>
    //         );
    //       })}
    //       </div>
    //       <div>
    //         <Link>
    //           <FormButton className="forgot_btn">Verify OTP</FormButton>
    //         </Link>
    //       </div>
    //       {/* <div className="rows_input ">
    //             <input type="text"  id="1"  maxlength="1"  className='input_otp'  onkeyup="clickEvent(this,'2')" />
    //             <input type="text" id="2"  maxlength="1"  className='input_otp' onkeyup="clickEvent(this,'3')" />
    //             <input type="text" id='3'  maxlength="1"  className='input_otp' onkeyup="clickEvent(this,'4')" />
    //             <input type="text" id='4'  maxlength="1"  className='input_otp'/>
    //         </div> */}
    //       <div className="timer">
    //         <div className="written">Resend OTP in 00 : {counter}</div>
    //         <a href="/" className="forgot_resend">
    //           Resend OTP ?
    //         </a>
    //       </div>{" "}
    //     </Form>
    //     </FormContent>
    //     </FormWrap>
    //   </Container>
    // </div>
    <>
      <NewContainer>
        <FormContainer>
          <FPForm>
            <OTPimg src={OTPImg} alt="OTP image" />
            <FPheading>OTP Verification</FPheading>
            <FPpara>Enter the code sent to your registered E-mail ID</FPpara>
            <OTPBoxContainer>
              {Otp.map((data, index) => {
                return (
                  <OtpInput
                    type="text"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    required
                  />
                );
              })}
            </OTPBoxContainer>
            <FPButton>Verify</FPButton>
            <TimerContainer>
              <ResendPara>Resend OTP in 00 : {counter}</ResendPara>
              <ResendLink href="/">Resend OTP?</ResendLink>
            </TimerContainer>
          </FPForm>
        </FormContainer>
      </NewContainer>
      <Footer />
    </>
  );
}

export default Verify;
