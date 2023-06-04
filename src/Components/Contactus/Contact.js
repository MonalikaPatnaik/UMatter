import { React, useState } from "react";

import "./Contact.css";

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
    <div class="form-container">
      <img src="src/images/phone-3d.svg" alt="Phone" />
      <h2>Contact Us</h2>
      <hr class="top-line"></hr>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input type="text" id="name" class="form-control" name="name" required placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </div>

        <div class="form-group">
          <input type="email" id="email" class="form-control" name="email" required placeholder="Email" onChange={(e) => setMail(e.target.value)} />
        </div>

        <div class="form-group">
          <textarea id="message" class="form-control" name="message" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>


  );
};

export default Contact;
