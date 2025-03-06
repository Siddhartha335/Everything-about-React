import React from 'react'

type UserDetails = {
    id:number,
    name:string,
    username:string,
    email:string,
    phone:string
}

const UsersServer = async () => {

    await new Promise((resolve) => setTimeout(resolve, 4000));

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data:UserDetails[] = await response.json();

  return (
    <div>
        {data.map((user)=> (
            <div className='bg-white text-black p-2 m-2 rounded-2xl' key={user.id}>
                <h1 className='text-xl font-bold'>{user.name}</h1>
                <p>Username: {user.username} </p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </div>
        ))}
    </div>
  )
}

export default UsersServer