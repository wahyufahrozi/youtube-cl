import React from "react";
import "../styles/VideoItem.css";
const VideoItem = ({ item, videoSelect }) => {
  return (
    <div onClick={() => videoSelect(item)} class="ui list">
      <div class="video-item item">
        <img
          class="ui  image"
          src={item.snippet.thumbnails.medium.url}
          alt={item.snippet.title}
        />
        <div class="content">
          <div class="description">{item.snippet.title}</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default VideoItem;
