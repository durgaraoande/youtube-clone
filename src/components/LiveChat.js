import React, { useEffect, useRef } from "react";
import LiveChatComment from "./LiveChatComment";
import { useDispatch, useSelector } from "react-redux";
import {setMessages} from "../utils/chatSlice"


const LiveChat = () => {
    const msg=useRef()
    const dispatch=useDispatch();
    const chat=useSelector(store=>store.chat.messages)
    const comments = useSelector((store) => store.video.comments);
    
    useEffect(()=>{
        //Api Polling
        if(!comments) {return;}
        const timer=setInterval(() => {
            const comment=comments[Math.floor(Math.random()*comments.length)]
            dispatch(setMessages({
                name:comment.snippet.topLevelComment.snippet.authorDisplayName,
                message:comment.snippet.topLevelComment.snippet.textDisplay,
                url:comment.snippet.topLevelComment.snippet.authorProfileImageUrl
            }))
        }, 1500);
        return ()=> clearInterval(timer);
    },[])

    const handleSendClick=()=>{
        dispatch(setMessages({
            name:"Abdr",
            message:msg.current.value,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s"
        }))
        msg.current.value=""
    }
  
  return (
    <>
    <div className="mx-3 my-4 h-[440px] w-[468px] border border-gray-400 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chat?.map((c,i)=><LiveChatComment key={i} name={c.name} message={c.message} url={c.url}/>)}
    </div>
    <input ref={msg} className="ml-12 mr-2 p-1 border w-64 border-black rounded-md" type="text"/>
    <button onClick={handleSendClick} className="py-1 px-3 bg-green-200 rounded-md">Send</button>
    </>
  );
};

export default LiveChat;
