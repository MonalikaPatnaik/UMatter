/** @format */

import { React, useState } from "react";
import "./Contact.css";
import Contact_Image from "../../images/contact_image.webp"
const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [error, seterror] = useState('');
  const [success, setsuccess] = useState('');

  function validEmail(email) {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) return true;
    else return false;
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("called");

    setsuccess('');

    if(name === '')
    { seterror("nameerr");}
  
    else if(mail === '')
    { seterror("emailerr");}

    else if(!validEmail(mail))
    { seterror("validerr");}
   
    else if(message === '')
    {seterror("messageerr");}

    else
    {
          const mailData = {
            name,
            mail,
            message,
          };
      
          await fetch('https://umatter.onrender.com/mail', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(mailData)
          })
          
          setsuccess("Contact Request Sent Successfully!!");
          seterror('');
          setName('');
          setMail('');
          setMessage('');
         // alert("Contact Request Sent Successfully")
   
    }
  
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
      <div><p className="text-lg font-normal text-green-600 my-2">{success}</p></div>
      <form onSubmit={handleSubmit} aria-label="Contact Form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" value={name}
          onChange={(e) => setName(e.target.value)} className={`${error==='nameerr'?"inputError": name!==''?"successError":""}`} 
          aria-invalid={error === 'nameerr'}
          aria-describedby={error === 'nameerr' ? "name-error" : ""}
          />
           {
                error === 'nameerr' && (
                  <small className='text-red-600 text-lg' role="alert">*Name is Required!</small>
                ) 
              }
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" value={mail}
          onChange={(e) => setMail(e.target.value)}  className={`${error==='emailerr' || error==='validerr'?"inputError": mail!==''?"successError":""}`} 
          aria-invalid={error === 'emailerr' || error === 'validerr'}
          aria-describedby={error === 'emailerr' ? "email-error" : error === 'validerr' ? "valid-error" : ""}
          />
           {
                error === 'emailerr' && (
                  <small className='text-red-600 text-lg' role="alert">*E-mail is Required!</small>
                ) 
              }
              {
                error === 'validerr' && (
                  <small className='text-red-600 text-lg' role="alert">*Valid E-mail is Required!</small>
                ) 
              }
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message" value={message}
          onChange={(e) => setMessage(e.target.value)}  className={`${error==='messageerr'?"inputError": message!==''?"successError":""}`}
          aria-invalid={error === 'messageerr'}
          aria-describedby={error === 'messageerr' ? "message-error" : ""}
          ></textarea>
          {
                error === 'messageerr' && (
                  <small className='text-red-600 text-lg' role="alert">*Message is Required!</small>
                ) 
              }
        </div>

        <div className="btn-container">
          <button onClick={handleSubmit} className="form-button" type="submit">Submit</button>
        </div>
      </form>
    </div>

    </div>
    </div>


  );
};

export default Contact;
