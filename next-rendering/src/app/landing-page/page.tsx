"use client"

import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

const Landing = () => {

    const [show,setShow] = useState<string>('');

  return (
    <>
        <Navbar setShow={setShow} />
        <hr />
        <div className='text-center'>
            <h2>Hello {show}</h2>
        </div>
    </>
  )
}

export default Landing