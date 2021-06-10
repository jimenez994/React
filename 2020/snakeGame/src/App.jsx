import React, { useState, useEffect } from "react";
import Stage from "./Stage";
import { moveSnake } from "./actions";

const App = () => {
  const [snake, setSnake] = useState({
    y: 10,
    x: 10,
    alive: true
  });
  const [snakeDirection, setSnakeDirection] = useState("");

  let mapLength = 20;
  let food = 2;
  let snakeTail = [snake];

  useEffect(() => {
    if (snakeDirection != "") {
      if (!snake.alive) {
        setSnakeDirection("");
        return;
      }
      let timerId = setTimeout(() => {
        let newSnake = moveSnake(snakeDirection, snake, mapLength)
        console.log(newSnake);
        setSnake(newSnake);
      }, 200);
      return () => {
        if (timerId) {
          clearInterval(timerId);
          timerId = null;
        }
      };
    }
  }, [snake, snakeDirection]);
  
  useEffect(() => {
    var onDown = ({ key }) => {
      if (
        key === "ArrowDown" ||
        key === "ArrowUp" ||
        key === "ArrowLeft" ||
        key === "ArrowRight"
      ) {
        setSnakeDirection(key + "");
      }
    };
    window.addEventListener("keydown", onDown);
    return () => {
      window.removeEventListener("keydown", onDown);
    };
  });

  return (
    <React.Fragment>
      <Stage snake={snake} mapLength={mapLength} />
    </React.Fragment>
  );
};

export default App;
