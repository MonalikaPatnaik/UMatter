/** @format */

import { React, useState } from "react";
import "./Contact.css";
import Contact_Image from "../../images/contact_image.png"
const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();

    const mailData = {
      name,
      mail,
      message,
    };

    await fetch('http://localhost:8081/mail', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mailData)
    })
    
    alert("Contact Request Sent Successfully")
 
  }

  return (


    <div className="container">

      <div className="contact-container">

      <div className="left-container">
        <h2 className="left-heading">Feel Free to Contact Us</h2>
        <img src={Contact_Image}  />
      </div>

    <div className="form-container">
      <h2>Contact Us</h2>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" onChange={(e) => setMail(e.target.value)} />
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>

        <div className="btn-container">
          <button className="form-button" type="submit">Submit</button>
        </div>
      </form>
    </div>

    </div>
    </div>


  );
};

export default Contact;
