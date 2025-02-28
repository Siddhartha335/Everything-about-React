import React from 'react'
import NavLink from './NavLink'
import NavSearch from './NavSearch'

const Navbar = ({setShow}:{setShow:React.Dispatch<React.SetStateAction<string>>}) => {
  console.log("Navbar rendered")
  return (
    <div className='flex justify-between items-center p-5'>
      <NavLink />
      <NavSearch setShow={setShow} />
    </div>
  )
}

export default Navbar