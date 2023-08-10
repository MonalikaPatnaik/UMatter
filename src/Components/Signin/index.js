/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
// import DarkMode from '../DarkMode/DarkMode';
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth, provider } from "../../firebase-config";
import SignInImg from "../../images/SignIn.webp";
import {
  CheckBox,
  ForgotPassword,
  FormContainer,
  Image
  // Icons,
  // FormButton,
  // FormContent,
  // Form,
  // FormH1,
  // SignInInput,
  // FormLabel,
  // FormWrap,
  // Text,
  ,




































































































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
    navigate("/profile");
  };

  const sendPostRequest = async (e) => {
    if (data.password && data.password.length < 8) {
      setInvalid(true);
    }
    console.log("sendPostRequest is called!!!");
    e.preventDefault();
    const response = await fetch("https://umatter.onrender.com/SignIn", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) {
      setInvalid(true);
    }
    const result = await response.json();
    sessionStorage.removeItem("authorizationToken");
    sessionStorage.removeItem("username");
    const { jwtToken, username } = result;
    authorizationToken = "Bearer ".concat(jwtToken.toString());
    sessionStorage.setItem("authorizationToken", authorizationToken);
    sessionStorage.setItem("username", username);
    navigateToProfile();
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
        Invalid Email or Password!
      </div>
    );
  };

  // Firebase google authentication
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      localStorage.setItem("authorizationToken", user.user.accessToken);
      localStorage.setItem("username", user.user.email);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    // <>
    // 	{/* <DarkMode/> */}
    // 	<Container>
    // 		{/* <Navbar  /> */}
    // 		<br />
    // 		{/* <DarkMode/> */}
    // 		<FormWrap>
    // 			<FormContent>
    // 				<Form onSubmit={sendPostRequest} action="#">
    // 					<FormH1>Sign in to your account</FormH1>
    // 					<FormLabel htmlFor="email">Email</FormLabel>
    // 					<SignInInput
    // 						onChange={(e) => setData({ ...data, email: e.target.value })}
    // 						placeholder="email@example.com"
    // 						type="email"
    // 						id="email"
    // 						require
    // 					/>
    // 					<FormLabel
    // 						htmlFor="password"
    // 						style={{
    // 							display: 'flex',
    // 							flexDirection: 'column',
    // 							position: 'relative',

    // 						}}
    // 					>
    // 						Password
    // 						<SignInInput
    // 						style={{
    // 							color:'black',
    // 						}}
    // 							onChange={(e) =>
    // 								setData({ ...data, password: e.target.value })
    // 							}
    // 							placeholder="Must have at least 8 characters"
    // 							type={passwordType}
    // 							id="password"
    // 							require
    // 						/>
    // 						<button
    // 							onClick={handleclick}
    // 							style={{
    // 								width: 'fit-content',
    // 								position: 'absolute',
    // 								right: '0%',
    // 								top: '20%',
    // 								background: 'transparent',
    // 								border: 'none',
    // 								color: 'green',
    // 							}}
    // 						>
    // 							{passwordType === 'password' ? (
    // 								<i class="fa-solid fa-eye-slash" id="eye"></i>
    // 							) : (
    // 								<i class="fa-solid fa-eye" id="eye"></i>
    // 							)}
    // 						</button>
    // 					</FormLabel>
    // 					<form
    // 						style={{
    // 							display: 'flex',
    // 							position: 'relative',
    // 							left: '35%',
    // 							width: 'fit-content',
    // 							bottom: '185%',
    // 							fontSize: 'medium',
    // 							color: 'white',
    // 						}}
    // 					>
    // 						<input type="checkbox" id="rememberMe" />
    // 						<br></br>
    // 						<label htmlFor="rememberMe">Remember me</label>
    // 					</form>
    // 					<FormButton type="submit">Continue</FormButton>
    // 					<br />
    // 					{invalid && showInvalid()}
    // 					<NavLink
    // 						to="/signin/forgotPassword"
    // 						style={{
    // 							textAlign: 'center',
    // 							color: 'white',
    // 							marginTop: '10px',
    // 							textDecoration: 'none',
    // 						}}
    // 					>
    // 						Forgot Password ?
    // 					</NavLink>
    // 				</Form>

    // 			</FormContent>
    // 		</FormWrap>
    // 	</Container>
    // </>

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
              require
            />
            <SignInLabel htmlFor="password">Password</SignInLabel>
            <PasswordContainer>
              <SignInInput
                onChange={(e) => setData({ ...data, password: e.target.value })}
                id="password"
                type={passwordType}
                placeholder="at least 8 characters"
                require
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
