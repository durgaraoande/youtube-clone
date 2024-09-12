import React from "react";

const CommentCard = ({
  authorProfileImageUrl,
  authorDisplayName,
  publishedAt,
  textDisplay,
}) => {
  return (
    <div>
      <div className="ml-16 flex bg-slate-50 rounded-lg shadow-sm p-2">
        <img
          className="rounded-full h-12"
          src={authorProfileImageUrl}
          alt="user icon"
        />
        <div className="">
          <div className="flex ">
          <h1 className="mx-6">{authorDisplayName}</h1>
          <p>{publishedAt}</p>
          </div>
          <p className="ml-4">{textDisplay}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
