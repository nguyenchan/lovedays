import React, { Component } from "react";
import Display from "./DisplayCounter.js";

export default class Lovedays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.counter
    };
    this._update = this._updateCounter.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this._updateCounter(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _extractData(counter) {
    const countDays = counter => {
      let days = Math.floor(counter / 86400000);
      let remainderS = counter % 86400000;
      let hours = Math.floor(remainderS / 3600000);
      let mins = Math.floor((remainderS % 3600000) / 60000);
      let secs = Math.floor(((remainderS % 3600000) % 60000) / 1000);
      return { days, hours, mins, secs };
    };
    let data = countDays(counter);
    return data;
  }

  _updateCounter() {
    this.setState({
      counter: new Date() - new Date("Oct 26, 2012 22:00:00")
    });
  }

  render() {
    return <Display {...this._extractData(this.state.counter)} />;
  }
}
