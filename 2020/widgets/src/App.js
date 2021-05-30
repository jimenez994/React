import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[2]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="ui container">
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <button
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          Toggle Dropdown
        </button>
        {showDropdown ? (
          <Dropdown
            label="Select a Color"
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        ) : null}
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
