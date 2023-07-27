import React, {useState} from 'react';

const Messege = ({socket}) => {

    const [messsege, setMessege]= useState('')
    const handleForm=(e)=>{
        e.preventDefault()
      if(messsege.trim() && localStorage.getItem('user')){
          socket.emit('message',{
              test:messsege,
              name:localStorage.getItem('user'),
              id:`${socket.id}`,
              socketId:socket.id
          })
      }
        setMessege('')
    }

    return (
        <div className={'message-block'}>
            <form onSubmit={handleForm} >
                <input value={messsege} onChange={(e)=>(setMessege(e.currentTarget.value))} type="text" className={'user-messege'}/>
                <button type={"submit"}>Отправить</button>
            </form>
        </div>
    );
};

export default Messege;