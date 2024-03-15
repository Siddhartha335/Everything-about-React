import React from 'react'

const ButtonsDown = ({onButtonClick}) => {

  return (
            <div className='row mb-3'>
                <div className='col-6'>
                <button type='button' className="w-100 h-100" onClick={onButtonClick}>0</button>
                </div>
                <div className='col-6'>
                <button type='button' className="w-100 h-100" onClick={onButtonClick}>.</button>
                </div>
           </div>
  )
}

export default ButtonsDown