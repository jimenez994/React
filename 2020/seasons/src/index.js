import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from "./SeasonDisplay"

const App = () => {
  var cors = 3;
  window.navigator.geolocation.getCurrentPosition(
    (location) => {
      cors = location.coords.latitude +" "+ location.coords.longitude
      console.log(location.coords.latitude, location.coords.longitude);
    },
    (err) => {
      console.log(err);
    }
  )
  
  return (
    <div>
      <h2>hello there: {cors}</h2>
      <SeasonDisplay/>
    </div>
  )
}

ReactDom.render(
  <App/>,
  document.querySelector('#root')
)