import React from "react";
import "./styles.css"; // Ensure the CSS file is imported

export default function OverviewPage() {
  return (
    <div className="overview-page">
      <h1 className="title">User Overview</h1>

      <div className="box-container">
        {/* Box 1 */}
        <div className="box">
          <div className="box-header">
            <div className="icon">🏋️‍♂️</div>
            <div className="header-text">Fitness Level</div>
          </div>
          <div className="box-content">
            <div className="stats">Strength: 70</div>
            <div className="stats">Stamina: 60</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="box">
          <div className="box-header">
            <div className="icon">🍎</div>
            <div className="header-text">Nutrition Level</div>
          </div>
          <div className="box-content">
            <div className="stats">Calories: 1500</div>
            <div className="stats">Vitamins: 85%</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="box">
          <div className="box-header">
            <div className="icon">🧠</div>
            <div className="header-text">Mental Wellness</div>
          </div>
          <div className="box-content">
            <div className="stats">Focus: 90</div>
            <div className="stats">Calm: 80</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
