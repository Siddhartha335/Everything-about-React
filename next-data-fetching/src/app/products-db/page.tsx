import React from 'react'
import { getProducts} from '@/prisma-db'
import ProductsDetail from './product-detail'

export type Products = {
    id: number,
    title: string,
    description: string | null,
    price: number
}

const ProductsDB = async({searchParams}:{searchParams:Promise<{query?:string}>}) => {

  const {query} = await searchParams;

  const products:Products[] = await getProducts(query);


  return (
    <ProductsDetail products={products} />
  )
}

export default ProductsDB