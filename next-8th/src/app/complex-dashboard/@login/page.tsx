import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='my-4'>
      <Link href={'/complex-dashboard/signup'} className='p-2 bg-pink-500 mr-3'>Signup</Link>
      <Link href={'/complex-dashboard/forgot-password'} className='p-2 bg-purple-400'>Forgot Password</Link>
    </div>
  )
}

export default page