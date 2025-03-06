"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'

const Button = () => {

    const {pending} = useFormStatus();

  return (
        <button
        type="submit"
        className="bg-amber-600 rounded-sm p-2 w-full hover:cursor-pointer disabled:bg-gray-600" disabled={pending}
        >
        Submit
        </button>
  )
}

export default Button