export const moveSnake = (direction, snake) => {
  // console.log(direction + " *");
  let newSnakePosition = {};
  if (direction === "ArrowRight") {
    newSnakePosition = { y: snake.y, x: (snake.x += 1) };
  }
  if (direction === "ArrowLeft") {
    newSnakePosition = { y: snake.y, x: (snake.x -= 1) };
  }
  if (direction === "ArrowUp") {
    newSnakePosition = { y: (snake.y -= 1), x: snake.x };
  }
  if (direction === "ArrowDown") {
    newSnakePosition = { y: (snake.y += 1), x: snake.x };
  }
  console.log(newSnakePosition);
  return newSnakePosition;
};

export const stillAlive = (snake, mapLength) => {
  if (
    snake.x > mapLength ||
    snake.x < 1 ||
    snake.y > mapLength ||
    snake.y < 0
  ) {
    console.log(snake);
    console.log("you die");
    return false;
  }
  return true;
};

export const timer =(func, t) => {
  var timerObj = setInterval(func, t);

  timerObj.stop = function() {
      if (timerObj) {
          clearInterval(timerObj);
          timerObj = null;
      }
      return timerObj;
  }

  // start timer using current settings (if it's not already running)
  timerObj.start = function() {
      if (!timerObj) {
          timerObj.stop();
          timerObj = setInterval(func, t);
      }
      return timerObj;
  }

  // start with new or original interval, stop current interval
  timerObj.reset = function(newT = t) {
      t = newT;
      return timerObj.stop().start();
  }
}
