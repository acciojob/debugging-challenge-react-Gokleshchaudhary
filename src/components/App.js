import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1 className="title">JSX Keyword Fix Challenge</h1>
      <button className="btn" onClick={handleClick}>Click Me</button>
      <p className="counter">{count}</p>
    </div>
  );
}

export default App;
