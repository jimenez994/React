import React from "react";
import Unsplash, { toJson } from "unsplash-js";

class Search extends React.Component {
  state = {
    images: [],
  };
  componentDidMount() {
    const unsplash = new Unsplash({
      accessKey: "-0FcxxDr4Ajfzcd4bQNGl7Th7wUuyDSatDXK4SVIhmM",
    });
    unsplash.search
      .photos("supercar", 1, 15)
      .then(toJson)
      .then((data) => {
        this.setState({ images: data.results });
      });
  }

  render() {
    console.log(this.state.images);
    var content = <div>Loading ... </div>
    if (this.state.images) {
      content = this.state.images.map((img) => (<img src={img.urls.small} key={img.id} alt="df" />));
    }
    return <div>
      {content}</div>;
  }
}

export default Search;
