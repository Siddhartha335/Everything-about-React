import React from 'react'

const Buttons = ({onButtonClick}) => {

  const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9']  

  return (
    <div className='row'>
        {buttonNames.map((button,index)=> (
            <div className='col-4 mb-3'>
                <button type='button' className="w-100 h-100 " onClick={onButtonClick} key={index} >{button}</button>
            </div>
        ))}
        
    </div>
  )
}

export default Buttons