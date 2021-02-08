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
  // const onSubmit = () => {
  //   props.onSubmit()
  // }

  return (
    <React.Fragment>
      <p>{ date() }</p>
      <form onSubmit={props.onSubmit}>
        <TextField id="task" type="text" value={props.task} onChange={e => props.onChange(e.target.value)} />
        <Button type="submit" >ADD</Button>
      </form>
    </React.Fragment>
  );
};

export default Form;


