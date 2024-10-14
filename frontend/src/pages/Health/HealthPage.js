// src/pages/Health/HealthPage.js
import React from "react";
import "./HealthPage.css";

const HealthPage = () => {
  return (
    <div className="health-page">
      <header className="health-header">
        <h1>Health Goals</h1>
        <p>Track your physical and health goals.</p>
      </header>

      <section className="health-stats">
        <div className="health-card">
          <h2>Workouts Completed</h2>
          <p>15 Workouts</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "75%" }}></div>
          </div>
          <span>75% to fitness goal</span>
        </div>

        <div className="health-card">
          <h2>Calories Burned</h2>
          <p>7,500 kcal</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
          <span>80% to calorie burn goal</span>
        </div>
      </section>
    </div>
  );
};

export default HealthPage;
