"use client";
import React, { useState } from "react";
import axios from "axios";
import "./styles.css"; // Import styles for the modal and buttons

const AddMoney = () => {
  const [showModal, setShowModal] = useState<boolean>(false); // For modal visibility
  const [inputAmount, setInputAmount] = useState<number>(0); // For storing the input amount

  // Add money function
  const addMoney = (amount: number) => {
    axios
      .post("http://localhost/api/finances/addMoney", { amount })
      .then((response) => {
        console.log("Money added:", response.data); // Handle success
        setShowModal(false); // Close modal on success
      })
      .catch((error) => {
        console.error("Error adding money:", error); // Handle error
      });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMoney(inputAmount); // Call addMoney function with the input amount
  };

  return (
    <div className="add-money-component">
      <button
        className="button money-button"
        onClick={() => setShowModal(true)}
      >
        Add Money
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Money</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(Number(e.target.value))}
                placeholder="Enter amount"
                className="money-input"
              />
              <button type="submit" className="button submit-button">
                Submit
              </button>
            </form>
            <button
              className="button close-modal"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMoney;
