import { GreetProps } from "./Greet.types"

const Greet = (props:GreetProps)=> {

  const {date="sid"} = props

  return (
    <>
         {props.isLoggedIn ? <h1>Hello {props.name}!, Welcome to React with Typescript and today is {date}</h1> : <h1>Welcome Guest</h1>}
    </>
  )
}

export default Greet