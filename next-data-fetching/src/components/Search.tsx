import React from 'react'
import Form from "next/form"

const Search = () => {
  return (
    <Form action={'/products-db'}>
        <div>
            <input type='text' name='query' placeholder='Search..' className='bg-white text-black mr-2'/>
            <button className='bg-amber-600 rounded-sm p-2'>Search</button>
        </div>
    </Form>
  )
}

export default Search