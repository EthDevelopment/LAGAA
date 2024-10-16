import React, { useState } from "react";
import "./SkillsPage.css";
import books from "./books/Books.json"; // Sample book content
import TypingApp from "../../components/TypingApp/TypingApp";
import BookSelector from "../../components/BookSelector/BookSelector"; // Importing BookSelector component

const SkillsPage = () => {
  const [isTyping, setIsTyping] = useState(false); // State to open/close TypingApp modal
  const [isSelectingBook, setIsSelectingBook] = useState(true); // State to open/close BookSelector modal
  const [selectedBook, setSelectedBook] = useState(null); // Store the selected book

  const handleOpenModal = () => {
    setIsSelectingBook(true); // Open BookSelector modal
  };

  const handleCloseModal = () => {
    setIsTyping(false); // Close TypingApp modal
    setSelectedBook(null); // Reset book selection
  };

  // Function to handle the book selection from the BookSelector modal
  const handleSelectBook = (book) => {
    setSelectedBook(book); // Set the selected book
    setIsSelectingBook(false); // Close book selector
    setIsTyping(true); // Open TypingApp modal
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

      {/* Book Selector Modal */}
      {isSelectingBook && (
        <BookSelector
          books={books} // Pass the list of books from JSON
          onSelectBook={handleSelectBook} // Handle book selection
          onClose={() => setIsSelectingBook(false)} // Close book selector
        />
      )}

      {/* TypingApp Modal */}
      {isTyping && selectedBook && (
        <TypingApp
          bookContent={selectedBook} // Pass selected book content to TypingApp
          onClose={handleCloseModal} // Handle closing TypingApp
        />
      )}
    </div>
  );
};

export default SkillsPage;
