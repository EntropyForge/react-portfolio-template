import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <div className="contact-info-block"}>
              <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
                  <strong>Email: </strong> 
                  <a href="mailto:nagwaniabhishek66@gmail.com">nagwaniabhishek66@gmail.com</a>
              </p>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                  <strong>Phone: </strong> 
                  <a href="tel:+919579767131">+91 9579767131</a>
              </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
