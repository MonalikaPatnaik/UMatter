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
  FormTextarea,
  FormLabel,
  FormWrap,
  Container,
  SuccessMessage,
  ErrorMessage,
} from "./FeedbackElements";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedback = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendPostRequest = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (data.username && data.feedback && data.feedback.trim() !== "") {
      try {
        const response = await fetch('https://umatter.onrender.com/feedback', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const result = await response.json();

        toast.success('Feedback Sent Successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeButton: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        // Clear form after successful submission
        setData({});
        e.target.reset();
      } catch (error) {
        toast.error('Failed to send feedback. Please try again.', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeButton: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.warn('All fields are required!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: 'toast-warn'
      });
    }

    setIsSubmitting(false);
  };

  return (
    <>      
      <Container>
        <ToastContainer />
        <FormWrap>
          <FormContent>
            <Form onSubmit={sendPostRequest}>
              <FormH1>Share Your Feedback</FormH1>
              
              <div>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                  aria-label="Enter your username"
                  onChange={e => setData({ ...data, username: e.target.value })}
                  placeholder="Enter your username" 
                  type="text" 
                  id="username"
                  required 
                />
              </div>

              <div>
                <FormLabel htmlFor="feedback">Feedback</FormLabel>
                <FormTextarea
                  aria-label="Share your experience or feedback with us"
                  onChange={e => setData({ ...data, feedback: e.target.value })}
                  placeholder="Share your experience/feedback with us :)"
                  id="feedback"
                  required
                  rows="5"
                />
              </div>

              <FormButton 
                type="submit" 
                disabled={isSubmitting}
                style={{ 
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Feedback;