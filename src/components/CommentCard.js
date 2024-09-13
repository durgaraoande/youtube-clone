import React from "react";

const CommentCard = ({
  authorProfileImageUrl,
  authorDisplayName,
  publishedAt,
  textDisplay,
}) => {
  return (
    <div>
      <div className="ml-16 flex  rounded-lg shadow-md p-2 w-[906px] ">
        <img
          className="rounded-full h-12"
          src={authorProfileImageUrl}
          alt="user icon"
        />
        <div className="">
          <div className="flex ">
            <h1 className="mx-6 font-bold mb-3">{authorDisplayName}</h1>
            <p>{publishedAt}</p>
          </div>
          <p className="ml-4">{textDisplay}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
