"use client"

import React, { useState } from 'react'

const Conuter = () => {

    const [count,setCount] = useState<number>(0)

    const handleCount = () => {
        setCount(count+1);
    }

    return (
        <>
            <h2>Conuter: {count}</h2>
            <button onClick={handleCount} className="bg-red-500 p-2 my-2">Click to increment</button>
        </>
    )
}

export default Conuter