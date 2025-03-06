"use client"

import { removeProduct } from '@/actions/products'
import Link from 'next/link'
import React,{useOptimistic} from 'react'
import { Products } from './page'

const ProductsDetail =({products}:{products:Products[]}) => {

    const [optimisticProducts,setOptimisticProducts] = useOptimistic(products,(currentProducts,productId)=> {
      return currentProducts.filter((product) => product.id !== productId);
    })

    const removeProductWithId = async(productId:number) => {
      setOptimisticProducts(productId);
      return await removeProduct(productId);
    }

  return (
    <div>
        {optimisticProducts.map((product)=> (
        <div className='bg-white text-black p-2 mx-auto my-4 rounded-2xl w-1/2' key={product.id}>
            <div>
              <Link href={`/products-db/${product.id}`}><h1 className='text-xl font-bold'>{product.title}</h1></Link>
              <p>Description: {product.description} </p>
              <p className='font-semibold'>Price: ${product.price}</p>
            </div>
            <div className=' flex flex-row-reverse'>
              <form action={removeProductWithId.bind(null, product.id)}>
                <button className='bg-amber-600 rounded-sm p-2 hover:cursor-pointer'>Delete</button>
              </form>
            </div>
        </div>
    ))}
    </div>
  )
}

export default ProductsDetail