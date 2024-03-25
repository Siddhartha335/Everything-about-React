import React, { useState } from 'react'

const Login = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    const handleLogout = () => {
        setIsLoggedIn(!isLoggedIn)
    }


  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}

export default Login