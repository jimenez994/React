import React from 'react';
import Task from './task'

const List = (props) => {
  let content = "";
  if (props.taskList.length !== 0) {
    content = props.taskList.map((task,id) =>
      <Task key={id} task={task}/>)
  }

  return (
    <div>
      { content }
    </div>
  )
}

export default List;