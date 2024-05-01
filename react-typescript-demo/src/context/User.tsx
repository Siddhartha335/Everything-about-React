import React, { useContext } from 'react'
import { AuthContext } from './UserContext'

const User = () => {
   const userContext =  useContext(AuthContext)

    const handleLogin = ()=> {
        userContext?.setUser({
            name:"Siddhartha Raut",
            email:"siddhartharaut33@gmail.com"
        })
    }

    const handleLogout = ()=> {
        userContext?.setUser(null)
    }


  return (
    <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>
                User name is {userContext?.user?.name}<br />
                User email is {userContext?.user?.email}
            </div>
    </div>
  )
}

export default User