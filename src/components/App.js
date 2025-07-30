import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
  };

  return (
    <div className="container">
      <h1 className="title">JSX Keyword Fix Challenge</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Name:</label>
        <input
          type="text"
          id="username"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>

      <p className="output">Typed Name: {name}</p>
    </div>
  );
}

export default App;
