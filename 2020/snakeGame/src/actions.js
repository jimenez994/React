export const moveSnake = (direction, snake,mapLength) => {
  let newSnakePosition = snake;
  if (direction === "ArrowRight") {
    newSnakePosition.x += 1;
  }
  if (direction === "ArrowLeft") {
    newSnakePosition.x -= 1;
  }
  if (direction === "ArrowUp") {
    newSnakePosition.y -= 1;
  }
  if (direction === "ArrowDown") {
    newSnakePosition.y += 1;
  }
  if(snake.x > mapLength || snake.x < 1 || snake.y > mapLength || snake.y < 0) {
    newSnakePosition.alive = false
  }
  console.log(newSnakePosition);
  return newSnakePosition;
};