import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const Bag = () => {

    const {primary,secondary} = useContext(ThemeContext);
    const [color,setColor] = useState({backgroundColor:secondary.main,color:secondary.text})
    
    const changeColor = () => {
        setColor({backgroundColor:primary.main,color:primary.text})
    }

    const changeColors = () => {
        setColor({backgroundColor:secondary.main,color:secondary.text})
    }

  return (
    <>
        <div style={color}>This div is going to have toggle of the colors.</div>
        <button onClick={changeColor}>Toggle</button>
        <button onClick={changeColors}>Toggle back</button>
    </>
  )
}

export default Bag