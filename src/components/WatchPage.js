import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import Description from "./Description";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { clearMessages } from "../utils/chatSlice";
import { setCurrentVideoComments } from "../utils/videoSlice";


const WatchPage = () => {
  const dispatch=useDispatch();
  const currentVideo = useSelector((store) => store.video.currentVideo);
  const video_id = currentVideo?.id;
  const { id } = useParams();
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  
  const getAllComments = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
          process.env.REACT_APP_YOUTUBE_API +
          "&textFormat=plainText&part=snippet&videoId=" +
          video_id +
          "&maxResults=100"
      );
      const comments = await response.json();
      dispatch(setCurrentVideoComments(comments?.items));
      setCommentsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllComments();
    return () => dispatch(clearMessages());
  }, [])
  return (
    <div className="absolute m-3 -z-20 ">
      <div className="flex">
        <iframe
          className="my-4 ml-16 rounded-lg w-[906px] h-[480px]"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div>
          {commentsLoaded && <LiveChat />}
        </div>
      </div>
      <Description />
      <Comments />
    </div>
  );
};

export default WatchPage;
