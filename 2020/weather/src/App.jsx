import React, { useState, useEffect } from "react";
import useWeather from "./hooks/useWeather";
import "./main.css";
import api from "./api/weather";

const App = () => {
  const [currentForecast, setCurrentForecast] = useState(null);
  const [response, search] = useWeather("22041");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCurrentForecast(response);
      setLoading(false);
    }, 300);
  }, [response]);

  let content = null;
  if (loading) {
    content = <div>loading ....</div>;
  } else {
    if (currentForecast) {
      console.log(currentForecast);
      content = (
        <div>
          <h1>{Math.round(currentForecast.current.temp_f)} F°</h1>
          <img src={currentForecast.current.condition.icon} />
          <div>{currentForecast.location.country}</div>
          <div>{currentForecast.location.region}</div>
        </div>
      );
    }
  }

  return (
    <div>
      <div>
        <h2>{input}</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search(input);
          setInput("")
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">search</button>
      </form>
      {content}
    </div>
  );
};

export default App;
