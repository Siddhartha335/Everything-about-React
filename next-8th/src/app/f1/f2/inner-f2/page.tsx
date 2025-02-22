import Link from 'next/link'
import React from 'react'

const InnerF2 = () => {
  return (
    <div>
      <h1>Inner F2 Component</h1>
      <Link href={'/f5'} className='p-2 bg-pink-500'> Go to F5</Link>
    </div>
  )
}

export default InnerF2