import React from 'react';

// Main App component to host the card and set the overall dark background


// Component implementing the card logic and structure
const  CardTwo = () => {
  return (
    <>
      <style jsx="true">{`
        /* --- Dark Blue Theme Variables --- */
        :root {
          --card-bg-outer: linear-gradient(135deg, #4A90E2, #1E3A8A); /* Outer border glow */
          --card-bg-inner: radial-gradient(circle 350px at 0% 0%, #16213E, #0D1117); /* Inner card background */
          --card-border: #1E40AF; /* Subtle inner border */
          --text-strong: #E0FFFF; /* Bright text color */
          --line-color: #254F7F; /* Line/grid color */
          --line-highlight: #60A5FA; /* Highlight line color */
        }

        /* --- Card Styles (Adapted from original StyledWrapper) --- */
        .outer {
          width: 300px;
          height: 250px;
          border-radius: 12px;
          padding: 1px;
          background: var(--card-bg-outer);
          position: relative;
          box-shadow: 0 0 30px rgba(74, 144, 226, 0.4); /* Blue glow effect */
        }

        .dot {
          position: absolute;
          top: -5px;
          left: -5px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #3B82F6; /* Blue highlight dot */
          z-index: 2;
          box-shadow: 0 0 15px #3B82F6;
        }

        .card {
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 11px;
          border: solid 1px var(--card-border);
          background: var(--card-bg-inner);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-direction: column;
          color: var(--text-strong);
          font-family: 'Inter', sans-serif;
          overflow: hidden; /* Hide ray overflow */
        }

        .ray {
          position: absolute;
          top: -50px;
          left: -50px;
          width: 100px;
          height: 100px;
          background: rgba(74, 144, 226, 0.2); /* Faint blue internal highlight */
          border-radius: 50%;
          filter: blur(50px);
          z-index: 0;
        }

        .card .text {
          font-weight: 800;
          font-size: 4rem;
          margin-bottom: 0.5rem;
          /* Blue/White gradient for strong text */
          background: linear-gradient(45deg, #4A90E2 10%, #E0FFFF, #1E3A8A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          z-index: 1;
        }

        .line {
          width: 100%;
          height: 1px;
          position: absolute;
          background-color: var(--line-color);
          z-index: 1;
        }

        .topl {
          top: 10%;
          background: linear-gradient(90deg, var(--line-highlight) 20%, var(--line-color) 50%, transparent 80%);
        }

        .bottoml {
          bottom: 10%;
          background: linear-gradient(90deg, transparent 20%, var(--line-color) 50%, var(--line-highlight) 80%);
        }

        .leftl {
          left: 10%;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg, var(--line-highlight) 20%, var(--line-color) 50%, transparent 80%);
        }

        .rightl {
          right: 10%;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg, transparent 20%, var(--line-color) 50%, var(--line-highlight) 80%);
        }
      `}</style>
      
      <div className="outer">
        <div className="dot" />
        <div className="card">
          <div className="ray" />
          <div className="text">1B</div>
          <div className="text-lg text-gray-300">Active Viewers</div>
          {/* Decorative lines */}
          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
      </div>
    </>
  );
};

export default CardTwo;