"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

const ErrorBoundary = ({error,reset}:{error:Error,reset:()=>void}) => {

  const router = useRouter()

  const reload = () => {
    startTransition(()=> {
      router.refresh()
      reset()  
    })
  }

  return (
    <div>
      {error.message} <br />
      <button className='bg-blue-500 px-4 py-2' onClick={reload}>Try Again</button>
    </div>
    
  )
}

export default ErrorBoundary