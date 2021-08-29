import { useEffect, useState } from "react";
import weather from "./../api/weather";

const useWeather = (defaultSearch) => {
  const [forecastResponse, setForecast] = useState(null);

  useEffect(() => {
    search(defaultSearch);
  }, [defaultSearch]);

  const search = async (searchInput) => {
    try {
      console.log("calling");
      const response = await weather.get("/forecast.json", {
        params: {
          q: searchInput,
          days: 3,
        },
      });
      setForecast(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return [forecastResponse, search];
};

export default useWeather;
