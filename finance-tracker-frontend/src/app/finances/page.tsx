"use client";
import { useState } from "react";
import "./styles.css";
import Nav from "../components/nav/nav";

export default function FinancePage() {
  // Example state for finances and total balance, assuming you'll fetch this from your API later
  const [totalBalance, setTotalBalance] = useState(0);
  const [finances, setFinances] = useState([
    { depositid: 1, time: "2024-10-08T14:30:00Z", amount: 500 },
    { depositid: 2, time: "2024-10-09T15:00:00Z", amount: 300 },
    { depositid: 3, time: "2024-10-10T16:00:00Z", amount: 200 },
  ]);

  return (
    <div>
      <Nav /> {/* Navigation at the top */}
      <div className="finance-container">
        <h1 className="total-balance">
          Total Balance: <span className="balance-amount">${totalBalance}</span>
        </h1>

        <table className="finance-table">
          <thead>
            <tr>
              <th>Deposit ID</th>
              <th>Time</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {finances.map((finance) => (
              <tr key={finance.depositid}>
                <td>{finance.depositid}</td>
                <td>{new Date(finance.time).toLocaleString()}</td>
                <td>${finance.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
