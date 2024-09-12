import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CommentCard from './CommentCard';

const Comments = () => {
  const currentVideo=useSelector((store)=>store.video.currentVideo);
  const video_id=currentVideo?.id;
  const [comments,setComments]=useState(null);
  const getAllComments = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/youtube/v3/commentThreads?key='+process.env.REACT_APP_YOUTUBE_API+'&textFormat=plainText&part=snippet&videoId='+video_id+'&maxResults=100');
      const comments = await response.json();
      setComments(comments?.items);
      console.log(comments);
    } catch (error) {
      console.error(error);
    }
    
  }
  useEffect(()=>{
    getAllComments();
  },[])
  if(!comments) return;

  return (
    <div>
      {comments.map((comment)=>(
        <CommentCard authorProfileImageUrl={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} authorDisplayName={comment.snippet.topLevelComment.snippet.authorDisplayName} publishedAt={comment.snippet.topLevelComment.snippet.publishedAt} textDisplay={comment.snippet.topLevelComment.snippet.textDisplay}/>
      ))}
    </div>  )
}

export default Comments
