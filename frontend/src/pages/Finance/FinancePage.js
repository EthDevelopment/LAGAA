import React, { useEffect, useState } from "react";
import axios from "axios";
import ranks from "./FinanceRanks.json"; // Import ranks.json
import "./FinancePage.css";

const FinancePage = ({ setNetWorth }) => {
  const [financeData, setFinanceData] = useState(null);
  const userId = 1; // Replace with dynamic user ID as needed

  useEffect(() => {
    axios
      .get(`http://localhost:8081/finance/${userId}`)
      .then((response) => {
        setFinanceData(response.data);
        const netWorth = calculateNetWorth(response.data);
        setNetWorth(netWorth); // Update net worth in App.js
      })
      .catch((error) => {
        console.error("Error fetching finance data", error);
      });
  }, [userId, setNetWorth]);

  // Calculate net worth as the sum of all financial data points
  const calculateNetWorth = (data) => {
    return (
      (data?.cashBalance ?? 0) +
      (data?.assetsValue ?? 0) +
      (data?.stockValue ?? 0) +
      (data?.cryptoHoldings ?? 0)
    );
  };

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
            Rank:{" "}
            {
              getRankInfo(calculateNetWorth(financeData), "netWorth")
                .currentRank
            }
          </div>
          <h2>Net Worth</h2>
          <p>${calculateNetWorth(financeData).toFixed(2)}</p>
          <span>
            Rank:{" "}
            {
              getRankInfo(calculateNetWorth(financeData), "netWorth")
                .currentRank
            }
          </span>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${
                  getRankInfo(calculateNetWorth(financeData), "netWorth")
                    .progress
                }%`,
              }}
            ></div>
          </div>
          <span>
            Next Rank:{" "}
            {getRankInfo(calculateNetWorth(financeData), "netWorth").nextRank
              ?.rank || "Max"}
          </span>
          {/* Footer with two buttons */}
          <div className="finance-footer">
            <button className="finance-button">+</button>
            <button className="finance-button">-</button>
          </div>
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
            <button className="finance-button">+</button>
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
    </div>
  );
};

export default FinancePage;
