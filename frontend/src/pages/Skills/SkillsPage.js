import React, { useState } from "react";
import "./SkillsPage.css";
import TypingApp from "../../components/TypingApp.js/TypingApp";
import sampleBook from "./books/Books.json"; // Sample book content

const SkillsPage = () => {
  const [isTyping, setIsTyping] = useState(false); // State to open/close modal

  const handleOpenModal = () => {
    setIsTyping(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsTyping(false); // Close the modal
  };

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

        <div className="skills-card">
          <h2>Reading Level</h2>
          <p>Advanced</p> {/* Hardcoded value */}
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
          <span>80% Reading Mastery</span>
        </div>

        <div className="skills-card">
          <h2>Typing Level</h2>
          <p>Proficient</p> {/* Hardcoded value */}
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}></div>
          </div>
          <span>70% Typing Mastery</span>
          {/* "Type Through Book" Button */}
          <button className="type-button" onClick={handleOpenModal}>
            Type Through Book
          </button>
        </div>
      </section>

      {/* Conditionally render TypingApp when isTyping is true */}
      {isTyping && (
        <TypingApp bookContent={sampleBook} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SkillsPage;
