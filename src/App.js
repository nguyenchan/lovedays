import React, { Component } from "react";
import { Icon } from "antd";
import Lovedays from "./components/Lovedays";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="lovedays-wrapper">
            <Lovedays />
          </section>
          <section className="profile-wrapper">
            <Icon type="heart" theme="filled" />
          </section>
        </header>
      </div>
    );
  }
}

export default App;
