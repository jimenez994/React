// import the react and reactDom libraries
import React from "react";
// import React, { useState } from "react";
import {TextField, Button} from "@material-ui/core"

function date() {
  return (new Date().toDateString().toString());
  // return "yes"
};

// Create a react component
const Form = (props) => {
  const title = "To Do List";
  const style = { color: 'blue' };

  return (
    <div>
      <h1 style={style}> {title} </h1>
      <p>{ date() }</p>
      {/* <h2>{name}</h2> */}
      <form onSubmit={props.onSubmit}>
        <TextField id="task" type="text" value={props.task} onChange={e => props.onChange(e.target.value)} />
        <Button>ADD</Button>
      </form>
    </div>
  );
};

export default Form;


