import React, { useState, useEffect } from "react";

const App = () => {
  const [snake, setSnake] = useState({
    y: 10,
    x: 10,
  });
  const [snakeDirection, setSnakeDirection] = useState("");

  let mapLength = 20;
  let food = 2;

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
    if (snakeDirection != "") {
      moveSnake(snakeDirection)
      const timerId = setInterval(() => {
        moveSnake(snakeDirection)
      }, 200)
      return () => {
        clearInterval(timerId)
      }
    }
  }, [snakeDirection]);

  const moveSnake = (direction) => {
    console.log(direction + " *");
    if (direction === "ArrowRight") {
      setSnake({ y: snake.y, x: (snake.x += 1) });
    }
    if (direction === "ArrowLeft") {
      setSnake({ y: snake.y, x: (snake.x -= 1) });
    }
    if (direction === "ArrowUp") {
      setSnake({ y: (snake.y -= 1), x: snake.x });
    }
    if (direction === "ArrowDown") {
      setSnake({ y: (snake.y += 1), x: snake.x });
    }
    if (
      snake.x > mapLength ||
      snake.x < 1 ||
      snake.y > mapLength ||
      snake.y < 0 
    ) {
      console.log("you die");
      setSnakeDirection("")
      return
    }
  }

  var stage = [];
  var stageLog = [];

  var snakeString = "y" + snake.y + "x" + snake.x;
  for (var y = 1; y <= mapLength; y++) {
    var row = [];
    for (var x = 1; x <= mapLength; x++) {
      const keyX = "y" + y + `x${x}`;
      if (snakeString == keyX) {
        row.push(<div key={keyX} className="snake"></div>);
      } else {
        row.push(<div key={keyX} className="block"></div>);
      }
      // log for x
      stageLog.push(keyX);
    }
    const keyY = y;
    stage.push(
      <div key={keyY} className="row">
        {row}
      </div>
    );
    // log for y
    stageLog.push(keyY);
  }
  console.log(stageLog);

  return <div>{stage}</div>;
};

export default App;
