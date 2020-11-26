import React from "react";
import Search from "./Search";
import Content from './Content';
import Unsplash, { toJson } from "unsplash-js";
import unsplash from '../api/unsplash';

class App extends React.Component {
  state = {
    images: []
  };

  // using the Unsplash package
  componentDidMount() {
    const unsplashApi = new Unsplash({
      accessKey: process.env.REACT_APP_UNSPLASH_KEY
    });
    unsplashApi.search
      .photos("red smile", 1, 25)
      .then(toJson)
      .then((data) => {
        this.setState({ images: data.results });
      })
      .catch((err) => {
        console.log(err);
      }
      )
  }
  
  // using axios 
  onFormSubmit = async (search) => {
    // opt 1 --------axios refactor in api folder
    const response = await unsplash.get('/search/photos', {
      params: { query: search, per_page: 100 }
    })
    this.setState({ images: response.data.results })

    // opt 2 ---- Axios 
    // --------------------------------------------------------------------
    // const response = await axios.get('https://api.unsplash.com/search/photos', {
    //   params: { query: search },
    //   headers: {
    //     Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
    //   }
    // })
    // this.setState({ images: response.data.results })
    // ----------------------------------------------------------------------

    // opt 3 ----Unsplash Package
    // if (search !== "") {
    //   unsplash.search
    //   .photos(search, 1, 15)
    //   .then(toJson)
    //   .then((data) => {
    //     this.setState({ images: data.results });
    //   });
    // }
  }
  render() {
    
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Search onSubmit={this.onFormSubmit} />
        <Content data={this.state.images} />
        
    </div>
  );
}
};

export default App;
