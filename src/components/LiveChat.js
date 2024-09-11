import React, { useEffect, useRef } from "react";
import LiveChatComment from "./LiveChatComment";
import { generateRandomName } from "../utils/helper/random_names";
import { getRandomMessage } from "../utils/helper/random_msg";
import { useDispatch, useSelector } from "react-redux";
import {setMessages} from "../utils/chatSlice"

const LiveChat = () => {
    const msg=useRef()
    const dispatch=useDispatch();
    const chat=useSelector(store=>store.chat.messages)
    useEffect(()=>{
        //Api Polling
        const timer=setInterval(() => {
            dispatch(setMessages({
                name:generateRandomName(),
                message:getRandomMessage()
            }))
        }, 2000);
        return ()=> clearInterval(timer);
    },[])

    const handleSendClick=()=>{
        dispatch(setMessages({
            name:"Abdr",
            message:msg.current.value
        }))
    }
  
  return (
    <>
    <div className="mx-3 my-4 h-[440px] w-[468px] border border-gray-400 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chat?.map((c,i)=><LiveChatComment key={i} name={c.name} message={c.message}/>)}
    </div>
    <input ref={msg} className="ml-12 mr-2 p-1 border w-64 border-black rounded-md" type="text"/>
    <button onClick={handleSendClick} className="py-1 px-3 bg-green-200 rounded-md">Send</button>
    </>
  );
};

export default LiveChat;
