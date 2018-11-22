import React, { Component } from "react";
import { Icon } from "antd";
import Lovedays from "./components/Lovedays";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="title">
            <span>lovedays</span>
          </section>
          <section className="lovedays-wrapper">
            <Lovedays />
          </section>
          <section className="profile-wrapper">
            <section className="_theguy">
              <img src="theguy.jpg" alt="" className="guy_pic" />
              <div clasName="guy_name">Chấn Nguyên</div>
            </section>
            <section className="heart">
              <Icon className="_heart" type="heart" theme="filled" />
            </section>
            <section className="_thegirl">
              <img src="thegirl.png" alt="" className="girl_pic" />
              <div className="girl_name">Bảo Trân</div>
            </section>
          </section>
        </header>
      </div>
    );
  }
}

export default App;
