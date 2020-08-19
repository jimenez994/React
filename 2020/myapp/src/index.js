// import the react and reactDom libraries
import React, { useState } from "react";
import ReactDom from "react-dom";

function date() {
  return (new Date().toDateString().toString());
  // return "yes"
};
// Create a react component
const App = () => {
  const some = "this is my text";
  const style = { color: 'blue' };
  const [name, setName] = useState('some name');
  return (
    <div>
      <h1 style={style}> This is iron men {some} {date()}</h1>
      <h2>{name}</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
      <button>Submit</button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector("#root"));
