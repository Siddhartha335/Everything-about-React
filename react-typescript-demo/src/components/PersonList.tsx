import React from 'react'


interface PersonType {
    fname:string;
    lname:string;
}

type PersonListType = {
    nameList:PersonType[]
}

const PersonList = (props:PersonListType) => {
  return (
    <div>
        {props.nameList.map((name)=> {
            return <h2 key={name.fname}>{name.fname} {name.lname}</h2>
        })}
        {/* <h2>Bruce Wayne</h2>
        <h2>Clark Kent</h2>
        <h2>Harley Quinn</h2> */}
    </div>
  )
}

export default PersonList