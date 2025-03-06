"use client"

import React, { useEffect, useState } from 'react'

type UserDetails = {
    id:number,
    name:string,
    username:string,
    email:string,
    phone:string
}

const UsersClient = () => {

    const [users,setUsers] = useState<UserDetails[]>([]);
    const [loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string>('');

    useEffect(() => {
        const fetchUsers = async ():Promise<void> => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            }
            catch(err) {
                if(err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occured!")
                }
            }
            finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, [])


    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

  return (
    <>
        {users.map((user)=> (
            <div className='bg-white text-black p-2 m-2 rounded-2xl' key={user.id}>
                <h1 className='text-xl font-bold'>{user.name}</h1>
                <p>Username: {user.username} </p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </div>
        ))}
    </>
  )
}

export default UsersClient