// import the react and reactDom libraries
import React from "react";
// import React, { useState } from "react";
import { TextField, Button, Icon } from "@material-ui/core";

function date() {
  return new Date().toDateString().toString();
  // return "yes"
}

// Create a react component
const Form = (props) => {
  let { onSubmit, task, onChange } = props;
  let addButton;
  if (task) {
    addButton = (
      <Button type="submit">
        <Icon style={{ color: "green", fontSize: 30 }}>add_circle</Icon>
      </Button>
    );
  }

  return (
    <React.Fragment>
      <p>{date()}</p>
      <form onSubmit={onSubmit}>
        <TextField
          id="task"
          type="text"
          value={task}
          onChange={(e) => onChange(e.target.value)}
        />
        {addButton}
      </form>
    </React.Fragment>
  );
};

export default Form;
