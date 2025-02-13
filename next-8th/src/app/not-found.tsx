import React from 'react'

const NotFound = () => {
  return (
    <div className='grid place-items-center h-screen bg-[#0d1117]'>
        <div className='text-white'>
            <h2 className='text-center font-bold text-2xl mb-3'>Page Not Found</h2>
            <h4 className='text-lg'>Couldn't find the requested resource</h4>
        </div>
    </div>
  )
}

export default NotFound