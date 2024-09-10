import React, { useEffect } from 'react'
import VideoList from './VideoList'
import { useDispatch, useSelector } from 'react-redux'
import { setVideo } from '../utils/videoSlice'

const MainContainer = () => {
  const dispatch=useDispatch();
  const videos=useSelector(state=>state.video.video);
  useEffect(()=>{
    const getYoutubeData=async()=>{
      const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBGm8IEbN8Cr53oqwORzP8Aoj_vt1E5rCs")
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
