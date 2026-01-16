import React, { useState } from "react";
import "../Styles/header.css";
import { useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        
        height: "80px",
      }}
    >
      <div
        style={{
          borderBottom: " 1px solid rgba(165, 165, 165, 0.34)",
          backgroundColor: "rgba(254, 250, 246, 0.88)",
          position: "relative"
        }}
      >
        <div className="header-container">
          <div className="header-flex">
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
            </div>
            <div className="ul-container close">
              <ul
                style={{
                  display: "flex",
                }}
              >
                <a href="#home">
                  <li>Home</li>
                </a>
                <a href="#project">
                  <li>Projects</li>
                </a>
                <a href="#skill">
                  <li>Skills</li>
                </a>
                <a href="#contact">
                  <li>Contact</li>
                </a>
              </ul>
            </div>
            <div className="hamburger-container">
              <button onClick={toggleMenu}>
                <i class="bi bi-list"></i>
              </button>
              <div className="ul-container">
                {isOpen && (
                  <ul
                    
                  >
                    <a href="#home">
                      <li onClick={closeMenu}>Home</li>
                    </a>
                    <a href="#project">
                      <li onClick={closeMenu}>Projects</li>
                    </a>
                    <a href="#skill">
                      <li onClick={closeMenu}>Skills</li>
                    </a>
                    <a href="#contact">
                      <li onClick={closeMenu}>Contact</li>
                    </a>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
