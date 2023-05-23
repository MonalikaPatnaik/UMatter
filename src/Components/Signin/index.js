import React, { useState } from 'react'
import { Container, Icons, FormButton, FormContent, Form, FormH1, FormInput, FormLabel, FormWrap } from './SigninElements';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../Firebase'
import { useNavigate } from 'react-router-dom'


const SignIn = () => {

  const signup_styling = 
  `
  text-balck rounded-sm transition duration-200 ease-linear cursor-pointer px-4 py-2 bg-[#07BB70] hover:bg-[white]  hover:border-[#07BB70]
  `

  const navigate = useNavigate()
  const [setLogInData] = useState('login')
  const [ setLogIn] = useState(false)
  async function handleAuth() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const userDetails = {
        name: user.displayName,
        email: user.email
      }
      await setDoc(doc(db, 'users', user.uid), userDetails)
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setLogInData(user.displayName)
        setLogIn(true)
      }
      else {
        alert('no user')
      }
      navigate('/UMatter')
    } catch (error) {
      alert(error)
    }
  }

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
              <div className=' flex justify-around items-center mt-[1rem]'>

                <p className={signup_styling} onClick={handleAuth}>Sign up</p>

                <p className='text-white cursor-pointer px-4 py-2 hover:bg-red-600 transition ease-linear duration-150' >forgot password</p>
              </div>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn;