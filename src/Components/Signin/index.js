/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
// import DarkMode from '../DarkMode/DarkMode';
import { signInWithRedirect} from "firebase/auth";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth, provider } from "../../firebase-config";
import { toast } from "react-toastify";
import {signInWithEmailAndPassword} from 'firebase/auth';
import SignInImg from "../../images/SignIn.webp";
import {
  CheckBox,
  ForgotPassword,
  FormContainer,
  Image,
  NewContainer,
  PasswordContainer,
  RememberMe,
  RightContainer,
  RightHeading,
  RightPara,
  SignInButton,
  SignInContainer,
  SignInForm,
  SignInInput,
  SignInLabel,
  SignInh1
} from "./SigninElements";
// import Navbar from "../Navbar";

const SignIn = () => {
  const navigate = useNavigate();
  let authorizationToken;
  const [passwordType, setPasswordType] = useState("password");
  const [data, setData] = useState({});
  const [msg, setMsg] = useState("");
  const [invalid, setInvalid] = useState(false);
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
    navigate("/");
  };

  const sendPostRequest = async (e) => {
    if (data.password && data.password.length < 8) {
      setInvalid(true);
    }
    console.log("sendPostRequest is called!!!");
    e.preventDefault();
    try {
      // Sign in with Firebase Authentication
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigateToProfile();   
      // Replace "/" with the actual path of your home page
    } 
    catch (error) {
      toast.error(getErrorMessage(error), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const getErrorMessage = (error) => {
    switch (error.code) {
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/user-disabled":
        return "Your account has been disabled.";
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Invalid email or password.";
      default:
        return "An error occurred while signing in. Please try again.";
    }
  };  
  

  const setBack = () => {
    setInvalid(false);
    return;
  };

  if (invalid) {
    setTimeout(setBack, 5000);
  }

  const showInvalid = () => {
    return (
      <div class="alert alert-danger" role="alert">
        {msg}
      </div>
    );
  };

  // Firebase google authentication
  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
      navigateToProfile();
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <NewContainer>
      <FormContainer>
        <SignInContainer>
          <SignInForm onSubmit={sendPostRequest}>
            <SignInh1>Sign in</SignInh1>
            <SignInLabel htmlFor="email">Email</SignInLabel>
            <SignInInput
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              placeholder="you@example.com"
              id="email"
              required
              aria-required="true"
              aria-label="Email"
            />
            <SignInLabel htmlFor="password">Password</SignInLabel>
            <PasswordContainer>
              <SignInInput
                onChange={(e) => setData({ ...data, password: e.target.value })}
                id="password"
                type={passwordType}
                placeholder="at least 8 characters"
                required
                aria-required="true"
                aria-label="Password"
              />
              {passwordType === "password" ? (
                <i
                  className="fa-solid fa-eye-slash"
                  id="eye"
                  style={{
                    position: "absolute",
                    top: "35%",
                    right: "18%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={handleclick}
                  aria-label="Hide password"
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye"
                  id="eye"
                  style={{
                    position: "absolute",
                    top: "35%",
                    right: "18%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={handleclick}
                  aria-label="Show Password"
                ></i>
              )}
            </PasswordContainer>
            <RememberMe>
              <CheckBox type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </RememberMe>

            <SignInButton type="submit">Sign In</SignInButton>
            {invalid && showInvalid()}
            <NavLink to="/signin/forgotPassword">
              <ForgotPassword>Forgot password?</ForgotPassword>
            </NavLink>
            <label style={{ fontSize: '14px', marginLeft: '-25px', marginTop: '10px', display: 'block', color: 'green' }}>Don't have an account ? </label>
            <NavLink to="/signup" style={{ fontSize: '14px', marginTop: '-20px', marginLeft: '200px' }}>
              SignUp
            </NavLink>
          </SignInForm>
          <div className='flex relative mt-10 w-[80%] md:w-[60%]' onClick={handleGoogleLogin}>
            <button className='py-3 rounded-xl text-black font-semibold w-[100%] border-2 border-black'>Sign in with Google</button>
            <img src={require('../../assests/googleLogo.png')} className='w-10 absolute top-1.5 left-4' alt='google' />
          </div>
        </SignInContainer>

        <RightContainer>
          <RightHeading>Hello, Friend!</RightHeading>
          <RightPara>Enter your details and let's get started.</RightPara>
          <Image src={SignInImg} alt="Image Description" />
        </RightContainer>
      </FormContainer>
    </NewContainer>
  );
};

export default SignIn;
