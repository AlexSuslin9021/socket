import React, {useEffect, useState} from 'react';
import Sidebar from "./components/sidebar.jsx";
import Body from "./components/body.jsx";
import s from './chat.module.css'
import Messege from "./components/messege.jsx";


const Chat = ({socket}) => {
    const [messages, setMessages]=useState([])
    useEffect(()=>{
        socket.on('response', (data)=>{
            setMessages([...messages, data])
        })
        },
        [messages, socket])
    return (
        <div className={s.chat}>
        <Sidebar/>
            <div >
                <Body messages={messages}/>
                <Messege socket={socket}/>
            </div>
        </div>
    );
};

export default Chat;