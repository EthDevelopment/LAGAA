import React, { useState } from "react";
import "./BookSelector.css"; // Importing the updated CSS

const BookSelector = ({ books, onSelectBook, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to "All"

  // Filter books based on selected category
  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.Category === selectedCategory);

  return (
    <div className="book-selector-modal">
      <div className="book-selector-header">
        <h2 className="title">Choose Your Adventure</h2>
        <button className="book-selector-close-button" onClick={onClose}>
          &#10005;
        </button>
      </div>
      <div className="book-selector-content">
        {/* Stylish Dropdown for selecting a category */}
        <div className="category-dropdown">
          <label htmlFor="category">Filter by Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Health">Health</option>
            <option value="Finance">Finance</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Mental">Mental</option>
          </select>
        </div>

        {/* Improved book button list */}
        <div className="book-selection-list">
          <ul>
            {filteredBooks.map((book, index) => (
              <li key={index}>
                <button
                  className="book-button"
                  onClick={() => onSelectBook(book)}
                >
                  {book.Title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookSelector;
