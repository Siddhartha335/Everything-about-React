import Link from 'next/link'
import React from 'react'

const F2 = () => {
  return (
    <div>
      <h1>F2 Component</h1>
      <Link href={"/f4"} className='p-2 bg-pink-500'>Go to F4</Link>
    </div>
  )
}

export default F2