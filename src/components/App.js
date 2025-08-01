// src/App.js
import React from "react";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="app-container">
      <h1 className="title">JSX Fix Challenge</h1>

      <form className="form">
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input type="text" id="name" className="input" />

        <label htmlFor="email" className="label">
          Email:
        </label>
        <input type="email" id="email" className="input" />

        <button type="button" className="submit-btn" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
