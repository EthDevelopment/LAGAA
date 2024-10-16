import React, { useState, useEffect, useRef } from "react";
import "./TypingApp.css";

const TypingApp = ({ bookContent, onClose }) => {
  const [typedText, setTypedText] = useState(""); // Track user's input
  const [currentPage, setCurrentPage] = useState(0); // Track the current page set
  const [isPageTurning, setIsPageTurning] = useState(false); // Track page turn animation state
  const [wpm, setWpm] = useState(0); // Track words per minute
  const startTimeRef = useRef(null); // Store start time of typing
  const [isTimerRunning, setIsTimerRunning] = useState(false); // Track whether the timer is running

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

  // Calculate WPM based on the number of words typed and time spent typing
  const calculateWpm = () => {
    if (startTimeRef.current && isTimerRunning) {
      const timeElapsed = (Date.now() - startTimeRef.current) / 1000 / 60; // time in minutes
      const wordsTyped = typedText.trim().split(/\s+/).length; // count words typed
      setWpm(Math.floor(wordsTyped / timeElapsed));
    }
  };

  const handleKeyPress = (e) => {
    const inputChar = normalizeHyphen(e.key);
    const currentChunk = pages[currentPage] || "";
    const nextChar = normalizeHyphen(currentChunk[typedText.length]);

    if (!startTimeRef.current || !isTimerRunning) {
      startTimeRef.current = Date.now(); // Start timer on first key press
      setIsTimerRunning(true); // Resume timer when typing starts on a new page
    }

    if (
      inputChar === nextChar ||
      (inputChar === "Enter" && nextChar === "\n")
    ) {
      setTypedText((prev) => prev + inputChar); // Add correct character

      // Recalculate WPM after every key press
      calculateWpm();

      // Check if we've reached the end of the current chunk (sentence)
      if (typedText.length + 1 === currentChunk.length) {
        handleNextChunk();
      }
    }
  };

  // Function to reveal the next sentence (next page) and stop the timer
  const handleNextChunk = () => {
    setIsPageTurning(true); // Start transition
    setTimeout(() => {
      setTypedText(""); // Reset typed text
      setCurrentPage((prev) => prev + 1); // Move to the next chunk (sentence)
      setIsPageTurning(false); // End the transition
      startTimeRef.current = null; // Reset timer when page is complete
      setIsTimerRunning(false); // Stop timer until next page starts typing
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
        {/* Outer bezel with the centered title, WPM counter, and close button */}
        <div className="typing-header">
          <div className="wpm-counter">WPM: {wpm}</div> {/* Add WPM counter */}
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
              const displayChar = char === "\n" ? "↵" : char;

              return (
                <React.Fragment key={idx}>
                  {/* Show the cursor if this is the next character to type */}
                  {idx === typedText.length && (
                    <span className="typing-cursor"></span>
                  )}
                  <span
                    className={isCorrect ? "correct-char" : "incorrect-char"}
                  >
                    {displayChar}
                  </span>
                </React.Fragment>
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
