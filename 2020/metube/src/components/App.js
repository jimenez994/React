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

    console.log(response);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchInputSubmit={this.onSearchInputSubmit} />
        <VideoList videoList={ this.state.videos }/>
      </div>
    );
  }
}

export default App;
