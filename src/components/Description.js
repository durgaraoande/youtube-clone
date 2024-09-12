import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChannelDetails } from "../utils/videoSlice";
import { setShowDesc } from "../utils/configSlice";

const Description = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.video.currentVideo);
  const showDesc = useSelector((store) => store.config.showDesc);

  const getChannelInfo = async (channelId) => {
    const channel = await fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        channelId +
        "&maxResults=50&key=" +
        process.env.REACT_APP_YOUTUBE_API
    );
    const json = await channel.json();
    dispatch(setChannelDetails(json?.items[0]));
  };
  useEffect(() => {
    if (data?.snippet?.channelId) {
      getChannelInfo(data.snippet.channelId);
    }
  }, []);

  const channel = useSelector((store) => store.video.channelDetails);
  if (!channel) return;
  const channelSnippet = channel?.snippet;
  const thumbnail = channelSnippet?.thumbnails?.default?.url;
  const { subscriberCount, viewCount } = channel?.statistics;
  return (
    <div className="ml-16 w-[906px]">
      <div>
        <p className="font-bold text-lg">{data?.snippet?.title}</p>
        <div className="flex">
          <img className="w-12 rounded-full" src={thumbnail} alt="thumbnail" />
          <div className="mx-2">
            <h1>{channelSnippet?.title}</h1>
            <p>{subscriberCount} subscribers</p>
          </div>
          <button className="mx-4 px-3 mb-1 mt-2 rounded-full bg-black text-white">
            Subscribe
          </button>
        </div>
        <div className="bg-slate-100 rounded-xl p-2">
          <div className="flex mb-4">
            <p className="mr-4">{viewCount} views</p>
            <p>{channelSnippet?.publishedAt}</p>
          </div>
          {showDesc && <>
            <p className="mb-4">{channelSnippet?.description}</p>
            <p>{data?.snippet?.description}</p></>}
              <button
                className="bg-slate-300 p-1 mx-2 rounded-lg"
                onClick={() => {
                  dispatch(setShowDesc(!showDesc));
                }}
              >
                {(showDesc)? "Show Less":"Show More"}
              </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
