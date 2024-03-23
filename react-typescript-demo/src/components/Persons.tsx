import React from 'react'

interface PersonType {
    fname:string;
    lname:string;
}


type PersonProps = {
    person:PersonType
}

const Persons = (props:PersonProps) => {
  return (
    <div>{props.person.fname} {props.person.lname}</div>
  )
}

export default Persons