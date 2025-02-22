"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const Order = () => {

    const router = useRouter();

    const handleOrder = () => {
        console.log("Placing your order");
        router.replace("/");
    }

  return (
    <div>
        <h2>Order products</h2>
        <button onClick={handleOrder}>place your order</button>
    </div>
  )
}

export default Order