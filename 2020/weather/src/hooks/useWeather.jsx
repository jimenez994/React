import { useEffect, useState } from 'react';
import weather from './../api/weather';

const useWeather = (defaultSearch) => {
  const [ forecast, setForecast ] = useState([])
  
  useEffect(() => {
    search(defaultSearch);
  }, [ defaultSearch ])
  
  const search = async (searchInput) => {
    const response = await weather.get("/forecast.json", {
      params: {
        q: searchInput,
        days: 3
      }
    })
    setForecast(response.data.forecast.forecastday)
  }
  return [forecast, search]
}

export default useWeather;