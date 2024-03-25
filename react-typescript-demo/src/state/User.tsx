import React, { useEffect, useState } from 'react'

type UserType = {
    name:string;
    email:string
}

const User = () => {

    const [user,setUser] = useState<UserType>({} as UserType)   
    const [showEmail,setShowEmail] = useState(false);

    useEffect(()=> {
        if(Object.keys(user).length !== 0) {
            const timer = setTimeout(()=> {
                setShowEmail(true)
            },2000)
    
            return ()=> {
                clearTimeout(timer)
            }
        }
    },[user])

    const handleLogin = () => {
        setUser({
            name:'Siddhartha Raut',
            email:'siddhartharaut33@gmail.com'
        })
    }

    // const handleLogout = () => {
    //     setUser(null)
    //     setShowEmail(false)
    // }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button >Logout</button>
        <div>
            User name is {user.name} <br />
            User email is {showEmail && `${user.email}`}
        </div>
    </div>
  )
}

export default User