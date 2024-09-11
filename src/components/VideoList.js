import { useSelector } from "react-redux";
import { list } from "../utils/constants";
import VideoCard from "./VideoCard";
const VideoList = () => {
  const videos = useSelector((state) => state.video.video);
  if (!videos) return;
  return (
    <div className=" flex flex-col">
      <div className="flex overflow-x-auto h-10 scrollbar-hide mt-2">
        <ul className="flex">
          {list.map((i, index) => (
            <li className="mx-1 p-1  rounded-lg bg-gray-100" key={index}>
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap h-screen overflow-y-scroll ml-14">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.medium.url}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
