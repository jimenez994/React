import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {

  let cssProperties = {};
  let root = document.documentElement;

  let ballDirection = "";
  let ballPosition = { x: 1, y: 1 };
  const game = () => {
    document.onkeydown = ({ key }) => {
      if (
        key === "ArrowUp" ||
        key === "ArrowDown" ||
        key === "ArrowRight" ||
        key === "ArrowLeft"
      ) {
        ballDirection = key;
      }
    };
    if (
      ballPosition.y < 460 &&
      ballPosition.y > 0 &&
      ballPosition.x < 460 &&
      ballPosition.x > 0
    ) {
      if (ballDirection === "ArrowRight") {
        ballPosition.x += 2;
        root.style.setProperty("--ball-x", ballPosition.x + "px");
      }
      if (ballDirection === "ArrowDown") {
        ballPosition.y += 2;
        root.style.setProperty("--ball-y", ballPosition.y + "px");
      }
      if (ballDirection === "ArrowLeft") {
        ballPosition.x -= 2;
        root.style.setProperty("--ball-x", ballPosition.x + "px");
      }
      if (ballDirection === "ArrowUp") {
        ballPosition.y -= 2;
        root.style.setProperty("--ball-y", ballPosition.y + "px");
      }
    } 
  };
  setInterval(game, 20);

  return (
    <div className="stage" style={cssProperties}>
      <h1>Animate with Translate</h1>
      <div id="jsAnimation"></div>
    </div>
  );
};

export default App;
