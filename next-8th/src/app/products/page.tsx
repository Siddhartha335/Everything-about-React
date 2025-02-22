import React from 'react';
import Link from 'next/link';

const Products = () => {
  const productid = 100;
  return (
    <div>
        <h1 className="text-xl font-bold">Products page</h1>
        <div className='flex flex-col'>
          <Link href="/products/1">Product 1</Link>
          <Link href="/products/2">Product 2</Link>
          <Link href="/products/3" replace>Product 3</Link>
          <Link href={`/products/${productid}`}>Product 100</Link>
        </div>
    </div>
  )
}

export default Products