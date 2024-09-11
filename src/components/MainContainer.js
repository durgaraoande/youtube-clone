import React, { useEffect } from 'react'
import VideoList from './VideoList'
import { useDispatch, useSelector } from 'react-redux'
import { setVideo } from '../utils/videoSlice'
import { setHamMenu } from '../utils/configSlice'

const MainContainer = () => {
  const dispatch=useDispatch();
  const videos=useSelector(store=>store.video.video);
  
  useEffect(()=>{
    dispatch(setHamMenu(true))
    const getYoutubeData=async()=>{
      const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+process.env.REACT_APP_YOUTUBE_API)
      const response=await data.json()
      dispatch(setVideo(response?.items))
    }
    if(!videos) {
    getYoutubeData();
    }

  },[])
  return (
    <div className='w-5/6'>
      <VideoList/>
    </div>
  )
}

export default MainContainer
