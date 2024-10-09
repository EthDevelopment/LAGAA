"use client";

import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">LAGAA</h1>
      <h1 className="landing-subtitle">Life's A Game After All</h1>
      <Link href="/overview">
        <button className="button">Start my quest ⚡️</button>
      </Link>
    </div>
  );
}
