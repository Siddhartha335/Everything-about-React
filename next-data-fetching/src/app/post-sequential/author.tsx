import React from 'react'

type User = {
 id:number
 name:string   
}

const Author = async ({userId}:{userId:number}) => {

    await new Promise((resolve) => setTimeout(resolve, 4000));

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user:User = await response.json();

  return (
        <h1 className='text-lg font-extralight'>Author: {user.name}</h1>
  )
}

export default Author