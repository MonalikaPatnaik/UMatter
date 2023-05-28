/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';

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

const Feedback = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({});

    const sendPostRequest = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8081/feedback', { // Update the endpoint URL here
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Handle the response from the backend
        const result = await response.json();
        // Perform any necessary actions based on the response
        console.log(result); // Example: Log the response
    };

    return (
        <>
            <br />

            <Container>

            <FormWrap>
                <FormContent>
                    <Form onSubmit={sendPostRequest} action="#">
                        <FormH1>Share your Feddback</FormH1>
                        <FormLabel htmlFor="username">username</FormLabel>
                        <FormInput
                            onChange={e => setData({ ...data, username: e.target.value })}
                            placeholder="Enter your username" type="text" id="username"
                            require />
                        <FormLabel htmlFor="feedback">Feedback</FormLabel>
                        <FormInput
                            onChange={e => setData({ ...data, feedback: e.target.value })}
                            placeholder="Share your experience/feedback with us :)"
                            type="text" id="feedback"
                            require
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