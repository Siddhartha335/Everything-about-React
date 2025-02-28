"use client"
import React,{useState} from 'react'

const NavSearch = ({setShow}:{setShow:React.Dispatch<React.SetStateAction<string>>}) => {
  const [search,setSearch] = useState('');

  const handleName = (e:any) => {
    const value = e.target.value
    setSearch(value);
    setShow(value);
  }

  console.log("NavSearch rendered")
  return (
    <div>
        <input type="text" placeholder='Search' value={search} className='border-2 border-black' onChange={handleName} />
    </div>
  )
}

export default NavSearch