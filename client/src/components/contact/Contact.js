import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import './Contact1.css';
import image from './image3.webp';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ow25bik', 'template_41i4tlj', form.current, {
        publicKey: 'aLwHHxdvT8E2UcMOy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section>
 
  <div className="c-image" style={{ backgroundImage: "url('./image1.jpeg')" }}>
      <div className="c-image-overlay">
        <div className="c-center">
          <div className="c-one">
            <h1 className="c-text1">GET IN TOUCH</h1>
            <p className="c-text">
              Want to join? We would like to teach you!
            </p>
          </div>
          <div className="c-contact-info">
            <div className="c-card">
              <FontAwesomeIcon className="c-card-icon" icon={faEnvelope} />
              <p className="c-txt">dhronasilambam@gmail.com</p>
            </div>
            <div className="c-card">
              <FontAwesomeIcon className="c-card-icon" icon={faPhone} />
              <p className="c-txt">+91 8489307414</p>
            </div>
            <div className="c-card">
              <FontAwesomeIcon className="c-card-icon" icon={faMapMarkerAlt} />
              <p className="c-txt">95, Ellaiamman kovil street,<br />Kotturpuram,<br /> Chennai-600 095</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Your other sections go here */}
  
      <div className="c-container">
       
       <span className="c-big-circle"></span>
         <img src={image} className="c-square" alt="" />
         <div className="c-form">
           <div className="n-contact-info">
             <img src={image} name="contact" width="350px" height="450px" alt="Contact" />
           </div>
 
           <div className="c-contact-form">
             <span className="c-circle c-one"></span>
             <span className="c-circle c-two"></span>
 
             <form ref={form} onSubmit={sendEmail}>
               <h3 className="c-title">Leave a message...</h3>
               <div className="c-input-container">
                 <input type="text" name="user_name" className="c-input" placeholder="Name" />
                 <span>Username</span>
               </div>
               <div className="c-input-container">
                 <input type="email" name="user_email" className="c-input" placeholder="Email" />
                 <span>Email</span>
               </div>
               <div className="c-input-container">
                 <input type="tel" name="user_phone" className="c-input" placeholder="Phone" />
                 <span>Phone</span>
               </div>
               <div className="c-input-container c-textarea">
                 <textarea name="message" className="c-input" placeholder="Message"></textarea>
                 <span>Message</span>
               </div>
               <input type="submit" value="Send" className="c-btn" />
             </form>
           </div>
         </div>
       </div>

    </section>
  );
};

export default Contact;
