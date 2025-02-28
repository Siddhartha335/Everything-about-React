import Product from '@/components/Product'
import Reviews from '@/components/Reviews'
import React,{Suspense} from 'react'

const page = () => {
  return (
    <div>
        <h1>Product reviews page</h1>
        <Suspense fallback={<p>Loading products page...</p>}>
            <Product />
        </Suspense>
        <Suspense fallback={<p>Loading reviews...</p>}>
            <Reviews />
        </Suspense>
    </div>
  )
}

export default page