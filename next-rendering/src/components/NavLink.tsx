import React from 'react'

const NavLink = () => {
  console.log("Navlink rendered")
  return (
    <div >
        <ul className='flex flex-row gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavLink