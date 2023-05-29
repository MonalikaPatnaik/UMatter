import React from 'react'
import Footer from '../Footer';
import { Container, Icons, FormButton, FormContent, Form, FormH1, FormInput, FormLabel, FormWrap, Text } from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icons to="/">UMatter</Icons>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' require />
              <FormLabel htmlFor='for'>PassWord</FormLabel>
              <FormInput type='password' require />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password?</Text>
            </Form>

          </FormContent>
          <Footer />
        </FormWrap>

      </Container>

    </>
  )
}

export default SignIn;