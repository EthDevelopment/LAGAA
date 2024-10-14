// src/components/AddFinanceModal.js
import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "./AddFinanceModal.css";

const AddFinanceModal = ({ isOpen, onClose, onSubmit, type, userId }) => {
  const [amount, setAmount] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const value = Math.abs(amount); // Only take the positive amount for addition

      // Make the PATCH request to update the cash balance
      const response = await axios.patch(
        `http://localhost/finance/${userId}/cash`,
        { amount: value }, // Send the amount in the request body as JSON
        {
          headers: {
            "Content-Type": "application/json", // Explicitly set the Content-Type
          },
        }
      );

      // Assuming the response contains the updated finance data
      onSubmit(type, response.data); // Pass the updated data to the parent
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error("Error updating cash balance", error);
      // Handle error appropriately (e.g., show a notification)
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{`Update ${type}`}</h2>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>

        <div className="operation-selection">
          <label>
            <input
              type="radio"
              value="add"
              checked={true}
              onChange={() => {}}
            />
            Add
          </label>
        </div>

        <div className="modal-buttons">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddFinanceModal;
