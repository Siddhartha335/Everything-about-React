import React from 'react'

const generateramdomNumber = (num:number) => {
  return Math.floor(Math.random() * num)
}

const ProductLayout = ({children}:{children:React.ReactNode}) => {

  const random = generateramdomNumber(2)
  if(random === 0) {
    throw new Error("Error in products page")
  }

  return (
    <div>
        {children}
        <h1 className='text-2xl font-bold'>Featured products</h1>
    </div>
    
  )
}

export default ProductLayout