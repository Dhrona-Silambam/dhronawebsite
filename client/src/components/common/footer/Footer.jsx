import React from "react";
import { useHistory } from 'react-router-dom';

import "./footer.css";

const Footer = () => {
  const history = useHistory(); // Initialize useHistory hook

  const handleClick = () => {
    history.push('/contact'); // Navigate to the contact page when button is clicked
  };

  const handleClick1 = () => {
    history.push('/chat'); // Navigate to the chat page when button is clicked
  };

  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and Skills.</p>
            </div>
            <button className='btn5' onClick={handleClick}>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>"Our chatbot's here to help! Simply ask, and discover everything you need to know about Dhrona Silambam Academy."</p>

              <div className='input flex'>
                <input type='text' placeholder='Type Your Queries' />
                <button onClick={handleClick1}>Chat</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className='legal'>
        <span>© 2024 DHRONA SILAMBAM.</span>
      </div>
    </>
  )
}

export default Footer;
