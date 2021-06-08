import React from 'react';

const Stage = ({snake, mapLength}) => {

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
  // console.log(stageLog);

  return (
    <div>{stage}</div>
  )

}

export default Stage;