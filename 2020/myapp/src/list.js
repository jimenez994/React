import React from 'react';
import Task from './task'

const List = (props) => {
  let content = "";
  if (props.taskList.length !== 0) {
    content = props.taskList.map((task,id) =>
      <Task key={id} taskId={id} task={task} onDelete={props.onDelete}/>)
  }

  return (
    <div >
      { content }
    </div>
  )
}

export default List;