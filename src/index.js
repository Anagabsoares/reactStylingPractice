import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const current_date = new Date(2021, 0, 3, 2);
const current_time = current_date.getHours();
const morning = { color: "red" };
const afternoon = { color: "green" };
const night = { color: "blue" };

if (current_time < 12) {
  ReactDOM.render(
    <h1 style={morning}> Good Morning</h1>,
    document.getElementById("root")
  );
}
