import React from 'react'

const LiveChatComment = ({name,message,url}) => {
  return (
    <div className="shadow-md m-2 bg-gray-100">
        <div className="text-center flex w-32">
          <img
            className="h-10 p-1 m-1 col-span-1 rounded-full"
            src={url}
            alt="user icon"
          />
          <h1 className="font-bold py-2 m-1">{name}</h1>
        </div>
        <p className="ml-2 ">{message}</p>
      </div>
  )
}

export default LiveChatComment
