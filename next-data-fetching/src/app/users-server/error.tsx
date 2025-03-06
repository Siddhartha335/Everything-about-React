"use client"

import React, { useEffect } from 'react'

const error = ({error}:{error:Error}) => {

    useEffect(() => {
        console.log(error);
    }, [error])

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='text-red-500 text-2xl'>Error fetching users data</div>
    </div>
  )
}

export default error