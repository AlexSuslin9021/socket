import React from 'react';
import Sidebar from "./components/sidebar.jsx";
import Body from "./components/body.jsx";
import s from './chat.module.css'
import Messege from "./components/messege.jsx";


const Chat = ({socket}) => {
    return (
        <div className={s.chat}>
        <Sidebar/>
            <div >
                <Body/>
                <Messege socket={socket}/>
            </div>
        </div>
    );
};

export default Chat;