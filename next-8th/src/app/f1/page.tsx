import Link from 'next/link'
import React from 'react'

const F1 = () => {
  return (
    <div>
        <h1>F1 Component</h1>
        <Link href={'/f1/f2'} className='p-2 bg-pink-500'>Go to F2</Link>
        <Link href={'/f3'} className='p-2 bg-pink-500'>Go to F3</Link>
    </div>
  )
}

export default F1