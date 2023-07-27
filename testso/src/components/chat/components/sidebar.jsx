import React from 'react';
import s from '../chat.module.css'
const Sidebar = () => {
    return (
        <div className={s.sidebar} >
            <h4 className={s.header}>Users</h4>
            <ul>
                <li className={s.user}>Alex</li>
                <li className={s.user}>Dima</li>
                <li className={s.user}>Juli</li>
            </ul>
        </div>
    );
};

export default Sidebar;