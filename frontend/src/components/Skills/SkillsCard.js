// src/pages/Skills/SkillsPage.js
import React from "react";
import "./SkillsPage.css";

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <header className="skills-header">
        <h1>Skills Development</h1>
        <p>Track and improve your skills.</p>
      </header>

      <section className="skills-stats">
        <div className="skills-card">
          <h2>New Skills Acquired</h2>
          <p>3 Skills</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "60%" }}></div>
          </div>
          <span>60% to new skill goal</span>
        </div>

        <div className="skills-card">
          <h2>Skill Mastery</h2>
          <p>Intermediate</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "50%" }}></div>
          </div>
          <span>50% skill mastery</span>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
