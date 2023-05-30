import React, { useState } from 'react';
import {
  Container,
  Icons,
  FormButton,
  FormContent,
  Form,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
} from './SignupElements';
import Navbar from '../Navbar';

const SignUp = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [data, setData] = useState({});

  const handleclick = (e) => {
    e.preventDefault();
    if (passwordType === 'text') {
      setPasswordType('password');
    } else {
      setPasswordType('text');
    }
  };

  const validateEmail = (email) => {
    // Basic email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password validation: at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const { email, username, name, contactNumber, password } = data;

    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!username) {
      alert('Please enter a username.');
      return;
    }

    if (!name) {
      alert('Please enter your full name.');
      return;
    }

    if (!contactNumber) {
      alert('Please enter a contact number.');
      return;
    }

    if (!password || !validatePassword(password)) {
      alert(
        'Please enter a password with at least 8 characters including one uppercase letter, one lowercase letter, and one digit.'
      );
      return;
    }

    // All form inputs are valid, submit the form
    sendPostRequest();
  };

  const sendPostRequest = async (e) => {
		console.log('sendPostRequest exicuted!!!');
		const response = await fetch('http://localhost:8081/SignUp', {
			mode: 'cors',
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log(response);
		const result = await response.json();
		console.log(result);
	};

  return (
    <>
      <Container>
        <Navbar />
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit} action="../pages/index.js">
              <FormH1>Sign up your account</FormH1>

              <FormInput
                onChange={(e) => setData({ ...data, email: e.target.value })}
                id="emailInput"
                placeholder="email@example.com"
                type="email"
                required
              />

              
              <FormInput
                onChange={(e) => setData({ ...data, username: e.target.value })}
                id="usernameInput"
                placeholder="Enter Username"
                type="text"
                required
              />

              
              <FormInput
                onChange={(e) => setData({ ...data, name: e.target.value })}
                id="FullNameInput"
                placeholder="Enter your Full Name"
                type="text"
                required
              />

              
              <FormInput
                onChange={(e) =>
                  setData({ ...data, contactNumber: e.target.value })
                }
                id="ContactNumber"
                placeholder="Enter phone number"
                type="tel"
                required
              />

             
              <div style={{ position: 'relative' }}>
                <FormInput
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  id="PasswordInput"
                  placeholder="Enter Password"
                  type={passwordType}
                  required
                />
                {passwordType === 'password' ? (
                  <i
                    className="fa-solid fa-eye-slash"
                    id="eye"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                    onClick={handleclick}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-eye"
                    id="eye"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                    onClick={handleclick}
                  ></i>
                )}
              </div>

              
              <div style={{ position: 'relative' }}>
                <FormInput
                  id="ConfirmPasswordInput"
                  placeholder="Re Enter Password"
                  type={passwordType}
                  required
                />
                {passwordType === 'password' ? (
                  <i
                    className="fa-solid fa-eye-slash"
                    id="eye"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                    onClick={handleclick}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-eye"
                    id="eye"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                    onClick={handleclick}
                  ></i>
                )}
              </div>

              <button
								onClick={handleclick}
								style={{
									width: 'fit-content',
									position: 'absolute',
									right: '38rem',
									bottom: '17rem',
									background: 'transparent',
									border: 'none',
								}}
							></button>
							<FormButton type="submit">Continue</FormButton>
							<Text>Forgot password?</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};

export default SignUp;

            

