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
	FormLabel,
	FormWrap,
	Text,

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
						<Form onSubmit={sendPostRequest} action="#">
							<FormH1>Sign up your account</FormH1>

							<FormLabel htmlFor="emailInput">Email</FormLabel>
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

							<FormLabel htmlFor="usernameInput">username</FormLabel>
							<FormInput
								onChange={(e) =>
									setData({ ...data, username: e.target.value })
								}
								id="usernameInput"
								placeholder="Enter Username"
								type="text"
							></FormInput>
							<br />

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

  const sendPostRequest = async (e) => {
    console.log("sendPostRequest exicuted!!!");
    const response = await fetch('http://localhost:8081/SignUp', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
  }

  return (
    <>
    
      <Container>
      <Navbar />
        <FormWrap>
          
          <FormContent>
            <Form onSubmit={sendPostRequest} action="#">
              <FormH1>Create An Account</FormH1>

              
              <FormInput
                onChange={e => setData({ ...data, email: e.target.value })}
                id="emailInput"
                placeholder="Email"
                type="email"
                require /><br/>

              
              <FormInput
                onChange={e => setData({ ...data, username: e.target.value })}
                id="usernameInput"
                placeholder="Enter Username"
                type="text"></FormInput><br/>

              
              <FormInput
                onChange={e => setData({ ...data, name: e.target.value })}
                id="FullNameInput"
                placeholder="Enter your Full Name"
                type="text"></FormInput><br/>

              
              <FormInput
                onChange={e => setData({ ...data, contactNumber: e.target.value })}
                id="ContactNumber"
                placeholder="Enter phone number"
                type="number"></FormInput><br/>


							<FormLabel>Full Name</FormLabel>
							<FormInput
								onChange={(e) =>
									setData({ ...data, name: e.target.value })
								}
								id="FullNameInput"
								placeholder="Enter your Full Name"
								type="text"
							></FormInput>
							<br />

							<FormLabel htmlFor="ContactNumber">
								Contact Number
							</FormLabel>
							<FormInput
								onChange={(e) =>
									setData({ ...data, contactNumber: e.target.value })
								}
								id="ContactNumber"
								placeholder="enter phone number"
								type="number"
							></FormInput>
							<br />


<div style={{ position: 'relative' }}>
  <FormInput
    onChange={(e) => setData({ ...data, password1: e.target.value })}
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
        color:'white',
        top: '50%',
        right: '150px',
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
        color:'white',
        top: '50%',
        right: '150px',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
      }}
      onClick={handleclick}
    ></i>
  )}

</div><br/>

<div style={{ position: 'relative' }}>
  <FormInput
    onChange={(e) => setData({ ...data, password1: e.target.value })}
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
        color:'white',
        top: '50%',
        right: '150px',
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
        color:'white',
        top: '50%',
        right: '150px',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
      }}
      onClick={handleclick}
    ></i>
  )}
</div>


							<FormLabel htmlFor="PasswordInput">Password</FormLabel>
							<div style={{ position: 'relative' }}>
								<FormInput
									onChange={(e) =>
										setData({ ...data, password1: e.target.value })
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
							<FormLabel htmlFor="PasswordInput">
								Confirm Password
							</FormLabel>
							<div style={{ position: 'relative' }}>
								<FormInput
									onChange={(e) =>
										setData({ ...data, password1: e.target.value })
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

              </button>
              <FormButton type="submit">Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
