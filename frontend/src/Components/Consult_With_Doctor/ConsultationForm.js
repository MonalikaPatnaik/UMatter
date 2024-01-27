import React from 'react';
import './form.css';
import Footer from '../Footer';



const ConsultationForm = () =>{
    return(
        <>
        
            <section class="appointment-section">
        <div class="container">
          <h2 class="section-heading">Make an Appointment</h2>
          <form class="appointment-form" action="appointment-submit.php" method="POST">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" required aria-label="Your Name"/>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required aria-label="Email Address"/>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required aria-label="Phone Number"/>
            </div>
            <div class="form-group">
              <label for="date">Preferred Date</label>
              <input type="date" id="date" name="date" required aria-label="Preferred Date"/>
            </div>
            <div class="form-group">
              <label for="time">Preferred Time</label>
              <input type="time" id="time" name="time" required aria-label="Preferred Time"/>
            </div>
            <div class="form-group">
              <label for="message">Message (Optional)</label>
              <textarea id="message" name="message" rows="5" aria-label="Message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit Appointment</button>
          </form>
        </div>
      </section>
      <Footer />
  
        </>
    );
}


export default ConsultationForm;