import './styles.css';
import React from 'react';
import Footer from '../Footer';
import WorkshopImg from "../../images/WorkshopImg.webp";


const Workshops = () => {
  return (
    <>
    <div className='full_page'>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to UMatter Workshops</h1>
          <p>Unlock your potential and transform your life with our empowering workshops.</p>
        </div>
      </section>

<div className='workshops_seection'>
      <h2 className='h-workshops'>All Workshops</h2>
      <section className="workshop-descriptions">
        <div className="workshop">
          <h3 className="workshop-title">Breaking the Habit: A Journey to Sobriety</h3>
          <p className="workshop-info">
            Join this transformative workshop led by experts in addiction recovery. Learn effective strategies, techniques, and coping mechanisms to break free from the chains of alcohol and smoking addiction. Through engaging discussions, interactive activities, and personalized guidance, you'll gain the tools and support needed to embark on a journey towards a healthier, addiction-free life.
          </p>
        </div>

        <div className="workshop">
          <h3 className="workshop-title">Mindfulness and Addiction: Finding Inner Balance</h3>
          <p className="workshop-info">
            In this workshop, explore the powerful practice of mindfulness and its role in overcoming addictive behaviors. Through guided meditation, mindful awareness exercises, and expert-led discussions, you'll develop a deeper understanding of your triggers, cravings, and thought patterns. Discover how to cultivate self-compassion, manage stress, and make conscious choices that lead to lasting change. Join us on this empowering journey towards inner balance and liberation from addiction.
          </p>
        </div>

        <div className="workshop">
          <h3 className="workshop-title">Building Stronger Support Networks</h3>
          <p className="workshop-info">
            Breaking free from addiction is easier with a strong support network by your side. Join this workshop to learn how to cultivate and nurture a network of individuals who understand your struggles and can provide the support you need. Explore effective communication strategies, boundary setting, and healthy relationship dynamics. Through group activities, role-playing exercises, and practical advice, you'll gain valuable insights into building meaningful connections that contribute to your journey of overcoming drinking and smoking habits.
          </p>
        </div>
      </section>
</div>
      <section className="workshop-schedule">
        <h2 className="heading-workshop-schedule">Workshop Schedule</h2>
        <div className="schedule-table">
          <div className="schedule-header">
            <div>Date</div>
            <div>Time</div>
            <div>Duration</div>
            <div>Workshop Title</div>
          </div>
          <div className="schedule-row">
            <div>June 28, 2023</div>
            <div>10:00 AM - 12:00 PM</div>
            <div>2 hours</div>
            <div>Workshop Title 1</div>
          </div>
          <div className="schedule-row">
            <div>July 5, 2023</div>
            <div>2:00 PM - 4:00 PM</div>
            <div>2 hours</div>
            <div>Workshop Title 2</div>
          </div>
          {/* Add more schedule rows as needed */}
        </div>
      </section>


      <section className="appointment-section">
      
        <div className="container">
          <h2 className="section-heading">Join Workshop</h2>
          
          <div className='form_section'>
          <div className='workshopImg'>
         
      </div>
      <div>
          <form className="appointment-form" action="appointment-submit.php" method="POST">
          <div>
          <img  src={WorkshopImg} />
          </div>
          <div className='orignal_form'>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="select-workshop">Select Workshop</label>
              <select id="payment-method" name="payment-method" required>
                <option value="credit-card">Workshop 1</option>
                <option value="paypal">Workshop 2</option>
                <option value="bank-transfer">Workshop 3</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Join Workshop</button>
            </div>
          </form>
          </div>
        </div>
        </div>
      </section>
      </div>
      
      <Footer />
    </>
  );
}

export default Workshops;

