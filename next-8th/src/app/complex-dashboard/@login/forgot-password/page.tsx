import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='my-4'>
      <Link href={'/complex-dashboard'} className='p-2 bg-pink-500 mr-3'>Go back</Link>
      <label>Password:</label>
      <input type='password' className='p-2 bg-gray-200' />
    </div>
  )
}

export default page