import React from 'react'

const Time = () => {
  let date = new Date();
  let d = date.toLocaleDateString();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  return (
    <div className='mt-5'>
        <h3 className='text-center'>This is the current time:{d} - {hour}:{min}:{sec} <span>{hour<12 ? "AM":"PM"}</span></h3>
        
    </div>
  )
}

export default Time