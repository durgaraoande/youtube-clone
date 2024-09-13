import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setHamMenu, setShowDesc } from "../utils/configSlice";
import { setCurrentVideoData } from "../utils/videoSlice";

const VideoCard = ({video}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const kind=video?.kind;
  if(kind==="youtube#searchResult"){
    video={id:video.id.videoId,snippet:video.snippet}
  }
  const {id,snippet}=video;
  const {title}=snippet;
  const thumbnail= snippet.thumbnails.medium.url;
  const handleClick=()=>{
    navigate("/watch/"+id)
    dispatch(setHamMenu(false));
    dispatch(setCurrentVideoData(video))
    dispatch(setShowDesc(false));
  }
  return (
    <div className="p-2 m-2 cursor-pointer" onClick={handleClick} >
      <img className="rounded-lg" src={thumbnail} alt="thumbnail" loading="lazy"/>
      <p className="w-[320px]">{title}</p>
    </div>
  );
};

export default VideoCard;
