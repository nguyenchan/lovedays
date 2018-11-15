import React from "react";
import "./DisplayCounter.css";

export default function Display(props) {
  let [days, hours, mins, secs] = [
    props.days,
    props.hours,
    props.mins,
    props.secs
  ].map(num => (num < 10 ? "0" + num : num));
  return (
    <div className="days_wrapper">
      <div className="_title">IN LOVE</div>
      <div className="_days">{days + " DAYS"}</div>
      <div className="_hours">
        {hours}:{mins}:{secs}
      </div>
    </div>
  );
}
