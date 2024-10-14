// src/pages/Mental/MentalPage.js
import React from "react";
import "./MentalPage.css";

const MentalPage = () => {
  return (
    <div className="mental-page">
      <header className="mental-header">
        <h1>Mental Well-being</h1>
        <p>Track and improve your mental health.</p>
      </header>

      <section className="mental-stats">
        <div className="mental-card">
          <h2>Meditation Sessions</h2>
          <p>12 Sessions</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}></div>
          </div>
          <span>70% to meditation goal</span>
        </div>

        <div className="mental-card">
          <h2>Stress Levels</h2>
          <p>Low</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "20%" }}></div>
          </div>
          <span>20% stress reduction</span>
        </div>

        <div className="mental-card">
          <h2>Mood Score</h2>
          <p>8/10</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
          <span>Great mental state</span>
        </div>
      </section>
    </div>
  );
};

export default MentalPage;
