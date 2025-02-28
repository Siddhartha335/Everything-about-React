import React from 'react'

export const dynamicParams = false;

export const generateStaticParams = async ():Promise<{id:string}[]> => {
    return [{id:"1"},{id:"2"},{id:"3"}];
}

type Props = {
    params:Promise<{id:string}>
}

const page = async ({params}:Props) => {

    const {id} = await params;

  return (
    <div>Product {id} page rendered in {new Date().toLocaleTimeString()}</div>
  )
}

export default page