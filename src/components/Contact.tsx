import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <div className="contact-info-block" style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
                  <strong>Email: </strong> 
                  <a href="mailto:nagwaniabhishek66@gmail.com">nagwaniabhishek66@gmail.com</a>
              </p>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                  <strong>Phone: </strong> 
                  <a href="tel:+919579767131">+91 9579767131</a>
              </p>
              
              <a href="/Abhishek_Nagwani_Resume.pdf" download="Abhishek_Nagwani_Resume.pdf">
                  <button style={{ 
                      padding: '12px 24px', 
                      fontSize: '1.1rem', 
                      cursor: 'pointer',
                      borderRadius: '5px',
                      border: 'none',
                      backgroundColor: '#fff',
                      color: '#000',
                      fontWeight: 'bold'
                  }}>
                      📄 Download Resume
                  </button>
              </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
