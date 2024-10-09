"use client";
import React from "react";
import Nav from "../components/nav/nav"; // Ensure your Nav component is correctly imported
import "./styles.css"; // Import the styles

export default function HealthPage() {
  return (
    <div className="health-page">
      <Nav />
      <div className="container">
        <div className="box">
          <div className="number">23.5</div>
          <div className="label">BMI</div>
        </div>
        <div className="box">
          <div className="number">85</div>
          <div className="label">Health Score</div>
        </div>
        <div className="box">
          <div className="number">76</div>
          <div className="label">Diet Score</div>
        </div>
        <div className="box">
          <div className="number">4</div>
          <div className="label">Habits</div>
        </div>
        <div className="box">
          <div className="number">2</div>
          <div className="label">Negatives</div>
        </div>
      </div>
    </div>
  );
}
