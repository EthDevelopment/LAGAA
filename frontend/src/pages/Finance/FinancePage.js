// src/pages/Finance/FinancePage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ranks from "./FinanceRanks.json"; // Import ranks.json
import "./FinancePage.css";
import AddFinanceModal from "./components/AddFinanceModal";

const FinancePage = ({ setNetWorth }) => {
  const [financeData, setFinanceData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const userId = 1; // Replace with dynamic user ID as needed

  useEffect(() => {
    axios
      .get(`http://localhost/finance/${userId}`)
      .then((response) => {
        setFinanceData(response.data);
        const netWorth = calculateNetWorth(response.data);
        setNetWorth(netWorth); // Update net worth in App.js
      })
      .catch((error) => {
        console.error("Error fetching finance data", error);
      });
  }, [userId, setNetWorth]);

  // Calculate net worth as the sum of all financial data points, with NaN checks
  const calculateNetWorth = (data) => {
    const cash = Number(data?.cashBalance ?? 0);
    const assets = Number(data?.assetsValue ?? 0);
    const stock = Number(data?.stockValue ?? 0);
    const crypto = Number(data?.cryptoHoldings ?? 0);

    const netWorth = cash + assets + stock + crypto;

    // Log the values for better debugging
    console.log(
      "Cash:",
      cash,
      "Assets:",
      assets,
      "Stock:",
      stock,
      "Crypto:",
      crypto
    );
    console.log("Calculated Net Worth:", netWorth);

    // If net worth is NaN, return 0
    return isNaN(netWorth) ? 0 : netWorth;
  };

  // Usage in JSX
  const netWorth = calculateNetWorth(financeData);
  console.log("Net Worth:", netWorth); // Debugging: log the net worth value

  // Ensure netWorth is a number and fallback to 0 if it's NaN
  const formattedNetWorth = isNaN(netWorth) ? 0 : netWorth;

  // Get rank and progress to next rank based on value and ranks array
  const getRankInfo = (value, category) => {
    const rankCategory = ranks[category];
    for (let i = 0; i < rankCategory.length; i++) {
      const rank = rankCategory[i];
      if (value >= rank.min && value <= rank.max) {
        const nextRank = rankCategory[i + 1] ? rankCategory[i + 1] : rank;
        const progress = ((value - rank.min) / (nextRank.min - rank.min)) * 100;
        return { currentRank: rank.rank, nextRank, progress };
      }
    }
    return { currentRank: "Unranked", nextRank: null, progress: 0 };
  };

  // Handle submission from the modal
  const handleModalSubmit = async (type, value) => {
    const updatedFinanceData = { ...financeData };

    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
      console.error("Invalid input value:", value);
      return; // Prevent updating if the value is not a valid number
    }

    // Update the appropriate value based on type
    if (type === "cashBalance") {
      updatedFinanceData.cashBalance =
        Number(updatedFinanceData.cashBalance) + parsedValue;
    } else if (type === "assetsValue") {
      updatedFinanceData.assetsValue =
        Number(updatedFinanceData.assetsValue) + parsedValue;
    } else if (type === "stockValue") {
      updatedFinanceData.stockValue =
        Number(updatedFinanceData.stockValue) + parsedValue;
    } else if (type === "cryptoHoldings") {
      updatedFinanceData.cryptoHoldings =
        Number(updatedFinanceData.cryptoHoldings) + parsedValue;
    }

    // Log the updated finance data
    console.log("Updated finance data:", updatedFinanceData);
    setFinanceData(updatedFinanceData);

    // Recalculate and update net worth
    const newNetWorth = calculateNetWorth(updatedFinanceData);
    console.log("New Net Worth after update:", newNetWorth);
    setNetWorth(isNaN(newNetWorth) ? 0 : newNetWorth);

    // After submitting, re-fetch the data to ensure consistency with the backend
    try {
      const response = await axios.get(`http://localhost/finance/${userId}`);
      setFinanceData(response.data); // Set the fetched data
      const recalculatedNetWorth = calculateNetWorth(response.data);
      setNetWorth(recalculatedNetWorth);
    } catch (error) {
      console.error("Error refetching finance data:", error);
    }
  };

  if (!financeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="finance-page">
      <header className="finance-header">
        <h1>Level Up Your Finances</h1>
        <p>Track your progress and level up your financial journey.</p>
      </header>
      <section className="finance-stats">
        {/* Net Worth Card */}
        <div className="finance-card net-worth-card">
          <div className="rank-badge">
            Rank: {getRankInfo(formattedNetWorth, "netWorth").currentRank}
          </div>
          <h2>Net Worth</h2>
          <p>${formattedNetWorth.toFixed(2)}</p> {/* Safely applying toFixed */}
          <span>
            Rank: {getRankInfo(formattedNetWorth, "netWorth").currentRank}
          </span>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${
                  getRankInfo(formattedNetWorth, "netWorth").progress
                }%`,
              }}
            ></div>
          </div>
          <span>
            Next Rank:{" "}
            {getRankInfo(formattedNetWorth, "netWorth").nextRank?.rank || "Max"}
          </span>
        </div>

        {/* Cash Balance */}
        <div className="finance-card">
          <div className="rank-badge">
            Rank:{" "}
            {
              getRankInfo(financeData.cashBalance ?? 0, "cashBalance")
                .currentRank
            }
          </div>
          <h2>Cash Balance</h2>
          <p>${(financeData.cashBalance ?? 0).toFixed(2)}</p>
          <span>
            Rank:{" "}
            {
              getRankInfo(financeData.cashBalance ?? 0, "cashBalance")
                .currentRank
            }
          </span>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${
                  getRankInfo(financeData.cashBalance ?? 0, "cashBalance")
                    .progress
                }%`,
              }}
            ></div>
          </div>
          <span>
            Next Rank:{" "}
            {getRankInfo(financeData.cashBalance ?? 0, "cashBalance").nextRank
              ?.rank || "Max"}
          </span>
          {/* Footer with two buttons */}
          <div className="finance-footer">
            <button
              className="finance-button"
              onClick={() => setIsModalOpen(true)}
            >
              +
            </button>
            <button className="finance-button">-</button>
          </div>
        </div>

        {/* Assets Value */}
        <div className="finance-card">
          <div className="rank-badge">
            Rank:{" "}
            {
              getRankInfo(financeData.assetsValue ?? 0, "assetsValue")
                .currentRank
            }
          </div>
          <h2>Assets Value</h2>
          <p>${(financeData.assetsValue ?? 0).toFixed(2)}</p>
          <span>
            Rank:{" "}
            {
              getRankInfo(financeData.assetsValue ?? 0, "assetsValue")
                .currentRank
            }
          </span>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${
                  getRankInfo(financeData.assetsValue ?? 0, "assetsValue")
                    .progress
                }%`,
              }}
            ></div>
          </div>
          <span>
            Next Rank:{" "}
            {getRankInfo(financeData.assetsValue ?? 0, "assetsValue").nextRank
              ?.rank || "Max"}
          </span>
        </div>

        {/* Stock Value */}
        <div className="finance-card">
          <div className="rank-badge">
            Rank:{" "}
            {getRankInfo(financeData.stockValue ?? 0, "stockValue").currentRank}
          </div>
          <h2>Stock Value</h2>
          <p>${(financeData.stockValue ?? 0).toFixed(2)}</p>
          <span>
            Rank:{" "}
            {getRankInfo(financeData.stockValue ?? 0, "stockValue").currentRank}
          </span>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${
                  getRankInfo(financeData.stockValue ?? 0, "stockValue")
                    .progress
                }%`,
              }}
            ></div>
          </div>
          <span>
            Next Rank:{" "}
            {getRankInfo(financeData.stockValue ?? 0, "stockValue").nextRank
              ?.rank || "Max"}
          </span>
        </div>

        {/* Crypto Holdings */}
        <div className="finance-card">
          <div className="rank-badge">
            Rank:{" "}
            {
              getRankInfo(financeData.cryptoHoldings ?? 0, "cryptoHoldings")
                .currentRank
            }
          </div>
          <h2>Crypto Holdings</h2>
          <p>${(financeData.cryptoHoldings ?? 0).toFixed(2)}</p>
          <span>
            Rank:{" "}
            {
              getRankInfo(financeData.cryptoHoldings ?? 0, "cryptoHoldings")
                .currentRank
            }
          </span>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${
                  getRankInfo(financeData.cryptoHoldings ?? 0, "cryptoHoldings")
                    .progress
                }%`,
              }}
            ></div>
          </div>
          <span>
            Next Rank:{" "}
            {getRankInfo(financeData.cryptoHoldings ?? 0, "cryptoHoldings")
              .nextRank?.rank || "Max"}
          </span>
        </div>
      </section>

      <AddFinanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        type="cashBalance"
        userId={1}
      />
    </div>
  );
};

export default FinancePage;
