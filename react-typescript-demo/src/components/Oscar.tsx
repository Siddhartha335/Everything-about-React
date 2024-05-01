import React from 'react'

type OscarType = {
    children:React.ReactNode
}

const Oscar = (props:OscarType) => {
  return (
    <div>
        <h2>{props.children}</h2>
    </div>
  )
}

export default Oscar