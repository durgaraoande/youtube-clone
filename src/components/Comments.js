import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentCard from "./CommentCard";
import { setCurrentVideoComments } from "../utils/videoSlice";

const Comments = () => {
  
  const comments = useSelector((store) => store.video.comments);

  if (!comments) return;

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard
        key={comment.etag}
          authorProfileImageUrl={
            comment.snippet.topLevelComment.snippet.authorProfileImageUrl
          }
          authorDisplayName={
            comment.snippet.topLevelComment.snippet.authorDisplayName
          }
          publishedAt={comment.snippet.topLevelComment.snippet.publishedAt}
          textDisplay={comment.snippet.topLevelComment.snippet.textDisplay}
        />
      ))}
    </div>
  );
};

export default Comments;
