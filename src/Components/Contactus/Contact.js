import { React, useState } from "react";
import "./Contact.css";
import phone3d from "../../images/phone-3d.svg"

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
    <div>
    <img src={phone3d} alt="Error-404" className="error-404-img" class="phone-3d"/>
    <div class="form-container">
      <h2>Contact Us</h2>
      <hr class="top-line"></hr>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input type="text" id="name" class="form-control" name="name" required placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <hr class="underline"></hr>
        <div class="form-group">
          <input type="email" id="email" class="form-control" name="email" required placeholder="Email" onChange={(e) => setMail(e.target.value)} />
        </div>
        <hr class="underline"></hr>
        <div class="form-group">
          <textarea id="message" class="form-control" name="message" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <hr class="underline"></hr>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>

  );
};

export default Contact;
