import ServerComponentOne from '@/components/ServerComponentOne'
import ClientComponentone from '@/components/ClientComponentone'
import React from 'react'

const Interleaving = () => {
  return (
    <div>
        <h1>Interleaving page</h1>
        {/* <ServerComponentOne /> */}
        <ClientComponentone >
            <ServerComponentOne /> 
        </ClientComponentone>
    </div>
  )
}

export default Interleaving