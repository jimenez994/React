import React, { useState, useEffect} from 'react';
import './main.css';
import api from './api';


const App = () => {
  const [weatherData, setWeatherData] = useState(null)

  const search = async () => {
    console.log(import.meta.env);
    const response = await api.get("/forecast.json", {
      params: {
        q: "paris",
        days: 3
      }
    })
    setWeatherData(response.data)
    console.log(response.data);
  }
  let content = <div>...</div>
  if (weatherData) {
    // console.log(weatherData.current);
  }
  return (
    <div>
      Hello World

      <button onClick={search}>search</button>
    </div>
  )
}

export default App;