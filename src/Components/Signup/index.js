/** @format */

import React from 'react';
import {
	Container,
	Icons,
	FormButton,
	FormContent,
	Form,
	FormH1,
	FormInput,
	FormWrap,
	Text,
} from './SignupElements';
import { useState } from 'react';
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password validation: at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return passwordRegex.test(password);
  };
  const validateusername =  (username) => {
    // username  should contains only alphabets
    const usernameRegex = /[A-Za-z]{3}/;
    return usernameRegex.test(username);
  };

  const validatename =  (name) => {
    // name  should contains only alphabets
    const nameRegex = /[A-Za-z]{3}/;
    return nameRegex.test(name);
  };
  const validatecontactNumber =  (contactNumber) => {
    // name  should contains only alphabets
    const contactNumberRegex = /^\d{10}$/;
    return contactNumberRegex.test(contactNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const { email, username, name, contactNumber, password,confirmpassword} = data;

    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!username || !validateusername(username)) {
      alert('Please enter a username(contains only alphabets).');
      return;
    }

    if (!name  || !validatename(name)) {
      alert('Please enter your full name.');
      return;
    }

    if (!contactNumber || !validatecontactNumber(contactNumber)) {
      alert('Please enter a contact number/verify once');
      return;
    }

    if (!password || !validatePassword(password)) {
      alert(
        'Please enter a password with at least 8 characters including one uppercase letter, one lowercase letter, and one digit.'
      );
      return;
    }
    if (password !== confirmpassword) {
      alert('Passwords do not match.');
      return;
    }
    
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
						<Form onSubmit={handleSubmit} action="#">
							<FormH1>Create an Account</FormH1>

							<FormInput
								onChange={(e) =>
									setData({ ...data, name: e.target.value })
								}
								id="FullNameInput"
								placeholder="Enter your Full Name"
								type="text"
							></FormInput>
							<br />


							<FormInput
								onChange={(e) =>
									setData({ ...data, username: e.target.value })
								}
								id="usernameInput"
								placeholder="Enter Username"
								type="text"
							></FormInput>
							<br />

							<FormInput
								onChange={(e) =>
									setData({ ...data, email: e.target.value })
								}
								id="emailInput"
								placeholder="email@example.com"
								type="email"
								require
							/>
							<br />

							<FormInput
								onChange={(e) =>
									setData({ ...data, contactNumber: e.target.value })
								}
								id="ContactNumber"
								placeholder="Enter phone number"
								type="number"
							></FormInput>
							<br />




							<div style={{ position: 'relative' }}>
								<FormInput
									onChange={(e) =>
										setData({ ...data, password: e.target.value })
									}
									id="PasswordInput"
									placeholder="Enter Password"
									type={passwordType}
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
							<br />

							<div style={{ position: 'relative' }}>
								<FormInput
									onChange={(e) =>
										setData({ ...data, confirmpassword: e.target.value })
									}
									id="PasswordInput"
									placeholder="Re Enter Password"
									type={passwordType}
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
									bottom: '20rem',
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
              
