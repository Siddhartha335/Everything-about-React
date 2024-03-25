import React from 'react'

type InputProps = {
    name:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=> void
}

const Input = (props:InputProps) => {
  return (
    <div>
        <input type='text' value={props.name} onChange={props.handleChange} />
    </div>
  )
}

export default Input