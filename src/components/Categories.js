import React from "react";

const Categories = () => {
  return (
    <div className="w-1/6 bg-white">
      <ul className="border border-b-slate-400 p-2">
        <li className="my-2">Home</li>
        <li className="my-2">Shorts</li>
        <li className="my-2">Subscriptions</li>
      </ul>
      <p className="p-2 text-lg">You {">"}</p>
      <ul className="border border-b-slate-400 p-2 ">
        <li className="my-2">Your Channel</li>
        <li className="my-2">History</li>
        <li className="my-2">Playlists</li>
        <li className="my-2">Watch Later</li>
        <li className="my-2">More</li>
      </ul>
      <ul className="border border-b-slate-400 p-2 ">
        <li className="my-2">Home</li>
        <li className="my-2">Shorts</li>
        <li className="my-2">Subscriptions</li>
      </ul>
      <ul className="border border-b-slate-400 p-2 ">
        <li className="my-2">Home</li>
        <li className="my-2">Shorts</li>
        <li className="my-2">Subscriptions</li>
      </ul>
    </div>
  );
};

export default Categories;
