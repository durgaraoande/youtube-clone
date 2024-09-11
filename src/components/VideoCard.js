import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setHamMenu } from "../utils/configSlice";

const VideoCard = ({title,thumbnail,id}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleClick=()=>{
    navigate("/watch/"+id)
    dispatch(setHamMenu(false));
  }
  return (
    <div className="p-2 m-2 cursor-pointer" onClick={handleClick} >
      <img className="rounded-lg" src={thumbnail} alt="thumbnail"/>
      <p className="w-[320px]">{title}</p>
    </div>
  );
};

export default VideoCard;
