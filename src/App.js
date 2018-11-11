import React, { Component } from "react";
import Lovedays from "./components/Lovedays";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>IN LOVE</div>
          <Lovedays />
        </header>
      </div>
    );
  }
}

export default App;
