import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
  winter: {
    text: "Its chilly here!", 
    iconName: "snowflake"
  },
  summer: {
    text: "Its hot here!",
    iconName: "sun"
  }
}

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}/>
      <h1 className="">{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}/>
    </div>
  );
};

export default SeasonDisplay;
