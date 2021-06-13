import React, { useState, useEffect } from "react";
import Stage from "./Stage";
import { moveSnake } from "./actions";

const App = () => {
  const [snake, setSnake] = useState({
    y: 10,
    x: 10,
    alive: true,
    direction: ""
  });
  const [snakeDirection, setSnakeDirection] = useState("");

  let mapLength = 20

  useEffect(() => {
    if (!snake.alive) {
      setSnakeDirection("");
      return;
    }
    if (snakeDirection != "") {
      if (snakeDirection != snake.direction) {
        let newSnake = moveSnake(snakeDirection, snake, mapLength);
        newSnake.direction = snakeDirection;
        setSnake({
          ...snake,
          ...newSnake
        })
      } else {
        let timerId = setTimeout(() => {
          let newSnake = moveSnake(snakeDirection, snake, mapLength);
          setSnake({
            ...snake,
            ...newSnake
          })
        }, 200);
        return() => {
          if (timerId) {
            clearInterval(timerId);
            timerId = null;
          }
        };
      }
      return
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
  const onReset = () => {
    setSnake({
      y: 10,
      x: 10,
      alive: true,
      direction: ""
    })
    setSnakeDirection("")
  }

  return (
    <React.Fragment>
      <Stage snake={snake} mapLength={mapLength} />
      <button onClick={onReset}>Reset</button>
    </React.Fragment>
  );
};

export default App;
