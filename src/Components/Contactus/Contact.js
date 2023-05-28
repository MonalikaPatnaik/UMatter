import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    
  <div class="form-container">
    <h2>Contact Us</h2>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"/>
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"/>
      </div>
      
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea>
      </div>
      
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>


  );
};

export default Contact;
