import './App.css'
import Screen from './components/Screen'
import Buttons from './components/Buttons'
import ButtonsDown from './components/ButtonsDown'
import { useState } from 'react'

function App() {

  const [calVal,setCalVal] = useState('')

  const onButtonClick = (event)=> { 
    const buttonText =(event.target.innerHTML);
    if (buttonText =='C') {
      setCalVal('')
    } else if(buttonText == '=') {
      const result = eval(calVal)
      setCalVal(result)
    } else {
      const newDisplay = calVal + buttonText;
      setCalVal(newDisplay)
    }
  }

  return (
    <>
      <h1 className='text-center mt-2 text-badge'>Calculator-App</h1>
      <div id='calculator' className='container mt-4' >
        <Screen calVal = {calVal}/>      
        <Buttons onButtonClick={onButtonClick} />
        <ButtonsDown onButtonClick={onButtonClick}/>
        </div>
    </>
  )
}

export default App
