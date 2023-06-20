import { React, useState } from "react";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailData = {
      name,
      mail,
      message,
    };

    await fetch("http://localhost:8081/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailData),
    });

    alert("Contact Request Sent Successfully");
  };

  return (
    <div class="form-container">
      <h2>Contact Us</h2>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            onChange={(e) => setMail(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
