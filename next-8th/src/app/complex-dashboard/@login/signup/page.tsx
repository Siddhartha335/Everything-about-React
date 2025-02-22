import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='my-4'>
      <Link href={'/complex-dashboard'} className='p-2 bg-pink-500 mr-3'>Go back</Link> <br />
      <label>Username:</label>
      <input type='text' className='p-2 bg-gray-200' />
    </div>
  )
}

export default page