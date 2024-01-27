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
  PhoneContainer,
  SignUpButton,
  PasswordContainer,
  Image,
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
    // Password validation: at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return passwordRegex.test(password);
  };
  const validateusername = (username) => {
    // username  should contains only alphabets
    const usernameRegex = /[A-Za-z]{3}/;
    return usernameRegex.test(username);
  };

  const validatename = (name) => {
    // name  should contains only alphabets
    const nameRegex = /[A-Za-z]{3}/;
    return nameRegex.test(name);
  };

  const navigateToProfile = () => {
    // 👇️ navigate to /contacts
    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const { email, username, name, password, confirmpassword } = data;

    if (!email || !validateEmail(email)) {
      setMsg("Please enter a valid email address.");
      setInvalid(true);
      return;
    }

    if (!username || !validateusername(username)) {
      setMsg("Please enter a username(contains only alphabets).");
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
    console.log("sendPostRequest executed!!!");
    try {
      // Create user with Firebase Authentication
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      navigateToProfile();
      console.log("User created successfully!");
    } catch (error) {
      // Handle errors, e.g., email already in use, weak password, etc.
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
  };

  const showInvalid = () => {
    return (
      <div className="alert alert-danger" role="alert">
        {msg}
      </div>
    );
  };

  return (
    <FormContainer className="flex">
      <LeftContainer>
        <LeftHeading>Welcome!</LeftHeading>
        <LeftPara>
          Sign up to be a part of the community, because UMatter.
        </LeftPara>
        <Image src={SignUpImg} alt="Sign Up Graphic" />
      </LeftContainer>
      <SignUpContainer>
        <SignUpForm onSubmit={handleSubmit} action="#">
          <SignUph1>Create account</SignUph1>
          <FormInput
            onChange={(e) => setData({ ...data, name: e.target.value })}
            id="FullNameInput"
            type="text"
            placeholder="Full Name"
            aria-label="Full Name"
          />
          <FaUser
            className="absolute top-[17%] fill-teal-800 left-[50%] cursor-pointer signupTable:hidden"
            aria-hidden="true"
          />

          <FormInput
            onChange={(e) => setData({ ...data, username: e.target.value })}
            id="usernameInput"
            type="text"
            placeholder="Username"
            aria-label="Username"
          />
          <FaUser
            className="absolute cursor-pointer top-[27%] fill-teal-800 left-[50%] signupTable:hidden"
            aria-hidden="true"
          />

          <FormInput
            onChange={(e) => setData({ ...data, email: e.target.value })}
            id="emailInput"
            type="email"
            placeholder="Email"
            required
            aria-label="Email"
          />
          <MdEmail
            className="cursor-pointer fill-teal-800 absolute top-[37%] left-[50%] signupTable:hidden"
            aria-hidden="true"
          />

          <PasswordContainer>
            <FormInput
              onChange={(e) => setData({ ...data, password: e.target.value })}
              id="PasswordInput"
              type={passwordType}
              placeholder="Password"
              aria-label="Password"
            />

            {passwordType === "password" ? (
              <BiSolidHide
                onClick={handleclick}
                className="fill-teal-800 text-xl absolute top-[35%] right-[18%] transform translate-y-[-50%] cursor-pointer"
              />
            ) : (
              <BiSolidShow
                onClick={handleclick}
                className="fill-teal-800 text-xl absolute top-[35%] right-[18%] transform translate-y-[-50%] cursor-pointer"
              />
            )}
          </PasswordContainer>
          <MdPassword className="absolute fill-teal-800 top-[59%] left-[50%] signupTable:hidden" />

          <PasswordContainer>
            <FormInput
              onChange={(e) =>
                setData({ ...data, confirmpassword: e.target.value })
              }
              id="PasswordInput"
              type={passwordConfirmType}
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
            {passwordConfirmType === "password" ? (
              <BiSolidHide
                onClick={Confirmhandleclick}
                className="fill-teal-800 text-xl absolute top-[35%] right-[18%] transform translate-y-[-50%] cursor-pointer"
              />
            ) : (
              <BiSolidShow
                onClick={Confirmhandleclick}
                className="fill-teal-800 text-xl absolute top-[35%] right-[18%] transform translate-y-[-50%] cursor-pointer"
              />
            )}
          </PasswordContainer>
          <MdPassword className="absolute fill-teal-800 top-[69%] left-[50%] signupTable:hidden" />

          <Captcha message={setTrackState} trackState={trackState} />
          <SignUpButton
            type="submit"
            disabled={!trackState}
            style={{ cursor: `${trackState ? "pointer" : "not-allowed"}` }}
            className="mb-2 transition-all duration-300 ease-in-out"
            aria-label="Sign Up"
          >
            Sign Up
          </SignUpButton>

          {invalid && showInvalid()}
          <label
            style={{ fontSize: "14px", color: "green", textAlign: "center" }}
          >
            Already have an account!
          </label>
          <NavLink
            to="/signin"
            style={{
              fontSize: "14px",
              marginTop: "-20px",
              marginLeft: "240px",
            }}
          >
            Signin
          </NavLink>
        </SignUpForm>
      </SignUpContainer>
    </FormContainer>
  );
};

export default SignUp;
