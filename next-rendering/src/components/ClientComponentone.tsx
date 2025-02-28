"use client"

import React, { useState } from 'react'
// import ServerComponentTwo from './ServerComponentTwo'
import ClientComponentTwo from './ClientComponentTwo'

const ClientComponentone = ({children}:{children:React.ReactNode}) => {

  const [name,setName] = useState('Sid')

  return (
    <div>
      <h1>Client Component one</h1>
      <ClientComponentTwo />
      {children}
      {/* <ServerComponentTwo /> */}
    </div>
  )
}

export default ClientComponentone