import React, { useState, useEffect } from "react";
import "./TypingApp.css";

const TypingApp = ({ bookContent, onClose }) => {
  const [typedText, setTypedText] = useState(""); // Track user's input
  const [currentPage, setCurrentPage] = useState(0); // Track the current page set
  const [isPageTurning, setIsPageTurning] = useState(false); // Track page turn animation state

  // Split book content into sentences (ending with ".")
  const pages = bookContent.Content.split(/(?<=\.)\s+/); // Split by sentence

  // Close the modal
  const handleCloseModal = () => {
    onClose();
  };

  const normalizeHyphen = (char) => {
    if (char === "–" || char === "—") {
      return "-"; // Normalize en-dash or em-dash to standard hyphen
    }
    return char;
  };

  const handleKeyPress = (e) => {
    const inputChar = normalizeHyphen(e.key);
    const currentChunk = pages[currentPage] || "";
    const nextChar = normalizeHyphen(currentChunk[typedText.length]);

    if (
      inputChar === nextChar ||
      (inputChar === "Enter" && nextChar === "\n")
    ) {
      setTypedText((prev) => prev + inputChar); // Add correct character

      // Check if we've reached the end of the current chunk (sentence)
      if (typedText.length + 1 === currentChunk.length) {
        handleNextChunk();
      }
    }
  };

  // Function to reveal the next sentence (next page)
  const handleNextChunk = () => {
    setIsPageTurning(true); // Start transition
    setTimeout(() => {
      // After transition, update the content
      setTypedText(""); // Reset typed text
      setCurrentPage((prev) => prev + 1); // Move to the next chunk (sentence)
      setIsPageTurning(false); // End the transition
    }, 1000); // Set transition duration
  };

  // Add event listener for key presses
  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [typedText, currentPage]);

  return (
    <div>
      {/* Full-screen overlay */}
      <div className="modal-overlay" onClick={handleCloseModal}></div>

      <div className={`typing-modal ${isPageTurning ? "turning" : ""}`}>
        {/* Outer bezel with the centered title and close button */}
        <div className="typing-header">
          <h2 className="title">{bookContent.Title}</h2>
          <button className="close-button" onClick={handleCloseModal}>
            &#10005;
          </button>
        </div>

        {/* Single page layout */}
        <div className="typing-single-page">
          <div className="book-page-content">
            {pages[currentPage]?.split("").map((char, idx) => {
              const isCorrect =
                idx < typedText.length && typedText[idx] === char;
              const displayChar = char === "\n" ? "↵" : char; // Use a symbol for newlines
              return (
                <span
                  key={idx}
                  className={isCorrect ? "correct-char" : "incorrect-char"}
                >
                  {displayChar}
                </span>
              );
            })}
          </div>
        </div>

        {/* Page number display */}
        <div className="page-numbers">Page {currentPage + 1}</div>
      </div>
    </div>
  );
};

export default TypingApp;

