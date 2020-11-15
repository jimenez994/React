import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
    <div className="ui large text loader">{props.message}</div>
  </div>
  )
}

Spinner.defaultProps = {
  message: "Loading ..."
}

export default Spinner;