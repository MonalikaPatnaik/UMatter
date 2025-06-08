/** @format */
import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "./PhoneInput.css";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  LeftContainer,
  SignUpContainer,
  SignUpForm,
  LeftHeading,
  LeftPara,
  SignUph1,
  FormInput,
  SignUpButton,
  PasswordContainer,
  Image,
  AuthLinks,
} from "./SignupElements";

import { useState } from "react";
import SignUpImg from "../../images/SignUp.webp";
import Captcha from "./Captcha";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [invalid, setInvalid] = useState(false);
  const [msg, setMsg] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordConfirmType, setConfirmPasswordType] = useState("password");
  const [data, setData] = useState({});
  const [trackState, setTrackState] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleclick = (e) => {
    e.preventDefault();
    if (passwordType === "text") {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };
  
  const Confirmhandleclick = (e) => {
    e.preventDefault();
    if (passwordConfirmType === "text") {
      setConfirmPasswordType("password");
    } else {
      setConfirmPasswordType("text");
    }
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return passwordRegex.test(password);
  };
  
  const validateusername = (username) => {
    const usernameRegex = /[A-Za-z]{3}/;
    return usernameRegex.test(username);
  };

  const validatename = (name) => {
    const nameRegex = /[A-Za-z]{3}/;
    return nameRegex.test(name);
  };

  const navigateToProfile = () => {
    navigate("/");
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, username, name, password, confirmpassword } = data;

    if (!email || !validateEmail(email)) {
      setMsg("Please enter a valid email address.");
      setInvalid(true);
      return;
    }

    if (!username || !validateusername(username)) {
      setMsg("Please enter a username (contains only alphabets).");
      setInvalid(true);
      return;
    }

    if (!name || !validatename(name)) {
      setMsg("Please enter your full name.");
      setInvalid(true);
      return;
    }

    if (!password || !validatePassword(password)) {
      setMsg(
        "Please enter a password with at least 8 characters including one uppercase letter, one lowercase letter, and one digit."
      );
      setInvalid(true);
      return;
    }
    
    if (password !== confirmpassword) {
      setMsg("Passwords do not match.");
      setInvalid(true);
      return;
    }

    sendPostRequest();
  };

  const setBack = () => {
    setInvalid(false);
    return;
  };

  if (invalid) {
    setTimeout(setBack, 5000);
  }

  const sendPostRequest = async () => {
    setIsSubmitting(true);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigateToProfile();
      console.log("User created successfully!");
    } catch (error) {
      let errorMessage = "An error occurred during sign-up.";

      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email is already in use. Please use a different email.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Weak password. Please use a stronger password.";
      }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    setIsSubmitting(false);
  };

  const showInvalid = () => {
    return (
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200" role="alert">
        {msg}
      </div>
    );
  };

  return (
    <FormContainer>
      <LeftContainer>
        <LeftHeading>Welcome!</LeftHeading>
        <LeftPara>
          Sign up to be a part of the community, because UMatter.
        </LeftPara>
        <Image src={SignUpImg} alt="Sign Up Graphic" />
      </LeftContainer>
      
      <SignUpContainer>
        <SignUpForm onSubmit={handleSubmit}>
          <SignUph1>Create Account</SignUph1>
          
          <FormInput
            onChange={(e) => setData({ ...data, name: e.target.value })}
            id="FullNameInput"
            type="text"
            placeholder="Full Name"
            aria-label="Full Name"
            required
          />

          <FormInput
            onChange={(e) => setData({ ...data, username: e.target.value })}
            id="usernameInput"
            type="text"
            placeholder="Username"
            aria-label="Username"
            required
          />

          <FormInput
            onChange={(e) => setData({ ...data, email: e.target.value })}
            id="emailInput"
            type="email"
            placeholder="Email"
            required
            aria-label="Email"
          />

          <PasswordContainer>
            <FormInput
              onChange={(e) => setData({ ...data, password: e.target.value })}
              id="PasswordInput"
              type={passwordType}
              placeholder="Password"
              aria-label="Password"
              required
            />
            {passwordType === "password" ? (
              <BiSolidHide
                onClick={handleclick}
                size={20}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <BiSolidShow
                onClick={handleclick}
                size={20}
                style={{ cursor: 'pointer' }}
              />
            )}
          </PasswordContainer>

          <PasswordContainer>
            <FormInput
              onChange={(e) =>
                setData({ ...data, confirmpassword: e.target.value })
              }
              id="ConfirmPasswordInput"
              type={passwordConfirmType}
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              required
            />
            {passwordConfirmType === "password" ? (
              <BiSolidHide
                onClick={Confirmhandleclick}
                size={20}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <BiSolidShow
                onClick={Confirmhandleclick}
                size={20}
                style={{ cursor: 'pointer' }}
              />
            )}
          </PasswordContainer>

          <Captcha message={setTrackState} trackState={trackState} />
          
          <SignUpButton
            type="submit"
            disabled={!trackState || isSubmitting}
            aria-label="Sign Up"
          >
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </SignUpButton>

          {invalid && showInvalid()}
          
          <AuthLinks>
            <label>Already have an account?</label>
            <NavLink to="/signin">Sign In</NavLink>
          </AuthLinks>
        </SignUpForm>
      </SignUpContainer>
    </FormContainer>
  );
};

export default SignUp;