import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentCard from "./CommentCard";
import { setCurrentVideoComments } from "../utils/videoSlice";

const Comments = () => {
  const dispatch = useDispatch();
  const currentVideo = useSelector((store) => store.video.currentVideo);
  const video_id = currentVideo?.id;
  const comments = useSelector((store) => store.video.comments);
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
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllComments();
  }, []);
  if (!comments) return;

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard
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
