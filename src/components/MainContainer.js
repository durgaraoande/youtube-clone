import React, { useEffect } from "react";
import VideoList from "./VideoList";
import { useDispatch } from "react-redux";
import { setVideo } from "../utils/videoSlice";
import { setHamMenu } from "../utils/configSlice";
import { useSearchParams } from "react-router-dom";
import { list } from "../utils/constants";

const MainContainer = () => {
  const dispatch = useDispatch();
  const [searchQuery,setsearchQuery] = useSearchParams();
  const query = (searchQuery.get("search_query")==="All")?null:searchQuery.get("search_query");
  const fetchapi =
    query !== null
      ? "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
        query +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API
      : "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
        process.env.REACT_APP_YOUTUBE_API;

  useEffect(() => {
    dispatch(setHamMenu(true));
    const getYoutubeData = async () => {
      const data = await fetch(fetchapi);
      const response = await data.json();
      dispatch(setVideo(response?.items));
    };

    getYoutubeData();
  }, [fetchapi]);

  return (
    <div className="w-5/6">
      <div className=" flex flex-col">
        <div className="flex overflow-x-auto h-10 scrollbar-hide mt-2">
          <ul className="flex">
            {list.map((i, index) => (
              <li className="mx-1 p-1  rounded-lg bg-gray-100 cursor-pointer" key={index} onClick={()=>setsearchQuery("?search_query="+i)}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <VideoList />
    </div>
  );
};

export default MainContainer;
