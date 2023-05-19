import React, {useState} from 'react'
import {Link} from "react-router-dom"
import './join.css'

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className='outer'>
      <div className='inner'>
        <h1 className='heading'>Join</h1>
        <div>
          <input type="text" placeholder='Name' className='joinInput' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <input type="text"  placeholder='Room' className='joinInput' onChange={(e)=>setRoom(e.target.value)}/>
        </div>
        <Link onClick={(e)=>(!name || !room) ? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
          <button className='btn' type='submit'>Sign in</button>
        </Link>
      </div>
    </div>
  )
}

export default Join