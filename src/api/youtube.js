import axios from "axios";

const KEY = "AIzaSyBQ20ibcIs9xDIwHY2kKnWpIcdsC1J_kTs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
