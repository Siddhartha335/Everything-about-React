import React from 'react'
import './App.css'
import { AuthContextProvider } from './context/UserContext'
import User from './context/User'
// import { ThemeContextProvider } from './context/ThemeContext'
// import Bag from './context/Bag'
// import Counter from './state/Counter'
// import User from './state/User'
// import Login from './state/Login'
// import Button from './components/Button'
// import Greet from './components/Greet'
// import PersonList from './components/PersonList'
// import Persons from './components/Persons'
// import Status from './components/Status'
// import Heading from "./components/Heading"
// import Containers from './components/Containers'
// import Input from './components/Input'
// import Oscar from './components/Oscar'


function App() {

  // const person  = {
    // fname:'Brcue',
    // lname:"Wayne"
  // }

  // const nameList = [
  //   {
  //     fname:'Brcue',
  //     lname:"Wayne"
  //   },
  //   {
  //     fname:'Clark',
  //     lname:"Kent"
  //   },
  //   {
  //     fname:'Harley',
  //     lname:"Quinn"
  //   }
  // ]

  // const handleClick = (event:React.MouseEvent)=> {
  //   console.log(event.target)
  // }

  // const handleChange = (event:React.ChangeEvent)=> {
  //   console.log(event.target.value);
  // }

  // const style = {
  //   color:'red',
  //   backgroundColor:'black'
  // }

  return (
    <>
      {/* <Greet name="Siddhartha" date={Date()} isLoggedIn={true}/> */}
      {/* <Persons person={person} /> */}
      {/* <PersonList nameList={nameList} /> */}
      {/* <Status status='loading'/> */}
      {/* <Heading>This is Siddhartha</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Cilian Murphy!</Heading>
      </Oscar> */}
      {/* <Button handleClick={handleClick}/>
      <Input handleChange={handleChange}/> */}
      {/* <Containers  styles={style}/> */}
      {/* <Login /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Bag />
      </ThemeContextProvider> */}
      <AuthContextProvider>
        <User />
      </AuthContextProvider>
    </>
  )
}

export default App
