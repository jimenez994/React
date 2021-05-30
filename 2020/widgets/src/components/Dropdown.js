import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options,label, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const rederedOptions = options.map((option, index) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={index}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        <div>{option.label}</div>
      </div>
    );
  });

  return (
    <div
      ref={ref}
      className="ui form"
      style={{ backgroundColor: selected.value }}
    >
      <div className="field">
        <label className="label" > {label} </label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? " visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? " visible transition" : ""}`}>
            {rederedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
