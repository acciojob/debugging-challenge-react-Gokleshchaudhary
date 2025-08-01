import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className="app-container">
        <h1 onDoubleClick={() => alert("Heading double-clicked")}>
          {this.state.count === 0 ? "JSX Fix Challenge" : this.state.count}
        </h1>
        <form className="form">
          <label htmlFor="name" className="label">Name:</label>
          <input id="name" className="input" />

          <label htmlFor="email" className="label">Email:</label>
          <input id="email" className="input" />

          <button type="button" className="submit-btn" onClick={this.handleClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
