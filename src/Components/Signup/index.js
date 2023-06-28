/** @format */
import React from "react";
import {
  Container,
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
  Image
} from "./SignupElements";
import { useState } from "react";
import SignUpImg from "../../images/SignUp.png";
// import DarkMode from "../DarkMode/DarkMode";
// import Navbar from "../Navbar";

const SignUp = () => {
  const [invalid, setInvalid] = useState(false);
  const [msg, setMsg] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setconfirmPasswordType] = useState("confirmpassword");
  const [data, setData] = useState({});
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
    if (confirmPasswordType === "text") {
      setconfirmPasswordType("password");
    } else {
      setconfirmPasswordType("text");
    }
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
  const validatecontactNumber = (contactNumber) => {
    // name  should contains only alphabets
    const contactNumberRegex = /^\d{10}$/;
    return contactNumberRegex.test(contactNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const { email, username, name, contactNumber, password, confirmpassword } =
      data;

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

    if (!contactNumber || !validatecontactNumber(contactNumber)) {
      setMsg("Please enter a contact number/verify once");
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

  const sendPostRequest = async (e) => {
    console.log("sendPostRequest exicuted!!!");
    const response = await fetch("http://localhost:8081/SignUp", {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
  };

  const showInvalid = () => {
    return (
      <div class="alert alert-danger" role="alert">
        {msg}
      </div>
    );
  };

  return (
   
    <Container>
      <FormContainer>
        <LeftContainer>
          <LeftHeading>Welcome!</LeftHeading>
          <LeftPara>
            Sign up to be a part of the community, because UMatter.
          </LeftPara>
          <Image src={SignUpImg} alt="Sign Up Graphic"/>
        </LeftContainer>
        <SignUpContainer>
          <SignUpForm onSubmit={handleSubmit} action="#">
            <SignUph1>Create account</SignUph1>
            <FormInput
              onChange={(e) => setData({ ...data, name: e.target.value })}
              id="FullNameInput"
              type="text"
              placeholder="Full Name"
            ></FormInput>
            <FormInput
              onChange={(e) => setData({ ...data, username: e.target.value })}
              id="usernameInput"
              type="text"
              placeholder="Username"
            ></FormInput>
            <FormInput
              onChange={(e) => setData({ ...data, email: e.target.value })}
              id="emailInput"
              type="email"
              placeholder="Email"
              require
            ></FormInput>
            <PhoneContainer>
              <FormInput
                onChange={(e) =>
                  setData({ ...data, countryCode: e.target.value })
                }
                id="CountryCode"
                type="text"
                placeholder="+XXX"
              ></FormInput>
              <FormInput
                onChange={(e) =>
                  setData({ ...data, contactNumber: e.target.value })
                }
                id="ContactNumber"
                type="text"
                placeholder="Phone Number"
                maxLength={10}
              ></FormInput>
            </PhoneContainer>
            <PasswordContainer>
              <FormInput
                onChange={(e) => setData({ ...data, password: e.target.value })}
                id="PasswordInput"
                type={passwordType}
                placeholder="Password"
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
                ></i>
              )}
            </PasswordContainer>
            <PasswordContainer>
              <FormInput
                onChange={(e) =>
                  setData({ ...data, confirmpassword: e.target.value })
                }
                id="PasswordInput"
                type={confirmPasswordType}
                placeholder="Confirm Password"
              />
              {confirmPasswordType === "password" ? (
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
                  onClick={Confirmhandleclick}
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
                  onClick={Confirmhandleclick}
                ></i>
              )}
            </PasswordContainer>
            <SignUpButton type="submit">Sign Up</SignUpButton>
			{invalid && showInvalid()}
          </SignUpForm>
        </SignUpContainer>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
