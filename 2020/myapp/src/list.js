import React from 'react';
import Task from './task'

const List = (props) => {
  let content = "";
  if (props.taskList.length !== 0) {
    content = props.taskList.map((taskObj, id) =>
      <Task key={taskObj.id} taskId={id} task={taskObj.task} onDelete={props.onDelete}/>)
  }

  return (
    <div >
      { content }
    </div>
  )
}

export default List;