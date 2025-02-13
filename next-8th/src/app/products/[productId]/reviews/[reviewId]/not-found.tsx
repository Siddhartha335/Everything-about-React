"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const NotFound = () => {

  const pathname = usePathname();
  const productId = pathname.split("/")[2]
  const reviewId = pathname.split("/")[4]

  return (
    <div className='grid place-items-center h-screen bg-[#0d1117]'>
        <div className='text-white'>
            <h2 className='text-center font-bold text-2xl mb-3'>Reviews {reviewId} Not Found of product {productId}</h2>
        </div>
    </div>
  )
}

export default NotFound