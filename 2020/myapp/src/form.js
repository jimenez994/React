// import the react and reactDom libraries
import React from "react";
// import React, { useState } from "react";

function date() {
  return (new Date().toDateString().toString());
  // return "yes"
};

// Create a react component
const Form = (props) => {
  const title = "To Do List";
  const style = { color: 'blue' };
  // const [name, setName] = useState('some name');

  return (
    <div>
      <h1 style={style}> {title} </h1>
      <p>{ date() }</p>
      {/* <h2>{name}</h2> */}
      <form onSubmit={props.onSubmit}>
        <label htmlFor="name">Name: </label>
        {/* <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} /> */}
        <input id="task" type="text" value={props.task} onChange={e => props.onChange(e.target.value)} />

        <button>ADD</button>
      </form>
    </div>
  );
};

export default Form;


