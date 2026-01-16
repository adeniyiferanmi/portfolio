import React from "react";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div>
          <h1>
            fera
            <span
              style={{
                color: "rgb(245,158,11)",
              }}
            >
              .dev
            </span>
          </h1>
          <p>
          Building innovative solutions for the web.
          </p>
        </div>
        <div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            
          </ul>
        </div>
      </div>
      <div className="footer-bottom" >
        <p>© 2024 fera.dev. All rights reserved.</p>
        <div className="social-icons" >
            <a href="https://github.com/adeniyiferanmi" target="_blank" >
                <i class="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/feranmi-adeniyi-489526371/" target="_blank" >
                <i class="bi bi-linkedin"></i>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
