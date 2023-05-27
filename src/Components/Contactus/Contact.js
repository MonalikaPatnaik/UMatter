import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission logic here

    // Set submitted state to true
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required placeholder="Enter your message"></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>

      {submitted && <p>Response: Submitted successfully!</p>}
    </div>
  );
};

export default Contact;
