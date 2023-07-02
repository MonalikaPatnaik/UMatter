import React,{useState} from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Consult_With_Doctor = () =>{
    
    return(
        <>
            
  <section class="hero">
    <div class="hero-content">
      <h2 class="hero-heading">Consult with Professional Doctors and Therapists</h2>
      <p class="hero-text">Take a step towards a healthier life with personalized consultations and expert guidance.</p>
      <a href="#/consultwithdoctor/consultationform" class="btn-schedule">Schedule a Consultation</a>
    </div>
  </section>


{/* <!-- Section 2 --> */}
  
<section class="doctor-profiles">
    <h1 class = "heading_drProfile">Doctor/Therapist Profiles</h1>
    <div class="slider">
      <div class="slide">
        <div class="profile">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8%26pid%3DApi&f=1&ipt=4a6774ed4bdb66d5eca987bf5158b1ceae8ca2d42bed1033190dc8f621369b04&ipo=images" alt="Doctor Profile"/>
          <h3 class="name">Dr. John Doe</h3>
          <p class="qualification">MBBS, MD</p>
          <p class="specialization">Cardiologist</p>
          <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lectus vitae enim lobortis ultrices.</p>
          <a href="#" class="btn">View Profile</a>
          <a href="#" class="btn btn-secondary">Schedule Consultation</a>
        </div>
      </div>
      {/* <!-- Add more slides for other doctor profiles --> */}
      <div class="slide">
        <div class="profile">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8%26pid%3DApi&f=1&ipt=4a6774ed4bdb66d5eca987bf5158b1ceae8ca2d42bed1033190dc8f621369b04&ipo=images" alt="Doctor Profile"/>
          <h3 class="name">Dr. John Doe</h3>
          <p class="qualification">MBBS, MD</p>
          <p class="specialization">Cardiologist</p>
          <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lectus vitae enim lobortis ultrices.</p>
          <a href="#" class="btn">View Profile</a>
          <a href="#" class="btn btn-secondary">Schedule Consultation</a>
        </div>
      </div>

      <div class="slide">
        <div class="profile">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8%26pid%3DApi&f=1&ipt=4a6774ed4bdb66d5eca987bf5158b1ceae8ca2d42bed1033190dc8f621369b04&ipo=images" alt="Doctor Profile"/>
          <h3 class="name">Dr. John Doe</h3>
          <p class="qualification">MBBS, MD</p>
          <p class="specialization">Cardiologist</p>
          <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lectus vitae enim lobortis ultrices.</p>
          <a href="#" class="btn">View Profile</a>
          <a href="#" class="btn btn-secondary">Schedule Consultation</a>
        </div>
      </div>

      <div class="slide">
        <div class="profile">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8%26pid%3DApi&f=1&ipt=4a6774ed4bdb66d5eca987bf5158b1ceae8ca2d42bed1033190dc8f621369b04&ipo=images" alt="Doctor Profile"/>
          <h3 class="name">Dr. John Doe</h3>
          <p class="qualification">MBBS, MD</p>
          <p class="specialization">Cardiologist</p>
          <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lectus vitae enim lobortis ultrices.</p>
          <a href="#" class="btn">View Profile</a>
          <a href="#" class="btn btn-secondary">Schedule Consultation</a>
        </div>
      </div>
      

      <div class="slide">
        <div class="profile">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8%26pid%3DApi&f=1&ipt=4a6774ed4bdb66d5eca987bf5158b1ceae8ca2d42bed1033190dc8f621369b04&ipo=images" alt="Doctor Profile"/>
          <h3 class="name">Dr. John Doe</h3>
          <p class="qualification">MBBS, MD</p>
          <p class="specialization">Cardiologist</p>
          <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lectus vitae enim lobortis ultrices.</p>
          <a href="#" class="btn">View Profile</a>
          <a href="#" class="btn btn-secondary">Schedule Consultation</a>
        </div>
      </div>
      
      <div class="slide">
        <div class="profile">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8%26pid%3DApi&f=1&ipt=4a6774ed4bdb66d5eca987bf5158b1ceae8ca2d42bed1033190dc8f621369b04&ipo=images" alt="Doctor Profile"/>
          <h3 class="name">Dr. John Doe</h3>
          <p class="qualification">MBBS, MD</p>
          <p class="specialization">Cardiologist</p>
          <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lectus vitae enim lobortis ultrices.</p>
          <a href="#" class="btn">View Profile</a>
          <a href="#" class="btn btn-secondary">Schedule Consultation</a>
        </div>
      </div>
    </div>
  </section>

  {/* section 3  */}

  <section class="consultation-process">
    <div class="container">
      <h2 class="section-heading">Consultation Process</h2>
      <div class="process-steps">
        <div class="step">
          <span class="step-number">1</span>
          <h3 class="step-heading">Schedule a Consultation</h3>
          <p class="step-description">Choose a convenient time and date for your consultation through our online booking system.</p>
        </div>
        <div class="step">
          <span class="step-number">2</span>
          <h3 class="step-heading">Communication Channels</h3>
          <p class="step-description">We offer various communication channels, including video calls, chat-based communication, and phone calls, to suit your preferences.</p>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <h3 class="step-heading">Personalized Consultations</h3>
          <p class="step-description">Our professional doctors and therapists provide personalized consultations tailored to your specific needs and goals.</p>
        </div>
        <div class="step">
          <span class="step-number">4</span>
          <h3 class="step-heading">Privacy and Confidentiality</h3>
          <p class="step-description">We prioritize your privacy and confidentiality, ensuring secure and encrypted communication during consultations.</p>
        </div>
      </div>
    </div>
  </section>
        </>
    );
}


export default Consult_With_Doctor;