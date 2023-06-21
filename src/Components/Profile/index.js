/** @format */

import React from 'react';
import {
  Container,
  Icons,
  FormButton,
  FormContent,
  OuterDiv,
  FormWrap,
  Text,
} from './profileElements';
import { useState } from 'react';

sessionStorage.setItem("authorizationToken", undefined);
sessionStorage.setItem("username", undefined);

const ProfilePage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const authorizationToken = sessionStorage.getItem("authorizationToken");
 const username = sessionStorage.getItem("username");
  const sendFetchRequest = async () => {
    try {
        // console.log(authorizationToken);
        const options = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            Authorization:authorizationToken,
            },
            };
      const response = await fetch(`http://localhost:8081/profile/${username}/`, options);
      const data = response.json();
      if(data.message === undefined){
        // setIsSignedIn(true); 
        this.setState({
            isSignedIn:true 
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  sendFetchRequest(); 

   const logoutFunction = () => {
    console.log("logout butten clicked");
    sessionStorage.clear();
    sessionStorage.setItem("authorizationToken", undefined);
    sessionStorage.setItem("username", undefined);
    setIsSignedIn(false);
  }

    return (
        <>
          <Container>
            <FormWrap>
              <div>
              <Icons to="/UMatter">UMatter</Icons>  
              </div>
              <FormContent>
                {!isSignedIn && (<OuterDiv>
                    <Text>you are not signed in</Text>
                </OuterDiv>)}
                {isSignedIn && (<OuterDiv>
                    <Text>you are signed In</Text>
                    <div>
                        <h1>username is ${username}</h1>
                    </div>
                    <div>
                        <FormButton onClick={logoutFunction}>Logout</FormButton>
                    </div>
                </OuterDiv>)}
              </FormContent>
            </FormWrap>
          </Container>
        </>
      );

};

export default ProfilePage;