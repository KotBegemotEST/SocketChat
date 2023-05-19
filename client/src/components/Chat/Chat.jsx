import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";

let socket;

const Chat = () => {
  const [name,setName] = useState('')
  const [room,setRoom] = useState('')
  const location = useLocation();
  const ENDPOINT = 'localhost:5000'

 useEffect(()=>{

    const {name,room} = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name)
    setRoom(room)

    console.log(socket)
    socket.emit('join',{name,room},()=>{
      // alert(error)
    })
    return ()=>{
      socket.emit("disconnect")
      socket.off();
    }
 },[ENDPOINT,location.search]);

  return (
    <>
      <h1>Chat</h1>
    </>
  );

}

export default Chat;