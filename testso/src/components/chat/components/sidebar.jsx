import React, {useEffect, useState} from 'react';
import s from '../chat.module.css'
const Sidebar = ({socket}) => {
    const [users, setUsers]=useState([])

    useEffect(()=>{
        socket.on('responseNewUser',(data)=>{
            setUsers(data)
        })
        },
        [socket, users])

    const filterUsers =users.filter((value ,index, self)=>
        index===self.findIndex((t)=>
        t.user ===value.user && t.socketId ===value.socketId)
    )

    return (
        <div className={s.sidebar} >
            <h4 className={s.header}>Users</h4>
            <ul>
                {filterUsers.map((el)=><li key={el.socketId} className={s.user}>{el.user}</li>)}
                <li className={s.user}>Alex</li>
                <li className={s.user}>Dima</li>
                <li className={s.user}>Juli</li>
            </ul>
        </div>
    );
};

export default Sidebar;