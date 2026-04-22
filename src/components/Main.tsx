import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/Abhishek_1.JPG" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/abhishek-nagwani/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Abhishek Nagwani</h1>
          <p>Mechanical Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/abhishek-nagwani/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
