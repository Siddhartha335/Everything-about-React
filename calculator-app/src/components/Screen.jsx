import React from 'react'

const Screen = ({calVal}) => {


  return (
    <div className='row'>
        <div className='col-12'>
        <input type='text' className='w-100 mb-3' value={calVal} readOnly></input>
        </div>
    </div>
  )
}

export default Screen