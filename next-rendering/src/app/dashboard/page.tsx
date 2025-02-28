"use client"
import React,{useState} from 'react'

const Dashboard = () => {

    const [name, setName] = useState('')

  return (
    <div>
        <input type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setName('')}>Submit</button>

        <p>Hello {name}</p>
    </div>
  )
}

export default Dashboard