import React from 'react';
import s from './components.module.css'
import {useNavigate} from "react-router-dom";
const Body = () => {
    const navigate= useNavigate()
    const onClickButton =()=>{
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <div className={s.body}>
           <header className={s.header}>
               <button onClick={onClickButton} className={'.btn'}>
                   go away chat
               </button>
           </header>

            <div className="container">
                <div className={s.i}>
                    <span>I</span>
                        <p>hello</p>

                </div>
                <div className={s.friend}>
                    <span>friend</span>
                        <p>hello</p>
                </div>
                <div className={s.i}>
                    <span>I</span>
                        <p>hello</p>
                </div>
            </div>


        </div>
    );
};

export default Body;