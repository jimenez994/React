import React, { useState, useEffect } from 'react';
import useWeather from './hooks/useWeather'
import './main.css';
import api from './api/weather';


const App = () => {
  const [ currentForecast, setCurrentForecast ] = useState(null)
  const [ forecast, search ] = useWeather("cochabamba");

  useEffect(() => {
    setCurrentForecast(forecast[ 0 ])
  }, [forecast]);


  let content = <div>...</div>
  if (currentForecast) {
    console.log(currentForecast);
    content = (<div>
      <img src={currentForecast.day.condition.icon}/>
    </div>)
  }
  return (
    <div>
      Hello World

      <button onClick={() => {console.log("ouch")}}>search</button>
      {content}
    </div>
  )
}

export default App;