// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import OverviewPage from "./pages/Overview/OverviewPage";
import FinancePage from "./pages/Finance/FinancePage";
import HealthPage from "./pages/Health/HealthPage";
import MentalPage from "./pages/Mental/MentalPage";
import SkillsPage from "./pages/Skills/SkillsPage";
import "./App.css";

function App() {
  const [netWorth, setNetWorth] = useState(0); // State to hold the net worth

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/overview"
          element={<OverviewPage netWorth={netWorth} />}
        />{" "}
        {/* Passing netWorth to OverviewPage */}
        <Route
          path="/finance"
          element={<FinancePage setNetWorth={setNetWorth} />}
        />{" "}
        {/* Passing setNetWorth to FinancePage */}
        <Route path="/health" element={<HealthPage />} />
        <Route path="/mental" element={<MentalPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
