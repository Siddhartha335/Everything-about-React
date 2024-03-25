import React from 'react'

type ContainerProps = {
    styles:React.CSSProperties
}

const Containers = (props:ContainerProps) => {
  return (
    <div>
        <h2 style={props.styles}>Hi, this is Siddhartha Raut and currently, I am practicing Typescript in React</h2>
    </div>
  )
}

export default Containers