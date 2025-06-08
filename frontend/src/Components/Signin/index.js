/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
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
  SignInh1,
  GoogleLoginContainer,
  GoogleLoginButton,
  AuthLinks,
} from "./SigninElements";

const SignIn = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [data, setData] = useState({});
  const [msg, setMsg] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleclick = (e) => {
    e.preventDefault();
    if (passwordType === "text") {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };

  const navigateToProfile = () => {
    navigate("/");
  };

  const sendPostRequest = async (e) => {
    e.preventDefault();
    
    if (data.password && data.password.length < 8) {
      setInvalid(true);
      setMsg("Password must be at least 8 characters long.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigateToProfile();   
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
    
    setIsSubmitting(false);
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
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200\" role="alert">
        {msg}
      </div>
    );
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
      navigateToProfile();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <NewContainer>
      <FormContainer>
        <SignInContainer>
          <SignInForm onSubmit={sendPostRequest}>
            <SignInh1>Sign In</SignInh1>
            
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
                  onClick={handleclick}
                  aria-label="Hide password"
                  style={{ cursor: 'pointer' }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye"
                  onClick={handleclick}
                  aria-label="Show Password"
                  style={{ cursor: 'pointer' }}
                ></i>
              )}
            </PasswordContainer>
            
            <RememberMe>
              <CheckBox type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </RememberMe>

            <SignInButton 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </SignInButton>
            
            {invalid && showInvalid()}
            
            <NavLink to="/signin/forgotPassword">
              <ForgotPassword>Forgot password?</ForgotPassword>
            </NavLink>
            
            <AuthLinks>
              <label>Don't have an account?</label>
              <NavLink to="/signup">Sign Up</NavLink>
            </AuthLinks>
          </SignInForm>
          
          <GoogleLoginContainer>
            <GoogleLoginButton onClick={handleGoogleLogin}>
              <img src={require('../../assests/googleLogo.png')} alt='Google' />
              Sign in with Google
            </GoogleLoginButton>
          </GoogleLoginContainer>
        </SignInContainer>

        <RightContainer>
          <RightHeading>Hello, Friend!</RightHeading>
          <RightPara>Enter your details and let's get started.</RightPara>
          <Image src={SignInImg} alt="Sign In Graphic" />
        </RightContainer>
      </FormContainer>
    </NewContainer>
  );
};

export default SignIn;