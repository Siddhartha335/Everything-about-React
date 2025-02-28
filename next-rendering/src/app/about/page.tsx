import React from 'react'
import { cookies } from 'next/headers'

const page = async() => {

    const cookieStore = await cookies();
    console.log(cookieStore.get('theme'));

  return (
    <div>About page {new Date().toLocaleTimeString()}</div>
  )
}

export default page 