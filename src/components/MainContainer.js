import React, { useEffect } from 'react'
import VideoList from './VideoList'
import { useDispatch, useSelector } from 'react-redux'
import { setVideo } from '../utils/videoSlice'

const MainContainer = () => {
  const dispatch=useDispatch();
  const videos=useSelector(state=>state.video.video);
  useEffect(()=>{
    const getYoutubeData=async()=>{
      const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+process.env.REACT_APP_YOUTUBE_API)
      const response=await data.json()
      dispatch(setVideo(response?.items))
    }
    if(!videos)
    getYoutubeData();

  },[])
  return (
    <div>
      <VideoList/>
    </div>
  )
}

export default MainContainer
