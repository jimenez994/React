import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key:"fb15dd4e477d4138a54184808212208"
    // key: `${ process.env.REACT_APP_WEATHER_API_KEY }`,
  }
})