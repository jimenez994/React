import React, { useState, useEffect } from "react";
import useWeather from "./hooks/useWeather";
import "./main.css";
import api from "./api/weather";

const App = () => {
  const [currentForecast, setCurrentForecast] = useState(null);
  const [response, search] = useWeather("22041");
  const [input, setInput] = useState("");

  useEffect(() => {
    setCurrentForecast(response);
  }, [response]);

  let content = <div>...</div>;
  if (currentForecast.error) {
      content = (<div>{currentForecast.error}</div>)
  }
  if (currentForecast) {
    console.log(currentForecast);
    // console.log(currentForecast.location);
    content = (
      <div>
        <img src={currentForecast.current.condition.icon} />
        <div>{currentForecast.location.country}</div>
        <div>{currentForecast.location.region}</div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2>{input}</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          search(input);
        }}
      >
        <input onChange={(e) => setInput(e.target.value)} />
        <button type="submit">search</button>
      </form>
      {content}
    </div>
  );
};

export default App;
