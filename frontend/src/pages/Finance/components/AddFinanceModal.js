// src/components/AddFinanceModal.js
import React, { useState } from "react";
import "./AddFinanceModal.css";

const AddFinanceModal = ({ isOpen, onClose, onSubmit, type }) => {
  const [amount, setAmount] = useState(0);
  const [operation, setOperation] = useState("add");

  if (!isOpen) return null;

  const handleSubmit = () => {
    const value =
      operation === "subtract" ? -Math.abs(amount) : Math.abs(amount);
    onSubmit(type, value); // Pass the type and value to the parent
    onClose(); // Close the modal after submission
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
              checked={operation === "add"}
              onChange={() => setOperation("add")}
            />
            Add
          </label>
          <label>
            <input
              type="radio"
              value="subtract"
              checked={operation === "subtract"}
              onChange={() => setOperation("subtract")}
            />
            Subtract
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
