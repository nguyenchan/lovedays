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
            <section className="_theguy">
              <img src="#" alt="" className="guy_pic" />
              <div clasName="guy_name">Name</div>
            </section>
            <Icon type="heart" theme="filled" />
            <section className="_thegirl">
              <img src="#" alt="" className="girl_pic" />
              <div className="girl_name">name</div>
            </section>
          </section>
        </header>
      </div>
    );
  }
}

export default App;
