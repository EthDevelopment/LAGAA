// src/pages/Overview/OverviewPage.js
import React from "react";
import "./OverviewPage.css";
import { useNavigate } from "react-router-dom";

const OverviewPage = () => {
  const navigate = useNavigate(); // Define navigate using the useNavigate hook

  return (
    <div className="overview-page">
      <header className="overview-header">
        <h1>User Overview</h1>
        <div className="overall-level">Overall Level 64</div>
      </header>

      <div className="overview-grid">
        <div
          className="overview-card finance"
          onClick={() => navigate("/finance")}
        >
          <h2>Finance</h2>
          <p>Track your financial growth.</p>
        </div>

        <div
          className="overview-card health"
          onClick={() => navigate("/health")}
        >
          <h2>Health</h2>
          <p>Monitor your health journey.</p>
        </div>

        <div
          className="overview-card mental"
          onClick={() => navigate("/mental")}
        >
          <h2>Mental Well-being</h2>
          <p>Check your mental state progress.</p>
        </div>

        <div
          className="overview-card skills"
          onClick={() => navigate("/skills")}
        >
          <h2>Skills</h2>
          <p>Track your skill development.</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
