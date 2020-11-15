import React from "react";
import Unsplash, { toJson } from "unsplash-js";
import Content from "./Content";
import "./style.css";
const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_UNSPLASH_KEY
});

class Search extends React.Component {
  state = {
    images: [],
    search: "",
  };
  componentDidMount() {
    unsplash.search
      .photos("random", 1, 15)
      .then(toJson)
      .then((data) => {
        this.setState({ images: data.results });
      });
  }
  onChangeHandler = (event) => {
    this.setState({ search: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    unsplash.search
      .photos(this.state.search, 1, 15)
      .then(toJson)
      .then((data) => {
        this.setState({ images: data.results });
      });
  };

  render() {
    return (
      <div >
        <form onSubmit={this.onSubmit}>
          <div className="ui action big input search-box">
            <input
              type="text"
              placeholder="Search..."
              onChange={this.onChangeHandler}
            />
            <button className="ui teal big icon button">
              <i className="search icon"></i>
            </button>
          </div>
        </form>
        <Content data={this.state.images} />
      </div>
    );
  }
}

export default Search;
