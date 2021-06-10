export const moveSnake = (direction, snake,mapLength) => {
  let newSnakePosition = snake;
  if (direction === "ArrowRight") {
    newSnakePosition = { y: snake.y, x: (snake.x += 1), alive:true };
  }
  if (direction === "ArrowLeft") {
    newSnakePosition = { y: snake.y, x: (snake.x -= 1), alive:true };
  }
  if (direction === "ArrowUp") {
    newSnakePosition = { y: (snake.y -= 1), x: snake.x, alive:true };
  }
  if (direction === "ArrowDown") {
    newSnakePosition = { y: (snake.y += 1), x: snake.x, alive:true };
  }
  if(snake.x > mapLength || snake.x < 1 || snake.y > mapLength || snake.y < 0) {
    newSnakePosition = { y: snake.y, x: snake.x , alive:false }
    }
  return newSnakePosition;
};