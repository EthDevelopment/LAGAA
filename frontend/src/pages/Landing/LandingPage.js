// src/pages/Landing/LandingPage.js
import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Life, One Level at a Time</h1>
          <p>
            LAGAA helps you gamify your progress in finance, health, mental
            well-being, and skill development. Track your goals and achievements
            with ease, and level up to a better you!
          </p>
          <button className="primary-cta" onClick={() => navigate("/overview")}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img src="/assets/skills.png" alt="Skills and Progress" />
        </div>
      </header>
      <footer className="landing-footer">
        <p>© 2024 LAGAA. Level up your life today!</p>
      </footer>
    </div>
  );
};

export default LandingPage;
