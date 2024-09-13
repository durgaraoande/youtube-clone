import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import Description from "./Description";
import Comments from "./Comments";
import { useDispatch } from "react-redux";
import { clearMessages } from "../utils/chatSlice";

const WatchPage = () => {
  const dispatch=useDispatch();
  const { id } = useParams();
    useEffect(() => {
    return () => dispatch(clearMessages());
  }, []);
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
          <LiveChat />
        </div>
      </div>
      <Description />
      <Comments />
    </div>
  );
};

export default WatchPage;
