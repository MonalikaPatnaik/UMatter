import { React, useState } from "react";
import "./Contact.css";

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

      
          setsuccess("Contact Request Sent Successfully!!");
          seterror('');
          setName('');
          setMail('');
          setMessage('');
      
          await fetch('http://localhost:3000/mail', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(mailData)
          })
          
         // alert("Contact Request Sent Successfully")
   
    }
  
  }



  return (

    <div class="form-container">
      <h2>Contact Us</h2>
      <hr></hr>
      <div><p className="text-lg font-normal text-green-600 my-2">{success}</p></div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name"   value={name} onChange={(e) => setName(e.target.value)} 
           className={`${error==='nameerr'?"inputError": name!==''?"successError":""}`}
          />
          {
                error === 'nameerr' && (
                  <small className='text-red-600 text-lg'>*Name is Required!</small>
                ) 
              }
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email"   value={mail} onChange={(e) => setMail(e.target.value)}
          className={`${error==='emailerr' || error==='validerr'?"inputError": mail!==''?"successError":""}`}
          />
          {
                error === 'emailerr' && (
                  <small className='text-red-600 text-lg'>*E-mail is Required!</small>
                ) 
              }
              {
                error === 'validerr' && (
                  <small className='text-red-600 text-lg'>*Valid E-mail is Required!</small>
                ) 
              }
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message"  value={message} onChange={(e) => setMessage(e.target.value)}
          className={`${error==='messageerr'?"inputError": message!==''?"successError":""}`}
          ></textarea>
          {
                error === 'messageerr' && (
                  <small className='text-red-600 text-lg'>*Message is Required!</small>
                ) 
              }
        </div>

        <div>
          <button onClick={handleSubmit} type="submit">Submit</button>
        </div>
      </form>
    </div>


  );
};

export default Contact;
