/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import "./Toast.css"

import {
  FormButton,
  FormContent,
  Form,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Container,
} from "./FeedbackElements";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Feedback = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});


    const sendPostRequest = async (e) => {
        e.preventDefault();

        if (data.username && data.feedback != "") {

            const response = await fetch('https://umatter.onrender.com/feedback', { // Update the endpoint URL here
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Handle the response from the backend
            const result = await response.json();

            toast.success('Feedback Sent!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeButton: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        else {
            toast.warn('All Fields are required !', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeButton: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                className: 'toast-warn'
            });

        }


    };

    return (
        <>      
            <Container>
                <ToastContainer />
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={sendPostRequest} action="#">
                            <FormH1>Share your Feedback</FormH1>
                            <FormLabel htmlFor="username">username</FormLabel>
                            <FormInput
                                aria-label="Enter your username"
                                onChange={e => setData({ ...data, username: e.target.value })}
                                placeholder="Enter your username" type="text" id="username"
                                required />
                            <FormLabel htmlFor="feedback">Feedback</FormLabel>
                            <FormInput
                                aria-label="Share your experience or feedback with us"
                                onChange={e => setData({ ...data, feedback: e.target.value })}
                                placeholder="Share your experience/feedback with us :)"
                                type="text" id="feedback"
                                required
                            />
                            <FormButton type="submit">Send</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>

            </Container>
        </>
    );
};

export default Feedback;


