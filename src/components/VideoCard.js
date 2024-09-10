import React from "react";

const VideoCard = ({title,thumbnail}) => {
  return (
    <div className="p-2 m-2 ">
      {/* <iframe
      className="rounded-lg"
        width="390"
        height="250"
        src="https://www.youtube.com/embed/A3Im3P0--aE?si=x6oz9jlvD1wi8Xfm"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      <img className="rounded-lg" src={thumbnail} alt="thumbnail"/>
      <p className="w-[320px]">{title}</p>
    </div>
  );
};

export default VideoCard;
