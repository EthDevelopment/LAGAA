"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css"; // Import your styles

interface Finance {
  transactionId: number;
  time: string;
  changeAmount: number;
  changeType: string;
}

export default function FinancePage() {
  const [finances, setFinances] = useState<Finance[]>([]);
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [rank, setRank] = useState<string>("Worm");
  const [nextLevel, setNextLevel] = useState<number>(100);
  const [showModal, setShowModal] = useState<boolean>(false); // Modal visibility
  const [inputAmount, setInputAmount] = useState<number>(0); // Input value
  const [modalAction, setModalAction] = useState<string>(""); // Track Add or Spend

  // Fetch total balance from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/finances/accountBalance")
      .then((response) => {
        setTotalBalance(response.data);
        calculateRank(response.data); // Calculate rank on balance fetch
      })
      .catch((error) =>
        console.error("Error fetching account balance:", error)
      );
  }, []);

  // Calculate rank based on balance
  const calculateRank = (balance: number) => {
    let rank = "Worm";
    let nextLevel = 100;
    if (balance > 100 && balance <= 1000) {
      rank = "Ant";
      nextLevel = 1000;
    } else if (balance > 1000 && balance <= 5000) {
      rank = "Rabbit";
      nextLevel = 5000;
    } else if (balance > 5000 && balance <= 15000) {
      rank = "Fox";
      nextLevel = 15000;
    } else if (balance > 15000 && balance <= 50000) {
      rank = "Wolf";
      nextLevel = 50000;
    } else if (balance > 50000 && balance <= 100000) {
      rank = "Eagle";
      nextLevel = 100000;
    } else if (balance > 100000 && balance <= 500000) {
      rank = "Lion";
      nextLevel = 500000;
    } else if (balance > 500000 && balance <= 1000000) {
      rank = "Tiger";
      nextLevel = 1000000;
    } else if (balance > 1000000) {
      rank = "Apex Predator";
      nextLevel = 10000000;
    }
    setRank(rank);
    setNextLevel(nextLevel);
  };

  // Add money function
  const addMoney = (amount: number) => {
    axios
      .post("http://localhost:8080/api/finances/addMoney", { amount })
      .then((response) => {
        setTotalBalance(response.data.totalBalance);
        setFinances([...finances, response.data]);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error adding money:", error);
      });
  };

  // Subtract money function
  const spendMoney = (amount: number) => {
    axios
      .post("http://localhost:8080/api/finances/subMoney", { amount })
      .then((response) => {
        setTotalBalance(response.data.totalBalance);
        setFinances([...finances, response.data]);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error spending money:", error);
      });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalAction === "Add") {
      addMoney(inputAmount);
    } else if (modalAction === "Spend") {
      spendMoney(inputAmount);
    }
  };

  // Open modal with action-specific setup
  const openModal = (action: string) => {
    setModalAction(action);
    setShowModal(true);
  };

  return (
    <div className="finance-container">
      {/* Balance and Rank Section */}
      <div className="balance-section">
        <h1 className="total-balance">
          Total Balance: <span className="balance-amount">${totalBalance}</span>
        </h1>
        <div className="rank-section">
          <img
            src={`/icons/${rank.toLowerCase()}.png`}
            alt={rank}
            className="rank-icon"
          />
          <p className="rank-label">
            {rank} - ${nextLevel - totalBalance} to next level
          </p>
        </div>
      </div>

      {/* Table to show transactions */}
      <table className="finance-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {finances.map((finance) => (
            <tr key={finance.transactionId}>
              <td>{finance.transactionId}</td>
              <td>{new Date(finance.time).toLocaleString()}</td>
              <td>${finance.changeAmount}</td>
              <td>{finance.changeType}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons to open modal */}
      <div className="button-container">
        <button
          className="button money-button"
          onClick={() => openModal("Add")}
        >
          Add Money
        </button>
        <button
          className="button spend-button"
          onClick={() => openModal("Spend")}
        >
          Money Spent
        </button>
      </div>

      {/* Shared Modal */}
      {showModal && (
        <div
          className={`modal ${
            modalAction === "Add" ? "green-modal" : "red-modal"
          }`}
        >
          <div className="modal-content">
            <h2>{modalAction === "Add" ? "Add Money" : "Money Spent"}</h2>
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
}
