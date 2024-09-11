import React from 'react'

const LiveChatComment = ({name,message}) => {
  return (
    <div className="flex shadow-md rounded-md m-2 bg-gray-100">
        <div className="text-center flex w-32">
          <img
            className="h-10 p-2 m-1 col-span-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s"
            alt="user icon"
          />
          <h1 className="font-bold py-2 m-1">{name}</h1>
        </div>
        <p className="ml-2 text-center">{message}</p>
      </div>
  )
}

export default LiveChatComment
