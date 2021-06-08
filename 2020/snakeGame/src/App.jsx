import React, { useState, useEffect } from "react";
import Stage from './Stage';
import { moveSnake,stillAlive, timer } from './actions';

const App = () => {
  const [snake, setSnake] = useState({
    y: 10,
    x: 10,
  });
  const [snakeDirection, setSnakeDirection] = useState("");

  let mapLength = 20;
  let food = 2;
  let snakeTail = []

  useEffect(() => {
    var onDown = ({ key }) => {
      if (key === "ArrowDown" || key === "ArrowUp" || key === "ArrowLeft" || key === "ArrowRight") {
        setSnakeDirection(key+"");
      }
    };
    window.addEventListener("keydown", onDown);
    return () => {
      window.removeEventListener("keydown", onDown);
    };
  })

  useEffect(() => {
    if (!stillAlive(snake,mapLength)) {
      setSnakeDirection("")
    }
    if (snakeDirection != "") {
      
      setSnake(moveSnake(snakeDirection,snake))
      const timerId = timer(() => {
        setSnake(moveSnake(snakeDirection,snake))
      }, 10000)
      return () => {
        console.log("something");
        timerId.stop()
      }
    }

  }, [snakeDirection]);

  return (
    <React.Fragment>
      <Stage snake={snake} mapLength={mapLength}/>
  </React.Fragment>
    );
};

export default App;
