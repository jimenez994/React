import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [ball, setBall] = useState({ direction: "ArrowDown", x: 1, y: 1 });

  let cssProperties = {};
  let root = document.documentElement;

  useEffect(() => {
    var onDown = (e) => {
      const move = () => {
        let newBall = ball;
        newBall.y += 2;
        setBall({
          ...ball,
          ...newBall
        })
        setTimeout(function () {
          if (ball.y < 460 && ball.y > 0 && ball.x < 460 && ball.x > 0) {
            root.style.setProperty("--ball-y", ball.y + "px");
            move();
          }
        }, 7);
      };
      if (e.key === "ArrowDown") {
        move()
      }
    };
    window.addEventListener("keydown", onDown);
    return () => {
      window.removeEventListener("keydown", onDown);
    };
  }, [ball]);

  return (
    <div className="stage" style={cssProperties}>
      <h1>Animate with Translate</h1>
      <div id="jsAnimation"></div>
    </div>
  );
};

export default App;
