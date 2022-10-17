import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, videoSelect }) => {
  const renderedList = videos.map((item) => {
    return (
      <VideoItem key={item.id.videoId} videoSelect={videoSelect} item={item} />
    );
  });
  return <div>{renderedList} </div>;
};

export default VideoList;
