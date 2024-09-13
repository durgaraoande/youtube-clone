import { useDispatch } from "react-redux";
import { toggleHamMenu } from "../utils/configSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const getSearchSuggestions = async () => {
    const response = await fetch(
      `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en-in&q=${query}`
    );
    const text = await response.text();
    const jsonpData = text.match(/window\.google\.ac\.h\((.*)\)/)[1];
    const data = JSON.parse(jsonpData);
    const suggestions = data[1].map((item) => item[0]);
    setSuggestions(suggestions);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  /***
   *
   * key -i
   *  -render the component
   * -useEffect
   * -start timer to make api call
   *
   * key -ip
   * destroy the componet (useEffect return)
   * -render the component
   * -useEffect
   * -start timer to make api call
   *
   * debouncing - 200ms
   */

  const handleSearchClick = (suggestion) => {
    setQuery("");
    setShowSuggestions(false);
    navigate("/results?search_query=" + suggestion);
  };

  const handleHamClick = () => {
    dispatch(toggleHamMenu());
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full  grid grid-flow-col bg-white " >
        <div className="flex col-span-1">
          <img
            className="h-10 p-2 mx-2 my-5 "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAABLS0vPz8+Wlpb29vZfX1+RkZHDw8M3Nzc0NDSCgoLU1NSkpKSFhYX8/Pzg4ODx8fF1dXUaGhqrq6vq6uq6uroXFxdmZmaxsbELCwtYWFgdHR2fn589PT3KyspxcXFEREQoKCh7e3tGlryJAAACdElEQVR4nO3d7VLCMBCF4QiUDxHLp4iIgN7/PWoHHfXPJm0ys7Pb97mCc6ZTStI0CQEAAAAAAAAAAAAAAAAA/Kunk/HAjvFkWrfqt/u4s+djl15woh22o0liv2qmnbSzWZVUcK+dM8M+peK9dsos9/GCc+2MmeaxgkvthNmWkYbP2gGzPcsFV9r5CliJDQ/a8Qo4iA3X2vEKWIsNbT8qbuQHxot2vAJexIba6YoQG2600xWwERseteMVcBQbWh03/SWPoR604xXwIDZ0cCO+ygXDQjtgtkWkofmLGLuE9u/EyF3Y2GpnzLKNFwzhpJ0ywymlYAhT7ZydTdMKhlDZHEStk+YSv+1Gb9p5W5qNWkx539TLoR3Ldm8tAAAAAAAAAACAKfV5MbJjcW7z3qnxNNB+l9Ta4KlFv+G7dtxO3s+pBR+1o3b2mFZwrJ0zwzil4EU7ZZZLvKD1ld7yKu8vlXbCbLHHht1fmR+RX5taO18B8qIFu4uFfsnLhqx/19WQv+26ascr4Co29PC9xV5sqJ2uiJ5fw6t2vALk+9DDb6n8yPf/PPT/n8b//9IejC38jw97MMbvwTyN5V+bxLm2HsyXBv9z3g3v7y0AAAAAAAAAAIAhzveJ8r7Xl9H92i7J75/sLhtK3HPP/b6J7ve+9L9/qfs9aP3vI2z9EkYv4lA7XwHyneh/T3b/++rbvw1jZyNopytCbOjhewv5jBL/58zYHDb9J58VZH2Vd0Ne6e3/zC7/56714Ow88992Rc8/tP7ASDjDsgfnkIbK2lTpr7SzZIPdMVTqecChB2c6h+ZzC9/ncgMAAAAAAAAAAAAAAACATZ8gAVacgh1jCwAAAABJRU5ErkJggg=="
            alt="ham logo"
            onClick={handleHamClick}
          />
          <Link to="/">
            <img
              className="h-20 cursor-pointer"
              src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
              alt="youtube logo"
            />
          </Link>
        </div>
        <div className="col-span-8 w-4/6">
          <input
            className="rounded-l-full border border-gray-500 my-3 px-3 py-2 w-11/12 "
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
             onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-500 text-white rounded-r-full py-2 my-2 px-2 w-1/12">
            🔎
          </button>
        </div>

        <div className="col-span-1">
          <img
            className="h-14 p-2 m-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s"
            alt="user icon"
          />
        </div>
      </div>
      {showSuggestions && (
        <div className="fixed w-1/2 mx-72 center bg-slate-100 rounded-lg -mt-6 z-10">
          {suggestions.map((suggestion, i) => (
            <p
              className="py-2 px-6 my-1 rounded-md  hover:bg-slate-200"
              key={i}
              onMouseDown={() => handleSearchClick(suggestion)}
              onMouseUp={()=>setShowSuggestions(false)}
            >
              {suggestion}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
