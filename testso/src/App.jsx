import { useState } from 'react'
import  {io} from 'socket.io-client'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Chat from "./components/chat/chat.jsx";

const socket =io('http://localhost:3006')

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
 <Routes>
     <Route path={'/'} element={<Home socket={socket}/>} />
     <Route path={'/chat'} element={<Chat socket={socket}/>} />
 </Routes>
    </div>
  )
}

export default App
