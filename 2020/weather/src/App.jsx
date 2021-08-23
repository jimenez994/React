import React, { useState} from 'react';
import './main.css';
import api from './api';


const App = () => {
  const [getWeatherData, setWeatherData] = useState(null)
  const search = async () => {
    const response = await api.get("/current.json", {
      params: {
        q: "paris"
      }
    })
    setWeatherData(response.data)
    console.log(response.data);
  }
  let content = <div>...</div>
  if (getWeatherData) {
    console.log(getWeatherData.current);
  }
  return (
    <div>
      Hello Wolrd

      <button onClick={search}>search</button>
    </div>
  )
}

export default App;