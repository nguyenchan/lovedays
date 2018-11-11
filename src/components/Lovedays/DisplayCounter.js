import React from "react";

export default function Display(props) {
  let [days, hours, mins, secs] = [
    props.days,
    props.hours,
    props.mins,
    props.secs
  ].map(num => (num < 10 ? "0" + num : num));
  return (
    <div>
      <span>{days + ' DAYS'}</span>
      <br/>
      <span>
        {hours}:{mins}:{secs}
      </span>
    </div>
  );
}
