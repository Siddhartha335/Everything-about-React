import React from 'react'
import './App.css'
import Heading from './components/Heading'
import Intro from './components/Intro'
import Time from './components/Time'

function App() {

  let items = ['An item','A second item','A third item','A fourth item','And a fifth one']

  return (
    <>
      {/* <Heading />
      <Intro />
      <Time /> */}
      <h1>Healthy foods</h1>
      <ul className="list-group">
        {items.map((item,index)=> {
          return <li className="list-group-item" key={index}>{item}</li>
        })}
      </ul>
    </>
  )
}

export default App
