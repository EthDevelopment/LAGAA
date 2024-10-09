"use client";

import React, { useState } from "react";
import Nav from "../components/nav/nav"; // Assuming Nav component is in components folder
import "./styles.css"; // Importing CSS for styling

const JournalPage = () => {
  const [entry, setEntry] = useState("");

  const handleAddEntry = () => {
    console.log("New journal entry:", entry);
    // Handle saving or submitting the journal entry here
    setEntry(""); // Clear the text area after submission
  };

  return (
    <div className="journal-page">
      <Nav />
      <h1 className="journal-title">Journal Your Thoughts</h1>
      <textarea
        className="journal-input"
        placeholder="Start writing here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button className="add-entry-button" onClick={handleAddEntry}>
        Add Entry
      </button>
    </div>
  );
};

export default JournalPage;
