import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";

import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from "./hooks/useVideos";
const App = () => {
  // const [items, setItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");
  // setSelectedVideo(res.data.items[0]);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  // const videoSelect = (video) => {
  //   console.log("from the app", video);
  //   setSelectedVideo(video);
  // };
  // console.log("sdf", selectedVideo);
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
