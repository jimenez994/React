import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {

  state = { videos : [] }

  onSearchInputSubmit = async (searchInput) => {
    const response = await youtube.get('/search', {
      params: {
        q : searchInput
      }
    })
    this.setState({videos : response.data.items})
  }

  onVideoSelect = video => {
    console.log("video from list click", video);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchInputSubmit={this.onSearchInputSubmit} />
        <VideoList videoList={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    );
  }
}

export default App;
