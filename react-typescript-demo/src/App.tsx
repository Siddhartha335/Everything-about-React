import './App.css'
import Greet from './components/Greet'
// import PersonList from './components/PersonList'
// import Persons from './components/Persons'
import Status from './components/Status'
import Heading from "./components/Heading"
import Oscar from './components/Oscar'

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

  return (
    <>
      <Greet name="Siddhartha" date={Date()} isLoggedIn={true}/>
      {/* <Persons person={person} /> */}
      {/* <PersonList nameList={nameList} /> */}
      <Status status='loading'/>
      <Heading>This is Siddhartha</Heading>
      <Oscar>
        <Heading>Oscar goes to Cilian Murphy!</Heading>
      </Oscar>
    </>
  )
}

export default App
