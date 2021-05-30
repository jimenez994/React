import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchInputSubmit('compadre y comadre');
  }, [])

  const onSearchInputSubmit = async (searchInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchInput,
      },
    });
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video)
    console.log("video from list click", video);
  };

    return (
      <div className="ui container">
        <SearchBar onSearchInputSubmit={onSearchInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videoList={videos}
                onVideoSelect={onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
