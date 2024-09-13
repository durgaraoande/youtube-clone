import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
const VideoList = () => {
  const videos = useSelector((state) => state.video.video);
  if (!videos) return;
  return (
    <div className="flex flex-wrap h-screen overflow-y-scroll ml-14">
      {videos.map((video) => (
        <VideoCard key={video.etag} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
