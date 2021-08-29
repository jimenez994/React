import { useEffect, useState } from 'react';
import weather from './../api/weather';

const useWeather = (defaultSearch) => {
  const [ forecastResponse, setForecast ] = useState(null)
  
  useEffect(() => {
    search(defaultSearch);
  }, [ defaultSearch ])
  
  const search = async (searchInput) => {
    try {
      const response = await weather.get("/forecast.json", {
        params: {
          q: searchInput,
          days: 3
        }
      })
      setForecast(response.data)
    } catch (error) {
      setForecast({error:"Something went wrong"})
    }
  }
  return [forecastResponse, search]
}

export default useWeather;