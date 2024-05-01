import React from 'react'

interface PropsType {
  children:string
}

const Heading = (props:PropsType) => {
  return (
    <>
    {props.children}
    </>
  )
}

export default Heading